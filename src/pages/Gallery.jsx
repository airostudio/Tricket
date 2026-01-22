import { Link } from 'react-router-dom'
import { Camera, Instagram, AlertCircle, Mail } from 'lucide-react'
import './Gallery.css'

function Gallery() {
  // Placeholder images - replace with actual gallery images
  const galleryItems = [
    { id: 1, type: 'image', placeholder: 'Team celebrating win' },
    { id: 2, type: 'image', placeholder: 'Action shot - batting' },
    { id: 3, type: 'image', placeholder: 'Kids having fun' },
    { id: 4, type: 'image', placeholder: 'Family team photo' },
    { id: 5, type: 'image', placeholder: 'Bowling action' },
    { id: 6, type: 'image', placeholder: 'Trophy presentation' },
    { id: 7, type: 'image', placeholder: 'Teams shaking hands' },
    { id: 8, type: 'image', placeholder: 'Crowd cheering' },
    { id: 9, type: 'image', placeholder: 'Finals day banner' },
  ]

  return (
    <div className="gallery-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>Gallery</h1>
          <p className="hero-lead">
            Check out the action from Tricket matches across Australia!
          </p>
        </div>
      </section>

      {/* Social Section */}
      <section className="section social-section">
        <div className="container">
          <div className="social-cta">
            <Instagram size={32} />
            <div>
              <h3>Share Your Tricket Moments!</h3>
              <p>Tag us in your photos and videos</p>
            </div>
            <div className="hashtag">#TricketAustralia</div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div key={item.id} className="gallery-item">
                <div className="gallery-placeholder">
                  <Camera size={32} />
                  <span>{item.placeholder}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-more">
            <p>More photos coming soon!</p>
            <p className="gallery-hint">
              Check back after matches for the latest action shots.
            </p>
          </div>
        </div>
      </section>

      {/* Consent Notice */}
      <section className="section alt-bg">
        <div className="container">
          <div className="consent-notice">
            <AlertCircle size={28} />
            <div>
              <h3>Photo & Video Consent</h3>
              <p>
                All photos and videos are captured with participant consent.
                Images may be used on this website, social media, and park promotional materials.
              </p>
              <p>
                <strong>Want to opt out or have a photo removed?</strong>
              </p>
              <div className="consent-actions">
                <Link to="/consent" className="btn btn-secondary">
                  View Full Consent Policy
                </Link>
                <a href="mailto:tricket@example.com" className="btn btn-outline-dark">
                  <Mail size={18} />
                  Request Photo Removal
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Photos */}
      <section className="section">
        <div className="container">
          <div className="submit-photos card">
            <Camera size={48} />
            <h2>Submit Your Photos</h2>
            <p>
              Got great Tricket photos or videos? We'd love to feature them!
              Send them to us with the team name and match date.
            </p>
            <a
              href="mailto:tricket@example.com?subject=Tricket Photo Submission"
              className="btn btn-primary"
            >
              Email Your Photos
            </a>
            <p className="submit-note">
              By submitting, you confirm you have consent from all people in the photo.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2>Want to Be in the Gallery?</h2>
          <p>Enter a team and create your own Tricket memories!</p>
          <div className="cta-buttons">
            <Link to="/enter" className="btn btn-primary btn-large">Enter a Team</Link>
            <Link to="/fixtures" className="btn btn-outline btn-large">View Fixtures</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
