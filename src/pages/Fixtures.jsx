import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Trophy, Clock, MapPin } from 'lucide-react'
import './Fixtures.css'

function Fixtures() {
  const [activeTab, setActiveTab] = useState('fixtures')

  // Sample fixture data - would be dynamically loaded in production
  const fixtures = [
    { id: 1, date: 'Mon 20 Jan', time: '10:00 AM', court: 'Court 1', teamA: 'Thunder Bolts', teamB: 'Beach Bums', status: 'upcoming' },
    { id: 2, date: 'Mon 20 Jan', time: '10:30 AM', court: 'Court 1', teamA: 'Park Rangers', teamB: 'Sunset Sixers', status: 'upcoming' },
    { id: 3, date: 'Mon 20 Jan', time: '11:00 AM', court: 'Court 1', teamA: 'Caravan Kings', teamB: 'Holiday Heroes', status: 'upcoming' },
    { id: 4, date: 'Tue 21 Jan', time: '10:00 AM', court: 'Court 1', teamA: 'Thunder Bolts', teamB: 'Park Rangers', status: 'upcoming' },
    { id: 5, date: 'Tue 21 Jan', time: '10:30 AM', court: 'Court 1', teamA: 'Beach Bums', teamB: 'Caravan Kings', status: 'upcoming' },
    { id: 6, date: 'Tue 21 Jan', time: '11:00 AM', court: 'Court 1', teamA: 'Sunset Sixers', teamB: 'Holiday Heroes', status: 'upcoming' },
  ]

  // Sample ladder data
  const ladder = [
    { position: 1, team: 'Thunder Bolts', played: 3, won: 3, lost: 0, nrr: '+1.25', points: 6 },
    { position: 2, team: 'Park Rangers', played: 3, won: 2, lost: 1, nrr: '+0.85', points: 4 },
    { position: 3, team: 'Beach Bums', played: 3, won: 2, lost: 1, nrr: '+0.42', points: 4 },
    { position: 4, team: 'Caravan Kings', played: 3, won: 1, lost: 2, nrr: '-0.15', points: 2 },
    { position: 5, team: 'Sunset Sixers', played: 3, won: 1, lost: 2, nrr: '-0.68', points: 2 },
    { position: 6, team: 'Holiday Heroes', played: 3, won: 0, lost: 3, nrr: '-1.45', points: 0 },
  ]

  // Sample results
  const results = [
    { id: 1, date: 'Sun 19 Jan', teamA: 'Thunder Bolts', scoreA: 48, teamB: 'Caravan Kings', scoreB: 32, winner: 'Thunder Bolts' },
    { id: 2, date: 'Sun 19 Jan', teamA: 'Park Rangers', scoreA: 45, teamB: 'Holiday Heroes', scoreB: 28, winner: 'Park Rangers' },
    { id: 3, date: 'Sat 18 Jan', teamA: 'Beach Bums', scoreA: 52, teamB: 'Sunset Sixers', scoreB: 41, winner: 'Beach Bums' },
  ]

  return (
    <div className="fixtures-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>Fixtures & Ladder</h1>
          <p className="hero-lead">
            Check the schedule, see the standings, and track your team's progress!
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="section tab-section">
        <div className="container">
          <div className="tab-nav">
            <button
              className={`tab-btn ${activeTab === 'fixtures' ? 'active' : ''}`}
              onClick={() => setActiveTab('fixtures')}
            >
              <Calendar size={20} />
              Fixtures
            </button>
            <button
              className={`tab-btn ${activeTab === 'ladder' ? 'active' : ''}`}
              onClick={() => setActiveTab('ladder')}
            >
              <Trophy size={20} />
              Ladder
            </button>
            <button
              className={`tab-btn ${activeTab === 'results' ? 'active' : ''}`}
              onClick={() => setActiveTab('results')}
            >
              <Clock size={20} />
              Results
            </button>
          </div>

          {/* Fixtures Tab */}
          {activeTab === 'fixtures' && (
            <div className="tab-content">
              <div className="fixtures-header">
                <h2>Upcoming Matches</h2>
                <p>All times are local park time. Arrive 10 minutes early!</p>
              </div>
              <div className="fixtures-list">
                {fixtures.map((match) => (
                  <div key={match.id} className="fixture-card">
                    <div className="fixture-date">
                      <span className="date">{match.date}</span>
                      <span className="time">{match.time}</span>
                    </div>
                    <div className="fixture-teams">
                      <span className="team">{match.teamA}</span>
                      <span className="vs">vs</span>
                      <span className="team">{match.teamB}</span>
                    </div>
                    <div className="fixture-venue">
                      <MapPin size={16} />
                      {match.court}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Ladder Tab */}
          {activeTab === 'ladder' && (
            <div className="tab-content">
              <div className="ladder-header">
                <h2>Competition Ladder</h2>
                <p>Updated after each match day</p>
              </div>
              <div className="ladder-table-wrapper">
                <table className="ladder-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Team</th>
                      <th>P</th>
                      <th>W</th>
                      <th>L</th>
                      <th>NRR</th>
                      <th>Pts</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ladder.map((team) => (
                      <tr key={team.position} className={team.position <= 2 ? 'finals' : ''}>
                        <td className="position">{team.position}</td>
                        <td className="team-name">{team.team}</td>
                        <td>{team.played}</td>
                        <td>{team.won}</td>
                        <td>{team.lost}</td>
                        <td className={team.nrr.startsWith('+') ? 'positive' : 'negative'}>{team.nrr}</td>
                        <td className="points">{team.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="ladder-legend">
                <span className="legend-item finals-spot">
                  <span className="dot"></span> Finals qualification
                </span>
                <span className="legend-item">
                  P = Played, W = Won, L = Lost, NRR = Net Run Rate, Pts = Points
                </span>
              </div>
            </div>
          )}

          {/* Results Tab */}
          {activeTab === 'results' && (
            <div className="tab-content">
              <div className="results-header">
                <h2>Recent Results</h2>
                <p>Match results from completed games</p>
              </div>
              <div className="results-list">
                {results.map((result) => (
                  <div key={result.id} className="result-card">
                    <div className="result-date">{result.date}</div>
                    <div className="result-match">
                      <div className={`result-team ${result.winner === result.teamA ? 'winner' : ''}`}>
                        <span className="team-name">{result.teamA}</span>
                        <span className="score">{result.scoreA}</span>
                      </div>
                      <div className={`result-team ${result.winner === result.teamB ? 'winner' : ''}`}>
                        <span className="team-name">{result.teamB}</span>
                        <span className="score">{result.scoreB}</span>
                      </div>
                    </div>
                    <div className="result-winner">
                      <Trophy size={16} />
                      {result.winner} wins!
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="section alt-bg">
        <div className="container">
          <div className="fixtures-info">
            <div className="info-card">
              <Calendar size={28} />
              <h3>Schedule Updates</h3>
              <p>Fixtures are updated weekly. Check back for new match times and any changes due to weather.</p>
            </div>
            <div className="info-card">
              <Trophy size={28} />
              <h3>Finals Format</h3>
              <p>Top 2 teams qualify for the Grand Final. Check with park reception for finals dates and prizes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2>Want Your Team on the Ladder?</h2>
          <p>Register now and compete for the top spot!</p>
          <div className="cta-buttons">
            <Link to="/enter" className="btn btn-primary btn-large">Enter a Team</Link>
            <Link to="/rules" className="btn btn-outline btn-large">Read the Rules</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Fixtures
