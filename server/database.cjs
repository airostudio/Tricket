const Database = require('better-sqlite3')
const path = require('path')

const dbPath = path.join(__dirname, 'tricket.db')
const db = new Database(dbPath)

// Enable foreign keys
db.pragma('foreign_keys = ON')

// Initialize database tables
function initializeDatabase() {
  // Parks table
  db.exec(`
    CREATE TABLE IF NOT EXISTS parks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      code TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      chain TEXT,
      location TEXT,
      state TEXT,
      contact_email TEXT,
      contact_phone TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // Teams table
  db.exec(`
    CREATE TABLE IF NOT EXISTS teams (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      team_code TEXT UNIQUE NOT NULL,
      team_name TEXT NOT NULL,
      park_code TEXT NOT NULL,
      site_number TEXT,
      leader_name TEXT NOT NULL,
      leader_email TEXT NOT NULL,
      leader_phone TEXT NOT NULL,
      agree_to_rules INTEGER DEFAULT 0,
      agree_to_waiver INTEGER DEFAULT 0,
      agree_to_media INTEGER DEFAULT 0,
      status TEXT DEFAULT 'active',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (park_code) REFERENCES parks(code)
    )
  `)

  // Players table
  db.exec(`
    CREATE TABLE IF NOT EXISTS players (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      team_id INTEGER NOT NULL,
      name TEXT NOT NULL,
      age_bracket TEXT NOT NULL,
      sex TEXT NOT NULL,
      email TEXT,
      photo_consent INTEGER DEFAULT 1,
      waiver_accepted INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (team_id) REFERENCES teams(id)
    )
  `)

  // Fixtures table
  db.exec(`
    CREATE TABLE IF NOT EXISTS fixtures (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      park_code TEXT NOT NULL,
      match_date DATE NOT NULL,
      match_time TEXT NOT NULL,
      court TEXT DEFAULT 'Tennis Court 1',
      team_a_id INTEGER,
      team_b_id INTEGER,
      team_a_score INTEGER,
      team_b_score INTEGER,
      status TEXT DEFAULT 'scheduled',
      round TEXT,
      notes TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (park_code) REFERENCES parks(code),
      FOREIGN KEY (team_a_id) REFERENCES teams(id),
      FOREIGN KEY (team_b_id) REFERENCES teams(id)
    )
  `)

  // Check-ins table
  db.exec(`
    CREATE TABLE IF NOT EXISTS check_ins (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      fixture_id INTEGER NOT NULL,
      team_id INTEGER NOT NULL,
      captain_name TEXT,
      players_present TEXT,
      payment_status TEXT DEFAULT 'pending',
      checked_in_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (fixture_id) REFERENCES fixtures(id),
      FOREIGN KEY (team_id) REFERENCES teams(id)
    )
  `)

  // Player history (for return visits tracking)
  db.exec(`
    CREATE TABLE IF NOT EXISTS player_visits (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      player_email TEXT NOT NULL,
      player_name TEXT NOT NULL,
      park_code TEXT NOT NULL,
      team_id INTEGER,
      visit_date DATE DEFAULT CURRENT_DATE,
      FOREIGN KEY (park_code) REFERENCES parks(code),
      FOREIGN KEY (team_id) REFERENCES teams(id)
    )
  `)

  // Insert default parks if not exist
  const insertPark = db.prepare(`
    INSERT OR IGNORE INTO parks (code, name, chain, state) VALUES (?, ?, ?, ?)
  `)

  const defaultParks = [
    ['discovery-byron', 'Discovery Parks - Byron Bay', 'Discovery Parks', 'NSW'],
    ['discovery-rottnest', 'Discovery Parks - Rottnest Island', 'Discovery Parks', 'WA'],
    ['discovery-cradle', 'Discovery Parks - Cradle Mountain', 'Discovery Parks', 'TAS'],
    ['discovery-barossa', 'Discovery Parks - Barossa Valley', 'Discovery Parks', 'SA'],
    ['tasman-strahan', 'Tasman Holiday Parks - Strahan', 'Tasman Holiday Parks', 'TAS'],
    ['tasman-port-arthur', 'Tasman Holiday Parks - Port Arthur', 'Tasman Holiday Parks', 'TAS'],
    ['gday-emerald', "G'Day Parks - Emerald", "G'Day Parks", 'QLD'],
    ['gday-echuca', "G'Day Parks - Echuca", "G'Day Parks", 'VIC'],
    ['big4-adelaide', 'BIG4 - Adelaide Shores', 'BIG4', 'SA'],
    ['big4-traralgon', 'BIG4 - Traralgon Park Lane', 'BIG4', 'VIC'],
    ['big4-gold-coast', 'BIG4 - Gold Coast Holiday Park', 'BIG4', 'QLD'],
    ['ingenia-sydney', 'Ingenia Holidays - Sydney Hills', 'Ingenia Holidays', 'NSW'],
    ['ingenia-cairns', 'Ingenia Holidays - Cairns Coconut', 'Ingenia Holidays', 'QLD'],
    ['other', 'Independent Park', 'Independent', 'Various'],
  ]

  defaultParks.forEach(park => insertPark.run(...park))

  console.log('Database initialized successfully')
}

// Initialize on module load
initializeDatabase()

module.exports = db
