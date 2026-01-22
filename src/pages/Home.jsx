import { Link } from 'react-router-dom'
import { Users, Trophy, Calendar, Shield, MapPin, Clock, DollarSign, Phone } from 'lucide-react'
import './Home.css'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Cricket on the Tennis Court</h1>
            <p className="hero-subtitle">
              Tricket is a fast, fun, and safe cricket game designed for caravan park guests.
              No experience needed - just grab a team, hit the court, and have a blast!
            </p>
            <div className="hero-buttons">
              <Link to="/enter" className="btn btn-primary btn-large">
                Enter a Team
              </Link>
              <Link to="/rules" className="btn btn-outline btn-large">
                View Rules
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/tricket-logo.png" alt="Tricket Logo" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="grid grid-3 steps">
            <div className="step card">
              <div className="step-icon">
                <Users size={40} />
              </div>
              <div className="step-number">1</div>
              <h3>Register Your Team</h3>
              <p>Gather 6 players, choose a team name, and register using our simple QR code system.</p>
            </div>
            <div className="step card">
              <div className="step-icon">
                <Calendar size={40} />
              </div>
              <div className="step-number">2</div>
              <h3>Play Your Matches</h3>
              <p>Show up 10 minutes early, check in, and enjoy fast-paced cricket action on the tennis court.</p>
            </div>
            <div className="step card">
              <div className="step-icon">
                <Trophy size={40} />
              </div>
              <div className="step-number">3</div>
              <h3>Win Prizes</h3>
              <p>Compete for the top spot, earn bragging rights, and take home prizes for your team!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Details Strip */}
      <section className="key-details">
        <div className="container">
          <div className="details-grid">
            <div className="detail-item">
              <MapPin size={24} />
              <div>
                <strong>Where</strong>
                <span>Tennis Court at your park</span>
              </div>
            </div>
            <div className="detail-item">
              <Clock size={24} />
              <div>
                <strong>When</strong>
                <span>Check fixtures for times</span>
              </div>
            </div>
            <div className="detail-item">
              <DollarSign size={24} />
              <div>
                <strong>Cost</strong>
                <span>$5 per player</span>
              </div>
            </div>
            <div className="detail-item">
              <Users size={24} />
              <div>
                <strong>Ages</strong>
                <span>All ages welcome</span>
              </div>
            </div>
            <div className="detail-item">
              <Shield size={24} />
              <div>
                <strong>Safety</strong>
                <span>Soft ball, safe play</span>
              </div>
            </div>
            <div className="detail-item">
              <Phone size={24} />
              <div>
                <strong>Contact</strong>
                <span>Park reception</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Play?</h2>
            <p>Get your team together and register now. Spaces fill up fast!</p>
            <div className="cta-buttons">
              <Link to="/enter" className="btn btn-primary btn-large">
                Enter a Team
              </Link>
              <Link to="/gallery" className="btn btn-secondary btn-large">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Parks Section */}
      <section className="section parks-section">
        <div className="container">
          <h2 className="section-title">Played at Parks Across Australia</h2>
          <p className="text-center parks-intro">
            Tricket is available at Discovery Parks, Tasman Holiday Parks, G'Day Parks,
            BIG4 Holiday Parks, Ingenia Holidays, and independent caravan parks nationwide.
          </p>
          <div className="parks-logos">
            <div className="park-logo-placeholder">Discovery Parks</div>
            <div className="park-logo-placeholder">Tasman</div>
            <div className="park-logo-placeholder">G'Day</div>
            <div className="park-logo-placeholder">BIG4</div>
            <div className="park-logo-placeholder">Ingenia</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
