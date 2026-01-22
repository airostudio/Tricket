import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/logo.svg" alt="Tricket" className="footer-logo" />
            <p>Cricket on the Tennis Court - a fun, safe, and exciting game for caravan park guests of all ages.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/what-is-tricket">What is Tricket?</Link></li>
              <li><Link to="/rules">Rules</Link></li>
              <li><Link to="/enter">Enter a Team</Link></li>
              <li><Link to="/fixtures">Fixtures & Ladder</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Information</h4>
            <ul>
              <li><Link to="/contact">Contact & FAQs</Link></li>
              <li><Link to="/consent">Media Consent</Link></li>
              <li><Link to="/waiver">Safety Waiver</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <MapPin size={18} />
                <span>Your Local Caravan Park</span>
              </li>
              <li>
                <Phone size={18} />
                <a href="tel:+61400000000">0400 000 000</a>
              </li>
              <li>
                <Mail size={18} />
                <a href="mailto:tricket@example.com">tricket@example.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Tricket. All rights reserved.</p>
          <p className="footer-tagline">Cricket on the Tennis Court</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
