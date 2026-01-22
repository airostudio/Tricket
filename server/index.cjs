const express = require('express')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid')
const db = require('./database.cjs')

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Generate team code
function generateTeamCode() {
  const prefix = 'TRK'
  const number = Math.floor(1000 + Math.random() * 9000)
  return `${prefix}-${number}`
}

// ============================================
// PARKS API
// ============================================

// Get all parks
app.get('/api/parks', (req, res) => {
  try {
    const parks = db.prepare('SELECT * FROM parks ORDER BY chain, name').all()
    res.json(parks)
  } catch (error) {
    console.error('Error fetching parks:', error)
    res.status(500).json({ error: 'Failed to fetch parks' })
  }
})

// Get park by code
app.get('/api/parks/:code', (req, res) => {
  try {
    const park = db.prepare('SELECT * FROM parks WHERE code = ?').get(req.params.code)
    if (!park) {
      return res.status(404).json({ error: 'Park not found' })
    }
    res.json(park)
  } catch (error) {
    console.error('Error fetching park:', error)
    res.status(500).json({ error: 'Failed to fetch park' })
  }
})

// ============================================
// TEAM REGISTRATION API
// ============================================

// Register a new team
app.post('/api/register', (req, res) => {
  try {
    const {
      parkLocation,
      otherParkName,
      teamName,
      leaderName,
      leaderEmail,
      leaderPhone,
      siteNumber,
      players,
      agreeToRules,
      agreeToWaiver,
      agreeToMedia,
    } = req.body

    // Generate unique team code
    let teamCode = generateTeamCode()
    let attempts = 0
    while (db.prepare('SELECT 1 FROM teams WHERE team_code = ?').get(teamCode) && attempts < 10) {
      teamCode = generateTeamCode()
      attempts++
    }

    // Handle "other" park
    let parkCode = parkLocation
    if (parkLocation === 'other' && otherParkName) {
      // Create a temporary park entry for independent parks
      const otherCode = `other-${Date.now()}`
      db.prepare(`
        INSERT INTO parks (code, name, chain, state) VALUES (?, ?, 'Independent', 'Various')
      `).run(otherCode, otherParkName)
      parkCode = otherCode
    }

    // Insert team
    const teamResult = db.prepare(`
      INSERT INTO teams (team_code, team_name, park_code, site_number, leader_name, leader_email, leader_phone, agree_to_rules, agree_to_waiver, agree_to_media)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      teamCode,
      teamName,
      parkCode,
      siteNumber || null,
      leaderName,
      leaderEmail,
      leaderPhone,
      agreeToRules ? 1 : 0,
      agreeToWaiver ? 1 : 0,
      agreeToMedia ? 1 : 0
    )

    const teamId = teamResult.lastInsertRowid

    // Insert players
    const insertPlayer = db.prepare(`
      INSERT INTO players (team_id, name, age_bracket, sex, photo_consent, waiver_accepted)
      VALUES (?, ?, ?, ?, ?, 1)
    `)

    players.forEach(player => {
      if (player.name && player.name.trim()) {
        insertPlayer.run(
          teamId,
          player.name.trim(),
          player.age || 'unknown',
          player.sex || 'unknown',
          agreeToMedia ? 1 : 0
        )

        // Track player visit
        if (leaderEmail) {
          db.prepare(`
            INSERT INTO player_visits (player_email, player_name, park_code, team_id)
            VALUES (?, ?, ?, ?)
          `).run(leaderEmail, player.name.trim(), parkCode, teamId)
        }
      }
    })

    res.status(201).json({
      success: true,
      teamCode,
      teamId,
      message: 'Team registered successfully'
    })
  } catch (error) {
    console.error('Registration error:', error)
    res.status(500).json({ error: 'Registration failed', details: error.message })
  }
})

// Get team by code
app.get('/api/teams/:code', (req, res) => {
  try {
    const team = db.prepare(`
      SELECT t.*, p.name as park_name
      FROM teams t
      LEFT JOIN parks p ON t.park_code = p.code
      WHERE t.team_code = ?
    `).get(req.params.code)

    if (!team) {
      return res.status(404).json({ error: 'Team not found' })
    }

    const players = db.prepare('SELECT * FROM players WHERE team_id = ?').all(team.id)

    res.json({ ...team, players })
  } catch (error) {
    console.error('Error fetching team:', error)
    res.status(500).json({ error: 'Failed to fetch team' })
  }
})

// Get all teams for a park
app.get('/api/parks/:code/teams', (req, res) => {
  try {
    const teams = db.prepare(`
      SELECT t.*, COUNT(p.id) as player_count
      FROM teams t
      LEFT JOIN players p ON t.id = p.team_id
      WHERE t.park_code = ? AND t.status = 'active'
      GROUP BY t.id
      ORDER BY t.created_at DESC
    `).all(req.params.code)

    res.json(teams)
  } catch (error) {
    console.error('Error fetching teams:', error)
    res.status(500).json({ error: 'Failed to fetch teams' })
  }
})

// ============================================
// PLAYER JOIN API
// ============================================

// Join a team as a player
app.post('/api/teams/:code/join', (req, res) => {
  try {
    const { name, ageBracket, sex, email, photoConsent } = req.body
    const teamCode = req.params.code

    const team = db.prepare('SELECT id, park_code FROM teams WHERE team_code = ?').get(teamCode)
    if (!team) {
      return res.status(404).json({ error: 'Team not found' })
    }

    const result = db.prepare(`
      INSERT INTO players (team_id, name, age_bracket, sex, email, photo_consent, waiver_accepted)
      VALUES (?, ?, ?, ?, ?, ?, 1)
    `).run(team.id, name, ageBracket, sex, email || null, photoConsent ? 1 : 0)

    // Track visit
    if (email) {
      db.prepare(`
        INSERT INTO player_visits (player_email, player_name, park_code, team_id)
        VALUES (?, ?, ?, ?)
      `).run(email, name, team.park_code, team.id)
    }

    res.status(201).json({
      success: true,
      playerId: result.lastInsertRowid,
      message: 'Successfully joined the team'
    })
  } catch (error) {
    console.error('Error joining team:', error)
    res.status(500).json({ error: 'Failed to join team' })
  }
})

// ============================================
// FIXTURES API
// ============================================

// Get fixtures for a park
app.get('/api/parks/:code/fixtures', (req, res) => {
  try {
    const { status, date } = req.query
    let query = `
      SELECT f.*,
        ta.team_name as team_a_name, ta.team_code as team_a_code,
        tb.team_name as team_b_name, tb.team_code as team_b_code
      FROM fixtures f
      LEFT JOIN teams ta ON f.team_a_id = ta.id
      LEFT JOIN teams tb ON f.team_b_id = tb.id
      WHERE f.park_code = ?
    `
    const params = [req.params.code]

    if (status) {
      query += ' AND f.status = ?'
      params.push(status)
    }
    if (date) {
      query += ' AND f.match_date = ?'
      params.push(date)
    }

    query += ' ORDER BY f.match_date, f.match_time'

    const fixtures = db.prepare(query).all(...params)
    res.json(fixtures)
  } catch (error) {
    console.error('Error fetching fixtures:', error)
    res.status(500).json({ error: 'Failed to fetch fixtures' })
  }
})

// Create a fixture
app.post('/api/fixtures', (req, res) => {
  try {
    const { parkCode, matchDate, matchTime, court, teamAId, teamBId, round, notes } = req.body

    const result = db.prepare(`
      INSERT INTO fixtures (park_code, match_date, match_time, court, team_a_id, team_b_id, round, notes)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(parkCode, matchDate, matchTime, court || 'Tennis Court 1', teamAId || null, teamBId || null, round || null, notes || null)

    res.status(201).json({
      success: true,
      fixtureId: result.lastInsertRowid
    })
  } catch (error) {
    console.error('Error creating fixture:', error)
    res.status(500).json({ error: 'Failed to create fixture' })
  }
})

// Update fixture score
app.patch('/api/fixtures/:id/score', (req, res) => {
  try {
    const { teamAScore, teamBScore, status } = req.body

    db.prepare(`
      UPDATE fixtures SET team_a_score = ?, team_b_score = ?, status = ?
      WHERE id = ?
    `).run(teamAScore, teamBScore, status || 'completed', req.params.id)

    res.json({ success: true })
  } catch (error) {
    console.error('Error updating score:', error)
    res.status(500).json({ error: 'Failed to update score' })
  }
})

// ============================================
// CHECK-IN API
// ============================================

// Team check-in
app.post('/api/fixtures/:fixtureId/checkin', (req, res) => {
  try {
    const { teamId, captainName, playersPresent, paymentStatus } = req.body

    db.prepare(`
      INSERT INTO check_ins (fixture_id, team_id, captain_name, players_present, payment_status)
      VALUES (?, ?, ?, ?, ?)
    `).run(req.params.fixtureId, teamId, captainName, JSON.stringify(playersPresent), paymentStatus || 'pending')

    res.status(201).json({ success: true })
  } catch (error) {
    console.error('Error checking in:', error)
    res.status(500).json({ error: 'Failed to check in' })
  }
})

// ============================================
// LADDER / STANDINGS API
// ============================================

// Get ladder for a park
app.get('/api/parks/:code/ladder', (req, res) => {
  try {
    const ladder = db.prepare(`
      SELECT
        t.id,
        t.team_code,
        t.team_name,
        COUNT(CASE WHEN (f.team_a_id = t.id AND f.team_a_score > f.team_b_score) OR (f.team_b_id = t.id AND f.team_b_score > f.team_a_score) THEN 1 END) as wins,
        COUNT(CASE WHEN (f.team_a_id = t.id AND f.team_a_score < f.team_b_score) OR (f.team_b_id = t.id AND f.team_b_score < f.team_a_score) THEN 1 END) as losses,
        COUNT(CASE WHEN f.team_a_score = f.team_b_score AND f.status = 'completed' THEN 1 END) as draws,
        COUNT(CASE WHEN f.status = 'completed' AND (f.team_a_id = t.id OR f.team_b_id = t.id) THEN 1 END) as played,
        COALESCE(SUM(CASE WHEN f.team_a_id = t.id THEN f.team_a_score WHEN f.team_b_id = t.id THEN f.team_b_score END), 0) as runs_for,
        COALESCE(SUM(CASE WHEN f.team_a_id = t.id THEN f.team_b_score WHEN f.team_b_id = t.id THEN f.team_a_score END), 0) as runs_against
      FROM teams t
      LEFT JOIN fixtures f ON (f.team_a_id = t.id OR f.team_b_id = t.id) AND f.park_code = ?
      WHERE t.park_code = ? AND t.status = 'active'
      GROUP BY t.id
      ORDER BY wins DESC, (runs_for - runs_against) DESC
    `).all(req.params.code, req.params.code)

    // Add points (2 for win, 1 for draw, 0 for loss)
    const ladderWithPoints = ladder.map((team, index) => ({
      ...team,
      points: (team.wins * 2) + team.draws,
      position: index + 1,
      nrr: team.runs_for - team.runs_against
    }))

    res.json(ladderWithPoints)
  } catch (error) {
    console.error('Error fetching ladder:', error)
    res.status(500).json({ error: 'Failed to fetch ladder' })
  }
})

// ============================================
// PLAYER HISTORY / RETURN VISITS
// ============================================

// Check if player has visited before (loyalty tracking)
app.get('/api/players/history', (req, res) => {
  try {
    const { email } = req.query
    if (!email) {
      return res.status(400).json({ error: 'Email required' })
    }

    const visits = db.prepare(`
      SELECT pv.*, p.name as park_name
      FROM player_visits pv
      LEFT JOIN parks p ON pv.park_code = p.code
      WHERE pv.player_email = ?
      ORDER BY pv.visit_date DESC
    `).all(email)

    const uniqueParks = [...new Set(visits.map(v => v.park_code))].length
    const totalVisits = visits.length

    res.json({
      email,
      totalVisits,
      uniqueParks,
      visits,
      isReturningPlayer: totalVisits > 1
    })
  } catch (error) {
    console.error('Error fetching player history:', error)
    res.status(500).json({ error: 'Failed to fetch player history' })
  }
})

// ============================================
// STATS API (for dashboards)
// ============================================

app.get('/api/stats', (req, res) => {
  try {
    const totalTeams = db.prepare('SELECT COUNT(*) as count FROM teams WHERE status = ?').get('active').count
    const totalPlayers = db.prepare('SELECT COUNT(*) as count FROM players').get().count
    const totalMatches = db.prepare('SELECT COUNT(*) as count FROM fixtures WHERE status = ?').get('completed').count
    const totalParks = db.prepare('SELECT COUNT(DISTINCT park_code) as count FROM teams').get().count

    res.json({
      totalTeams,
      totalPlayers,
      totalMatches,
      activeParkCount: totalParks
    })
  } catch (error) {
    console.error('Error fetching stats:', error)
    res.status(500).json({ error: 'Failed to fetch stats' })
  }
})

// ============================================
// HEALTH CHECK
// ============================================

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Start server
app.listen(PORT, () => {
  console.log(`Tricket API server running on port ${PORT}`)
  console.log(`Health check: http://localhost:${PORT}/api/health`)
})
