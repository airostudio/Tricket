import { Link } from 'react-router-dom'
import { Camera, Shield, Mail, AlertCircle } from 'lucide-react'
import './Consent.css'

function Consent() {
  return (
    <div className="consent-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>Media Consent & Release</h1>
          <p className="hero-lead">
            How we capture and use photos and videos from Tricket events.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="consent-content">
            <div className="consent-intro card">
              <Camera size={32} />
              <p>
                We love capturing the fun and excitement of Tricket! This page explains how we collect,
                use, and protect images and videos of participants.
              </p>
            </div>

            <div className="consent-section">
              <h2>1. What We May Capture</h2>
              <p>During Tricket matches and events, we may take:</p>
              <ul>
                <li>Photographs of players, teams, and spectators</li>
                <li>Video footage of matches and celebrations</li>
                <li>Audio recordings during matches</li>
              </ul>
            </div>

            <div className="consent-section">
              <h2>2. How Images May Be Used</h2>
              <p>With your consent, captured media may be used for:</p>
              <ul>
                <li><strong>This Website:</strong> Gallery, promotional pages, and event coverage</li>
                <li><strong>Social Media:</strong> Facebook, Instagram, and other platforms</li>
                <li><strong>Park Promotional Materials:</strong> Brochures, screens, newsletters</li>
                <li><strong>Partner Promotions:</strong> Caravan park group marketing (with appropriate consent)</li>
              </ul>
              <p>We will <strong>never</strong> sell your images to third parties for commercial advertising.</p>
            </div>

            <div className="consent-section">
              <h2>3. Consent for Adults</h2>
              <p>By participating in Tricket and completing the registration form, adult participants acknowledge:</p>
              <div className="consent-box">
                <p>
                  "I consent to being photographed and/or filmed during Tricket events. I understand these
                  images may be used on the Tricket website, social media pages, and caravan park promotional
                  materials. I can withdraw this consent at any time by contacting the organisers."
                </p>
              </div>
            </div>

            <div className="consent-section">
              <h2>4. Consent for Minors (Under 18)</h2>
              <p>For participants under 18 years of age:</p>
              <ul>
                <li>A parent or legal guardian must provide consent on their behalf</li>
                <li>Consent is collected through the Player Join registration form</li>
                <li>The parent/guardian may opt out of photo consent while still participating</li>
              </ul>
              <div className="consent-box">
                <p>
                  "As the parent/guardian of the named minor, I consent to them being photographed and/or
                  filmed during Tricket events. I understand these images may be used for promotional purposes
                  as described above."
                </p>
              </div>
            </div>

            <div className="consent-section">
              <h2>5. Opting Out</h2>
              <p>You have the right to opt out of photo/video capture:</p>
              <ul>
                <li><strong>At Registration:</strong> Select "No" for photo consent on the form</li>
                <li><strong>At the Match:</strong> Inform the Team Manager and umpire before play begins</li>
                <li><strong>Identification:</strong> Players who opt out may be given a visual identifier (e.g., coloured wristband)</li>
              </ul>
              <p>Note: Due to the nature of live events, we cannot guarantee that opted-out individuals
              will not appear in background shots.</p>
            </div>

            <div className="consent-section">
              <h2>6. Withdrawing Consent / Photo Removal</h2>
              <p>You may withdraw your consent or request photo removal at any time:</p>
              <div className="removal-steps">
                <div className="removal-step">
                  <Mail size={24} />
                  <div>
                    <h4>Contact Us</h4>
                    <p>Email <a href="mailto:tricket@example.com">tricket@example.com</a> with your request</p>
                  </div>
                </div>
                <div className="removal-step">
                  <Shield size={24} />
                  <div>
                    <h4>Provide Details</h4>
                    <p>Include your name, match date, and description/link to the image</p>
                  </div>
                </div>
                <div className="removal-step">
                  <AlertCircle size={24} />
                  <div>
                    <h4>Processing Time</h4>
                    <p>We will remove images within 14 days of receiving your request</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="consent-section">
              <h2>7. Third-Party Sharing</h2>
              <p>
                Images may be shared with participating caravan park groups (Discovery Parks, Tasman Holiday Parks,
                G'Day Parks, BIG4 Holiday Parks, Ingenia Holidays) for their promotional purposes.
                If you wish to limit where your images are used, please specify this in your consent or contact us.
              </p>
            </div>

            <div className="consent-section">
              <h2>8. Questions?</h2>
              <p>
                If you have any questions about media consent or how your images are used,
                please <Link to="/contact">contact us</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section alt-bg">
        <div className="container">
          <div className="consent-cta">
            <h2>Ready to Register?</h2>
            <p>You'll provide your consent preferences during the registration process.</p>
            <div className="cta-buttons">
              <Link to="/enter" className="btn btn-primary btn-large">Enter a Team</Link>
              <Link to="/waiver" className="btn btn-secondary btn-large">View Safety Waiver</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Consent
