import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, HelpCircle, Send, Handshake } from 'lucide-react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted! In production, this would send to your email or form handler.')
  }

  const faqs = [
    {
      question: 'What happens if it rains?',
      answer: 'If the court is unsafe due to weather, matches will be postponed. Check with park reception for updates. We\'ll try to reschedule affected matches.'
    },
    {
      question: 'Can we cancel our registration?',
      answer: 'Yes, contact us at least 24 hours before your match. Cancellations within 24 hours may not receive a refund.'
    },
    {
      question: 'What age groups can play?',
      answer: 'Tricket is for all ages! We recommend age-appropriate divisions (e.g., Under 10, Under 13, Open) for fair competition. Mixed-age family teams are welcome in Open division.'
    },
    {
      question: 'Do we need to bring equipment?',
      answer: 'No! All equipment (balls, bats, stumps) is provided. Just bring yourself, water, sunscreen, and appropriate footwear.'
    },
    {
      question: 'What time should we arrive?',
      answer: 'Teams must arrive 10 minutes before their scheduled match time and check in immediately. Late teams may forfeit their slot.'
    },
    {
      question: 'Can spectators watch?',
      answer: 'Spectators are welcome outside the court fence (free). Inside-court seats may be available for $5 per seat, depending on the venue.'
    },
    {
      question: 'What if we don\'t have 6 players?',
      answer: 'Register anyway and indicate you need fill-ins at check-in. We\'ll try to match you with other players looking for a team.'
    },
    {
      question: 'Is there a prize for winning?',
      answer: 'Prizes vary by park and competition. Check with your local park for current prize details. At minimum, bragging rights are guaranteed!'
    }
  ]

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>Contact & FAQs</h1>
          <p className="hero-lead">
            Got questions? We've got answers. Can't find what you need? Get in touch!
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-card">
                <HelpCircle size={20} />
                <div>
                  <h4>{faq.question}</h4>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section alt-bg">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <Phone size={32} />
              <h3>Call Us</h3>
              <p>Speak directly with park reception</p>
              <a href="tel:+61400000000">0400 000 000</a>
            </div>
            <div className="contact-card">
              <Mail size={32} />
              <h3>Email Us</h3>
              <p>We'll respond within 24 hours</p>
              <a href="mailto:tricket@example.com">tricket@example.com</a>
            </div>
            <div className="contact-card">
              <MapPin size={32} />
              <h3>Visit Reception</h3>
              <p>Your local caravan park reception</p>
              <span>Check park details</span>
            </div>
            <div className="contact-card">
              <Clock size={32} />
              <h3>Office Hours</h3>
              <p>When we're available</p>
              <span>9am - 5pm Daily</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section">
        <div className="container">
          <div className="contact-form-wrapper">
            <div className="form-intro">
              <h2>Send Us a Message</h2>
              <p>
                Have a question that's not in the FAQs? Want to report an issue or give feedback?
                Fill out the form and we'll get back to you.
              </p>
            </div>
            <form className="contact-form card" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a topic</option>
                  <option value="general">General Enquiry</option>
                  <option value="registration">Registration Help</option>
                  <option value="rules">Rules Question</option>
                  <option value="weather">Weather / Cancellation</option>
                  <option value="feedback">Feedback</option>
                  <option value="photo">Photo Removal Request</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-large">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Sponsor Enquiry */}
      <section className="section alt-bg">
        <div className="container">
          <div className="sponsor-cta">
            <Handshake size={48} />
            <div>
              <h2>Interested in Sponsoring?</h2>
              <p>
                Support local sport and get your brand in front of caravan park guests.
                Sponsor a team, the finals, or become a Tricket partner.
              </p>
              <a
                href="mailto:tricket@example.com?subject=Sponsorship Enquiry"
                className="btn btn-primary"
              >
                Enquire About Sponsorship
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Quick Links</h2>
          <div className="quick-links-grid">
            <Link to="/rules" className="quick-link-card">
              <h4>Game Rules</h4>
              <p>Full rules and FAQ</p>
            </Link>
            <Link to="/enter" className="quick-link-card">
              <h4>Register Team</h4>
              <p>Enter your team now</p>
            </Link>
            <Link to="/fixtures" className="quick-link-card">
              <h4>Fixtures</h4>
              <p>Match schedule & ladder</p>
            </Link>
            <Link to="/consent" className="quick-link-card">
              <h4>Consent Policy</h4>
              <p>Photo & media consent</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
