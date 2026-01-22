import { Link } from 'react-router-dom'
import { Shield, AlertTriangle, Heart, Users, Sun, Footprints } from 'lucide-react'
import './Waiver.css'

function Waiver() {
  return (
    <div className="waiver-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>Safety Waiver & Brief</h1>
          <p className="hero-lead">
            Important safety information and participant acknowledgements.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="waiver-content">
            <div className="waiver-intro">
              <AlertTriangle size={32} />
              <div>
                <h2>Please Read Carefully</h2>
                <p>
                  All participants must acknowledge and accept these safety terms before playing Tricket.
                  By registering and participating, you agree to the following conditions.
                </p>
              </div>
            </div>

            <div className="waiver-section">
              <h2>1. Assumption of Risk</h2>
              <p>
                I acknowledge that participation in Tricket involves physical activity that carries inherent risks, including but not limited to:
              </p>
              <ul>
                <li>Minor injuries such as bruises, sprains, or strains</li>
                <li>Impact from the ball, bat, or other players</li>
                <li>Slips, trips, or falls on the court surface</li>
                <li>Heat-related conditions (dehydration, heat exhaustion)</li>
              </ul>
              <p>
                <strong>I voluntarily assume all risks</strong> associated with participation and agree to participate at my own risk.
              </p>
            </div>

            <div className="waiver-section">
              <h2>2. Release of Liability</h2>
              <p>
                I release and hold harmless the following from any claims, demands, or causes of action arising from my participation:
              </p>
              <ul>
                <li>Tricket organisers and staff</li>
                <li>The caravan park, its owners, and operators</li>
                <li>Park staff and umpires</li>
                <li>Other participants and their guardians</li>
              </ul>
              <p>
                This release applies except in cases of gross negligence or intentional misconduct.
              </p>
            </div>

            <div className="waiver-section">
              <h2>3. Fitness to Participate</h2>
              <p>I confirm that:</p>
              <ul>
                <li>I am physically fit to participate in light to moderate physical activity</li>
                <li>I have no medical conditions that would make participation dangerous</li>
                <li>I have disclosed any relevant medical conditions to the Team Manager (if applicable)</li>
                <li>I will withdraw from play if I feel unwell or injured</li>
              </ul>
            </div>

            <div className="waiver-section">
              <h2>4. Safety Rules Agreement</h2>
              <p>I agree to follow all safety rules, including:</p>
              <div className="safety-rules-grid">
                <div className="safety-rule">
                  <Shield size={24} />
                  <div>
                    <h4>No High Bat Swings</h4>
                    <p>Keep bat swings below waist height at all times</p>
                  </div>
                </div>
                <div className="safety-rule">
                  <AlertTriangle size={24} />
                  <div>
                    <h4>No Throwing Stumps</h4>
                    <p>Never throw stumps or equipment at other players</p>
                  </div>
                </div>
                <div className="safety-rule">
                  <Users size={24} />
                  <div>
                    <h4>Respect the Umpire</h4>
                    <p>Umpire decisions are final - no arguing or dissent</p>
                  </div>
                </div>
                <div className="safety-rule">
                  <Footprints size={24} />
                  <div>
                    <h4>Appropriate Footwear</h4>
                    <p>Wear enclosed shoes suitable for court surfaces</p>
                  </div>
                </div>
                <div className="safety-rule">
                  <Sun size={24} />
                  <div>
                    <h4>Sun Protection</h4>
                    <p>Apply sunscreen and stay hydrated during play</p>
                  </div>
                </div>
                <div className="safety-rule">
                  <Heart size={24} />
                  <div>
                    <h4>Good Sportsmanship</h4>
                    <p>No aggressive play, sledging, or unsporting conduct</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="waiver-section">
              <h2>5. Conduct Expectations</h2>
              <p>I understand that poor conduct may result in:</p>
              <ul>
                <li><strong>Warning:</strong> First offense - verbal warning from umpire</li>
                <li><strong>Penalty:</strong> Second offense - run deduction or dismissal from current match</li>
                <li><strong>Removal:</strong> Serious or repeated offenses - removal from the tournament</li>
              </ul>
              <p>
                The umpire has full authority to enforce these penalties without appeal.
              </p>
            </div>

            <div className="waiver-section">
              <h2>6. Injury Protocol</h2>
              <p>In the event of an injury:</p>
              <ul>
                <li>Play will be stopped immediately</li>
                <li>First aid will be administered by staff if available</li>
                <li>Serious injuries will be referred to park reception / emergency services</li>
                <li>An incident report will be completed</li>
              </ul>
              <p>
                I agree to report any injuries, no matter how minor, to the umpire or staff.
              </p>
            </div>

            <div className="waiver-section">
              <h2>7. Parent/Guardian Consent (for Minors)</h2>
              <p>
                For participants under 18 years of age, a parent or legal guardian must:
              </p>
              <ul>
                <li>Complete the Player Join form on behalf of the minor</li>
                <li>Accept this waiver on their behalf</li>
                <li>Ensure the minor understands and follows safety rules</li>
                <li>Be contactable during match times</li>
              </ul>
              <div className="waiver-box">
                <p>
                  "As the parent/guardian of the named minor, I acknowledge the risks of participation
                  and consent to them playing Tricket under the conditions described above."
                </p>
              </div>
            </div>

            <div className="waiver-section">
              <h2>8. Acknowledgement</h2>
              <p>By registering for Tricket and participating in any match, I acknowledge that:</p>
              <ul>
                <li>I have read and understood this waiver</li>
                <li>I voluntarily agree to these terms</li>
                <li>I accept the risks of participation</li>
                <li>I will follow all safety rules and umpire instructions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section alt-bg">
        <div className="container">
          <div className="waiver-cta">
            <h2>Ready to Play Safely?</h2>
            <p>You'll confirm your acceptance of these terms during the registration process.</p>
            <div className="cta-buttons">
              <Link to="/enter" className="btn btn-primary btn-large">Enter a Team</Link>
              <Link to="/rules" className="btn btn-secondary btn-large">View Game Rules</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Waiver
