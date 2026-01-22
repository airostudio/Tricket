import { Link } from 'react-router-dom'
import { AlertCircle, CheckCircle, XCircle, HelpCircle } from 'lucide-react'
import './Rules.css'

function Rules() {
  return (
    <div className="rules-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>Tricket Rules</h1>
          <p className="hero-lead">
            Everything you need to know to play fair and have fun.
          </p>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="section quick-ref">
        <div className="container">
          <div className="quick-ref-grid">
            <div className="quick-item">
              <span className="quick-label">Team Size</span>
              <span className="quick-value">6 players</span>
            </div>
            <div className="quick-item">
              <span className="quick-label">Balls per Batter</span>
              <span className="quick-value">6 balls</span>
            </div>
            <div className="quick-item">
              <span className="quick-label">Bowling Style</span>
              <span className="quick-value">Underarm only</span>
            </div>
            <div className="quick-item">
              <span className="quick-label">Bat Height</span>
              <span className="quick-value">Waist max</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Rules */}
      <section className="section">
        <div className="container">
          <h2>Core Rules</h2>

          <div className="rule-section">
            <h3>1. Team Composition</h3>
            <ul>
              <li>Each team consists of <strong>6 players</strong></li>
              <li>A <strong>Team Manager</strong> (16+ preferred) must be designated</li>
              <li>An <strong>On-Court Captain</strong> handles toss and calls during play</li>
              <li>Mixed ages allowed at umpire's discretion for safety</li>
            </ul>
          </div>

          <div className="rule-section">
            <h3>2. Match Format</h3>
            <ul>
              <li>Each team bats through up to 6 batters</li>
              <li>Each batter faces <strong>6 balls maximum</strong> (one over)</li>
              <li>Batter who is not out after 6 balls <strong>retires</strong></li>
              <li>A batter who is out before 6 balls is replaced by the next batter</li>
              <li>Team with the highest total runs wins</li>
            </ul>
          </div>

          <div className="rule-section">
            <h3>3. Bowling Rules</h3>
            <ul>
              <li><strong>Underarm bowling only</strong> - for safety and consistency</li>
              <li>Ball must be released below waist height</li>
              <li>If a ball is deemed unplayable, umpire may call "dead ball" and allow re-bowl (max 1 per batter)</li>
            </ul>
          </div>

          <div className="rule-section">
            <h3>4. Scoring</h3>
            <div className="scoring-table">
              <div className="score-row">
                <span className="score-runs">1 Run</span>
                <span className="score-desc">Ball hits net or fence after contact (and stays in play)</span>
              </div>
              <div className="score-row">
                <span className="score-runs">2 Runs</span>
                <span className="score-desc">Ball reaches fence untouched OR clean hard hit to fence</span>
              </div>
              <div className="score-row">
                <span className="score-runs">4 Runs</span>
                <span className="score-desc">Ball bounces then hits fence (boundary)</span>
              </div>
              <div className="score-row highlight-danger">
                <span className="score-runs">Reckless Shot</span>
                <span className="score-desc">Dead ball or batter warned - safety first!</span>
              </div>
            </div>
          </div>

          <div className="rule-section">
            <h3>5. Getting Out (Dismissals)</h3>
            <div className="outs-grid">
              <div className="out-card">
                <XCircle size={24} />
                <h4>Caught</h4>
                <p>Clean catch by fielder = out (no runs scored on that ball)</p>
              </div>
              <div className="out-card">
                <XCircle size={24} />
                <h4>Bowled</h4>
                <p>Ball hits stumps directly = out</p>
              </div>
              <div className="out-card">
                <XCircle size={24} />
                <h4>Run Out</h4>
                <p>Runner short of crease when stumps hit while play is live = out</p>
              </div>
              <div className="out-card danger">
                <AlertCircle size={24} />
                <h4>Dangerous Play</h4>
                <p>Can be given out or removed from match at umpire's discretion</p>
              </div>
            </div>
          </div>

          <div className="rule-section">
            <h3>6. Field of Play</h3>
            <ul>
              <li>Tennis court is the playing arena</li>
              <li>Court fence/net defines the boundary</li>
              <li><strong>Wicketkeeper zone</strong> is marked - no reckless running or high-speed throws allowed</li>
              <li>Safety cones mark bat swing buffer zones</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Spirit of Tricket */}
      <section className="section alt-bg">
        <div className="container">
          <div className="spirit-section">
            <h2>Spirit of Tricket</h2>
            <div className="spirit-content">
              <div className="spirit-icon">
                <CheckCircle size={48} />
              </div>
              <div>
                <p className="spirit-quote">
                  "Play hard, play fair, respect the umpire's decision."
                </p>
                <ul>
                  <li><strong>Umpire decision is final</strong> - no negotiation, no arguing</li>
                  <li>One warning for dissent, then penalties apply</li>
                  <li>No sledging or unsportsmanlike conduct</li>
                  <li>Help each other have fun - that's what holidays are for!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gear Rules */}
      <section className="section">
        <div className="container">
          <h2>Equipment Rules</h2>
          <div className="gear-grid">
            <div className="gear-card allowed">
              <CheckCircle size={28} />
              <h4>Approved</h4>
              <ul>
                <li>Soft-feel cricket balls (approved types only)</li>
                <li>Plastic bats or soft-grip bats</li>
                <li>Plastic stumps (provided)</li>
                <li>Appropriate footwear</li>
              </ul>
            </div>
            <div className="gear-card not-allowed">
              <XCircle size={28} />
              <h4>Not Allowed</h4>
              <ul>
                <li>Hard cricket balls</li>
                <li>Taped tennis balls (if too hard)</li>
                <li>Metal bats</li>
                <li>Adult-size heavy bats for small kids</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section alt-bg">
        <div className="container">
          <h2 className="section-title">Rules FAQ</h2>
          <div className="faq-list">
            <div className="faq-item">
              <HelpCircle size={20} />
              <div>
                <h4>What happens in a tie?</h4>
                <p>A 1-over "super batter" tie-break is played. Each team nominates one batter who faces 6 balls. Highest score wins.</p>
              </div>
            </div>
            <div className="faq-item">
              <HelpCircle size={20} />
              <div>
                <h4>What if we arrive late?</h4>
                <p>Teams must be at the court 10 minutes early. If not checked in by 5 minutes past start time, the match may be forfeited.</p>
              </div>
            </div>
            <div className="faq-item">
              <HelpCircle size={20} />
              <div>
                <h4>Can we use substitutes?</h4>
                <p>Yes, if a player can't continue, a substitute can join with umpire approval. The sub must complete the remaining balls for that batter.</p>
              </div>
            </div>
            <div className="faq-item">
              <HelpCircle size={20} />
              <div>
                <h4>What about wides and no-balls?</h4>
                <p>To keep games simple, wides and no-balls are NOT used. Unplayable deliveries are called "dead ball" at umpire discretion.</p>
              </div>
            </div>
            <div className="faq-item">
              <HelpCircle size={20} />
              <div>
                <h4>Who provides the equipment?</h4>
                <p>All equipment (balls, bats, stumps, cones) is provided at the court. Just bring yourself, water, and sunscreen!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2>Know the Rules, Play the Game!</h2>
          <p>Ready to put your skills to the test?</p>
          <div className="cta-buttons">
            <Link to="/enter" className="btn btn-primary btn-large">Enter a Team</Link>
            <Link to="/fixtures" className="btn btn-outline btn-large">View Fixtures</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Rules
