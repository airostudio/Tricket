import { Link } from 'react-router-dom'
import { Users, Clock, Shield, Target, Zap, Heart } from 'lucide-react'
import './WhatItIs.css'

function WhatItIs() {
  return (
    <div className="what-it-is">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>What is Tricket?</h1>
          <p className="hero-lead">
            The perfect blend of cricket and tennis court fun - designed for caravan park guests of all ages.
          </p>
        </div>
      </section>

      {/* The Idea */}
      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>The Concept</h2>
              <p>
                Tricket transforms under-utilized tennis courts into exciting cricket arenas.
                Using soft-feel balls and simplified rules, it's cricket reimagined for quick,
                safe, and inclusive fun.
              </p>
              <p>
                Each match is fast-paced (around 20-30 minutes), making it perfect for holiday
                schedules. No cricket experience required - if you can swing a bat and have fun,
                you're ready to play!
              </p>
              <p>
                The enclosed tennis court provides natural boundaries, keeping the game contained
                and safe for players and spectators alike.
              </p>
            </div>
            <div className="content-image">
              <img src="/tricket-logo.png" alt="Tricket - Cricket on the Tennis Court" />
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="section alt-bg">
        <div className="container">
          <h2 className="section-title">Who Is It For?</h2>
          <div className="grid grid-3">
            <div className="card audience-card">
              <div className="audience-icon kids">
                <Users size={32} />
              </div>
              <h3>Kids & Families</h3>
              <p>
                A safe, supervised activity that gets kids active and families playing together.
                Perfect for holiday entertainment.
              </p>
            </div>
            <div className="card audience-card">
              <div className="audience-icon teens">
                <Zap size={32} />
              </div>
              <h3>Teens & Young Adults</h3>
              <p>
                Competitive, fast-paced action that keeps older kids engaged. Form teams with
                new friends from around the park.
              </p>
            </div>
            <div className="card audience-card">
              <div className="audience-icon adults">
                <Heart size={32} />
              </div>
              <h3>Adults & Parents</h3>
              <p>
                Join in the fun or watch from the sidelines. Low-impact enough for all fitness
                levels, exciting enough for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Match Format */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Match Format</h2>
          <div className="format-grid">
            <div className="format-item">
              <div className="format-number">6</div>
              <div className="format-label">Players per Team</div>
            </div>
            <div className="format-item">
              <div className="format-number">6</div>
              <div className="format-label">Balls per Batter</div>
            </div>
            <div className="format-item">
              <div className="format-number">20-30</div>
              <div className="format-label">Minutes per Match</div>
            </div>
            <div className="format-item">
              <div className="format-number">1-4</div>
              <div className="format-label">Runs per Hit</div>
            </div>
          </div>
          <div className="format-details card">
            <h3>Scoring Quick Guide</h3>
            <ul>
              <li><strong>1 Run:</strong> Ball hits the net or fence after contact</li>
              <li><strong>2 Runs:</strong> Clean hit reaches the fence</li>
              <li><strong>4 Runs:</strong> Ball bounces then hits the fence (boundary)</li>
              <li><strong>Out:</strong> Caught, bowled, or run out</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="section alt-bg">
        <div className="container">
          <h2 className="section-title">Safety First Design</h2>
          <div className="grid grid-2 safety-grid">
            <div className="safety-item">
              <Shield size={28} />
              <div>
                <h4>Soft Ball Only</h4>
                <p>Approved soft-feel balls that won't hurt on impact</p>
              </div>
            </div>
            <div className="safety-item">
              <Target size={28} />
              <div>
                <h4>Underarm Bowling</h4>
                <p>Controlled, consistent bowling style for safety</p>
              </div>
            </div>
            <div className="safety-item">
              <Shield size={28} />
              <div>
                <h4>No High Swings</h4>
                <p>Bat swings kept below waist height</p>
              </div>
            </div>
            <div className="safety-item">
              <Clock size={28} />
              <div>
                <h4>Umpire Supervised</h4>
                <p>Every match has an umpire enforcing safety rules</p>
              </div>
            </div>
            <div className="safety-item">
              <Shield size={28} />
              <div>
                <h4>Enclosed Court</h4>
                <p>Tennis court fence keeps play contained</p>
              </div>
            </div>
            <div className="safety-item">
              <Heart size={28} />
              <div>
                <h4>First Aid Ready</h4>
                <p>First aid kit always available courtside</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2>Ready to Give It a Try?</h2>
          <p>Form your team and experience the fun of Tricket!</p>
          <div className="cta-buttons">
            <Link to="/enter" className="btn btn-primary btn-large">Enter a Team</Link>
            <Link to="/rules" className="btn btn-outline btn-large">Read the Rules</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhatItIs
