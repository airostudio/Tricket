import { Link } from 'react-router-dom'
import { QrCode, Users, UserCheck, ClipboardCheck, CreditCard, Clock } from 'lucide-react'
import './TeamEntry.css'

function TeamEntry() {
  return (
    <div className="team-entry">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>Enter a Team</h1>
          <p className="hero-lead">
            Register your team in minutes using our QR code system.
          </p>
        </div>
      </section>

      {/* Main QR Section */}
      <section className="section qr-section">
        <div className="container">
          <div className="qr-main-card">
            <div className="qr-display">
              <div className="qr-placeholder">
                <QrCode size={120} />
                <span>Scan to Register</span>
              </div>
            </div>
            <div className="qr-info">
              <h2>Register Your Team</h2>
              <p>
                Scan the QR code or click the button below to register your team.
                You'll need to provide team details and player information.
              </p>
              <a
                href="#registration-form"
                className="btn btn-primary btn-large"
                onClick={(e) => {
                  e.preventDefault()
                  alert('Registration form would open here - connect to your form provider (Jotform, Google Forms, etc.)')
                }}
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Need */}
      <section className="section alt-bg">
        <div className="container">
          <h2 className="section-title">What You'll Need</h2>
          <div className="grid grid-3 needs-grid">
            <div className="need-item card">
              <Users size={32} />
              <h3>Team Info</h3>
              <ul>
                <li>Team name</li>
                <li>Division / age bracket</li>
                <li>Preferred match times</li>
              </ul>
            </div>
            <div className="need-item card">
              <UserCheck size={32} />
              <h3>Manager Details</h3>
              <ul>
                <li>Name of Team Manager</li>
                <li>Mobile number</li>
                <li>Email address</li>
              </ul>
            </div>
            <div className="need-item card">
              <ClipboardCheck size={32} />
              <h3>Consent</h3>
              <ul>
                <li>Waiver acknowledgement</li>
                <li>Photo/media consent</li>
                <li>Terms acceptance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3-QR System */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Self-Organising System</h2>
          <div className="qr-system">
            <div className="qr-step">
              <div className="qr-step-icon">
                <div className="qr-mini">
                  <QrCode size={40} />
                </div>
                <span className="qr-step-num">1</span>
              </div>
              <h3>Team Registration</h3>
              <p>Manager registers the team and receives a unique Team Code plus links to share with players.</p>
              <span className="qr-label">QR #1 - Register Team</span>
            </div>
            <div className="qr-arrow">→</div>
            <div className="qr-step">
              <div className="qr-step-icon">
                <div className="qr-mini">
                  <QrCode size={40} />
                </div>
                <span className="qr-step-num">2</span>
              </div>
              <h3>Player Join</h3>
              <p>Players (or their parents) join using the Team Code. Each player submits their own consent.</p>
              <span className="qr-label">QR #2 - Player Join</span>
            </div>
            <div className="qr-arrow">→</div>
            <div className="qr-step">
              <div className="qr-step-icon">
                <div className="qr-mini">
                  <QrCode size={40} />
                </div>
                <span className="qr-step-num">3</span>
              </div>
              <h3>Match Check-In</h3>
              <p>On game day, Manager checks in the team at the court. Confirms who's present and ready to play.</p>
              <span className="qr-label">QR #3 - Check In</span>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="section alt-bg">
        <div className="container">
          <h2 className="section-title">Payment</h2>
          <div className="payment-info card">
            <CreditCard size={48} />
            <div className="payment-details">
              <h3>$5 per Player</h3>
              <p>Team Manager plays free (gold coin donation optional)</p>
              <ul>
                <li>Cash accepted at park reception or courtside</li>
                <li>EFTPOS available at reception</li>
                <li>Payment due before match starts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Manager Checklist */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Team Manager Checklist</h2>
          <div className="checklist-grid">
            <div className="checklist-card">
              <Clock size={24} />
              <h4>Before Match Day</h4>
              <ul>
                <li>Confirm all players have joined via Player Join link</li>
                <li>Collect $5 per player (or confirm courtside payment)</li>
                <li>Remind team: arrival time is 10 mins early</li>
                <li>Check photo consent status for each player</li>
                <li>Nominate On-Court Captain</li>
              </ul>
            </div>
            <div className="checklist-card">
              <ClipboardCheck size={24} />
              <h4>On Match Day</h4>
              <ul>
                <li>Arrive 10 minutes before scheduled time</li>
                <li>Complete Check-In (QR #3) immediately</li>
                <li>Pay or confirm payment with staff</li>
                <li>Have 6 players ready with bat order agreed</li>
                <li>Brief team: no high swings, listen to umpire</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="section alt-bg">
        <div className="container">
          <div className="important-notes">
            <h2>Important Rules</h2>
            <div className="notes-grid">
              <div className="note-item warning">
                <strong>Late Rule:</strong> Teams not checked in by 5 minutes past start time may forfeit their match slot.
              </div>
              <div className="note-item warning">
                <strong>Manager Rule:</strong> No Team Manager present = no game. This ensures staff don't become the organiser.
              </div>
              <div className="note-item info">
                <strong>Fill-Ins:</strong> Need extra players? Indicate this at check-in and we'll try to match you with available players.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2>Ready to Register?</h2>
          <p>Get your team code and start building your squad!</p>
          <div className="cta-buttons">
            <a
              href="#register"
              className="btn btn-primary btn-large"
              onClick={(e) => {
                e.preventDefault()
                alert('Registration form would open here')
              }}
            >
              Register Team Now
            </a>
            <Link to="/rules" className="btn btn-outline btn-large">Review Rules First</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TeamEntry
