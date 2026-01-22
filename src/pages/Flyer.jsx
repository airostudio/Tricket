import { useRef } from 'react'
import { Printer, Download } from 'lucide-react'
import './Flyer.css'

function Flyer() {
  const flyerRef = useRef(null)

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="flyer-page">
      {/* Print Controls - hidden when printing */}
      <div className="print-controls no-print">
        <div className="container">
          <h1>Printable Flyer</h1>
          <p>Print this flyer to display at your park or distribute to guests.</p>
          <div className="control-buttons">
            <button className="btn btn-primary btn-large" onClick={handlePrint}>
              <Printer size={20} />
              Print Flyer
            </button>
          </div>
        </div>
      </div>

      {/* Printable Flyer */}
      <div className="flyer-container">
        <div className="flyer" ref={flyerRef}>
          {/* Header Banner */}
          <div className="flyer-header">
            <div className="flyer-badge">NEW!</div>
            <div className="flyer-banner-bg">
              <div className="banner-stripes"></div>
            </div>
          </div>

          {/* Logo Section */}
          <div className="flyer-logo-section">
            <img src="/tricket-logo.png" alt="Tricket" className="flyer-logo" />
            <div className="flyer-tagline">Cricket on the Tennis Court</div>
          </div>

          {/* Hero Image */}
          <div className="flyer-hero">
            <img src="/tricket-hero.webp" alt="Kids playing Tricket" className="flyer-hero-img" />
            <div className="hero-overlay">
              <span className="hero-text">Fun for the whole family!</span>
            </div>
          </div>

          {/* What is Tricket */}
          <div className="flyer-intro">
            <h2>What is Tricket?</h2>
            <p>
              A fast, safe, and exciting cricket game played on the tennis court!
              Perfect for kids, families, and adults of all skill levels.
              No experience needed - just grab a team and have a blast!
            </p>
          </div>

          {/* Key Features */}
          <div className="flyer-features">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="#22c55e"/>
                  <path d="M12 20h16M20 12v16" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
              <span>Soft Ball</span>
              <small>Safe for all ages</small>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="#2563eb"/>
                  <text x="20" y="26" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">6</text>
                </svg>
              </div>
              <span>6 Players</span>
              <small>Per team</small>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="#1e3a5f"/>
                  <text x="20" y="26" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">20m</text>
                </svg>
              </div>
              <span>Quick Games</span>
              <small>~20 minutes</small>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="#22c55e"/>
                  <text x="20" y="26" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">$5</text>
                </svg>
              </div>
              <span>Just $5</span>
              <small>Per player</small>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="flyer-qr-section">
            <div className="qr-box">
              <div className="qr-frame">
                <img src="/qr-register.svg" alt="Scan to Register" className="qr-code" />
              </div>
              <div className="qr-instructions">
                <span className="scan-text">SCAN TO</span>
                <span className="register-text">REGISTER</span>
                <span className="your-team-text">YOUR TEAM!</span>
              </div>
            </div>
            <div className="register-steps">
              <div className="step">
                <span className="step-num">1</span>
                <span>Scan QR Code</span>
              </div>
              <div className="step">
                <span className="step-num">2</span>
                <span>Enter Team Details</span>
              </div>
              <div className="step">
                <span className="step-num">3</span>
                <span>Get Your Match Time</span>
              </div>
            </div>
          </div>

          {/* Info Footer */}
          <div className="flyer-footer">
            <div className="footer-info">
              <div className="info-item">
                <strong>Where:</strong> Tennis Court
              </div>
              <div className="info-item">
                <strong>Ages:</strong> All Welcome!
              </div>
              <div className="info-item">
                <strong>Info:</strong> Park Reception
              </div>
            </div>
            <div className="footer-tagline">
              <span className="tricket-text">TRI</span>
              <span className="cket-text">CKET</span>
              <span className="subtitle">est. 2024</span>
            </div>
          </div>

          {/* Cartoon Decorations */}
          <div className="decoration bat-decoration">
            <svg viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="0" width="20" height="80" rx="3" fill="#d4a574"/>
              <rect x="20" y="0" width="20" height="15" rx="3" fill="#8b6f4e"/>
              <rect x="15" y="80" width="30" height="40" rx="8" fill="#d4a574"/>
            </svg>
          </div>
          <div className="decoration ball-decoration">
            <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="23" fill="#c8e64a" stroke="#a3c41f" strokeWidth="2"/>
              <path d="M 8 35 Q 25 20 42 35" fill="none" stroke="#fff" strokeWidth="3"/>
              <path d="M 10 15 Q 25 30 40 15" fill="none" stroke="#fff" strokeWidth="3"/>
            </svg>
          </div>
          <div className="decoration stumps-decoration">
            <svg viewBox="0 0 50 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="10" width="6" height="65" fill="#f5f5f5" stroke="#ddd"/>
              <rect x="22" y="10" width="6" height="65" fill="#f5f5f5" stroke="#ddd"/>
              <rect x="39" y="10" width="6" height="65" fill="#f5f5f5" stroke="#ddd"/>
              <rect x="3" y="5" width="14" height="5" rx="2" fill="#f5f5f5" stroke="#ddd"/>
              <rect x="33" y="5" width="14" height="5" rx="2" fill="#f5f5f5" stroke="#ddd"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Tips Section - hidden when printing */}
      <div className="flyer-tips no-print">
        <div className="container">
          <h2>Printing Tips</h2>
          <ul>
            <li>Print on A4 paper for best results</li>
            <li>Use color printing for maximum impact</li>
            <li>Laminate for outdoor display</li>
            <li>Place near reception, pool area, or tennis court</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Flyer
