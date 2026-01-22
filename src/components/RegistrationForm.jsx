import { useState } from 'react'
import { Users, User, Mail, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react'
import './RegistrationForm.css'

const PARKS = [
  { value: '', label: 'Select your park...' },
  { value: 'discovery-byron', label: 'Discovery Parks - Byron Bay' },
  { value: 'discovery-rottnest', label: 'Discovery Parks - Rottnest Island' },
  { value: 'discovery-cradle', label: 'Discovery Parks - Cradle Mountain' },
  { value: 'discovery-barossa', label: 'Discovery Parks - Barossa Valley' },
  { value: 'tasman-strahan', label: 'Tasman Holiday Parks - Strahan' },
  { value: 'tasman-port-arthur', label: 'Tasman Holiday Parks - Port Arthur' },
  { value: 'gday-emerald', label: "G'Day Parks - Emerald" },
  { value: 'gday-echuca', label: "G'Day Parks - Echuca" },
  { value: 'big4-adelaide', label: 'BIG4 - Adelaide Shores' },
  { value: 'big4-traralgon', label: 'BIG4 - Traralgon Park Lane' },
  { value: 'big4-gold-coast', label: 'BIG4 - Gold Coast Holiday Park' },
  { value: 'ingenia-sydney', label: 'Ingenia Holidays - Sydney Hills' },
  { value: 'ingenia-cairns', label: 'Ingenia Holidays - Cairns Coconut' },
  { value: 'other', label: 'Other Independent Park' },
]

const AGE_BRACKETS = [
  { value: 'under-10', label: 'Under 10' },
  { value: '10-13', label: '10-13' },
  { value: '14-17', label: '14-17' },
  { value: '18-plus', label: '18+' },
]

function RegistrationForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    parkLocation: '',
    otherParkName: '',
    teamName: '',
    leaderName: '',
    leaderEmail: '',
    leaderPhone: '',
    siteNumber: '',
    players: [
      { name: '', age: '', sex: '' },
      { name: '', age: '', sex: '' },
      { name: '', age: '', sex: '' },
      { name: '', age: '', sex: '' },
      { name: '', age: '', sex: '' },
      { name: '', age: '', sex: '' },
    ],
    agreeToRules: false,
    agreeToWaiver: false,
    agreeToMedia: false,
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }))
    }
  }

  const handlePlayerChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      players: prev.players.map((player, i) =>
        i === index ? { ...player, [field]: value } : player
      )
    }))
  }

  const addPlayer = () => {
    if (formData.players.length < 10) {
      setFormData(prev => ({
        ...prev,
        players: [...prev.players, { name: '', age: '', sex: '' }]
      }))
    }
  }

  const removePlayer = (index) => {
    if (formData.players.length > 3) {
      setFormData(prev => ({
        ...prev,
        players: prev.players.filter((_, i) => i !== index)
      }))
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.parkLocation) {
      newErrors.parkLocation = 'Please select your park location'
    }
    if (formData.parkLocation === 'other' && !formData.otherParkName) {
      newErrors.otherParkName = 'Please enter your park name'
    }
    if (!formData.teamName.trim()) {
      newErrors.teamName = 'Team name is required'
    }
    if (!formData.leaderName.trim()) {
      newErrors.leaderName = 'Team leader name is required'
    }
    if (!formData.leaderEmail.trim()) {
      newErrors.leaderEmail = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.leaderEmail)) {
      newErrors.leaderEmail = 'Please enter a valid email'
    }
    if (!formData.leaderPhone.trim()) {
      newErrors.leaderPhone = 'Phone number is required'
    }

    const filledPlayers = formData.players.filter(p => p.name.trim())
    if (filledPlayers.length < 3) {
      newErrors.players = 'You need at least 3 players to register'
    }

    filledPlayers.forEach((player, index) => {
      if (!player.age) {
        newErrors[`player_${index}_age`] = 'Age bracket required'
      }
      if (!player.sex) {
        newErrors[`player_${index}_sex`] = 'Please select'
      }
    })

    if (!formData.agreeToRules) {
      newErrors.agreeToRules = 'You must agree to the rules'
    }
    if (!formData.agreeToWaiver) {
      newErrors.agreeToWaiver = 'You must accept the safety waiver'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          players: formData.players.filter(p => p.name.trim()),
          registeredAt: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error('Registration failed')
      }

      const result = await response.json()
      setSubmitStatus({ type: 'success', message: `Team registered! Your team code is: ${result.teamCode}`, teamCode: result.teamCode })

      if (onSuccess) {
        onSuccess(result)
      }
    } catch (error) {
      console.error('Registration error:', error)
      setSubmitStatus({ type: 'error', message: 'Registration failed. Please try again or contact reception.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      {submitStatus && (
        <div className={`form-alert ${submitStatus.type}`}>
          {submitStatus.type === 'success' ? <CheckCircle size={24} /> : <AlertCircle size={24} />}
          <div>
            <strong>{submitStatus.type === 'success' ? 'Success!' : 'Error'}</strong>
            <p>{submitStatus.message}</p>
            {submitStatus.teamCode && (
              <p className="team-code">Save this code: <strong>{submitStatus.teamCode}</strong></p>
            )}
          </div>
        </div>
      )}

      {/* Park Location */}
      <section className="form-section">
        <h3><MapPin size={20} /> Park Location</h3>
        <div className="form-group">
          <label htmlFor="parkLocation">Which park are you staying at? *</label>
          <select
            id="parkLocation"
            name="parkLocation"
            value={formData.parkLocation}
            onChange={handleChange}
            className={errors.parkLocation ? 'error' : ''}
          >
            {PARKS.map(park => (
              <option key={park.value} value={park.value}>{park.label}</option>
            ))}
          </select>
          {errors.parkLocation && <span className="error-text">{errors.parkLocation}</span>}
        </div>

        {formData.parkLocation === 'other' && (
          <div className="form-group">
            <label htmlFor="otherParkName">Park Name *</label>
            <input
              type="text"
              id="otherParkName"
              name="otherParkName"
              value={formData.otherParkName}
              onChange={handleChange}
              placeholder="Enter your park name"
              className={errors.otherParkName ? 'error' : ''}
            />
            {errors.otherParkName && <span className="error-text">{errors.otherParkName}</span>}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="siteNumber">Site/Cabin Number (optional)</label>
          <input
            type="text"
            id="siteNumber"
            name="siteNumber"
            value={formData.siteNumber}
            onChange={handleChange}
            placeholder="e.g., Site 42 or Cabin 7"
          />
        </div>
      </section>

      {/* Team Info */}
      <section className="form-section">
        <h3><Users size={20} /> Team Information</h3>
        <div className="form-group">
          <label htmlFor="teamName">Team Name *</label>
          <input
            type="text"
            id="teamName"
            name="teamName"
            value={formData.teamName}
            onChange={handleChange}
            placeholder="Choose a fun team name!"
            className={errors.teamName ? 'error' : ''}
          />
          {errors.teamName && <span className="error-text">{errors.teamName}</span>}
        </div>
      </section>

      {/* Team Leader */}
      <section className="form-section">
        <h3><User size={20} /> Team Leader (Manager)</h3>
        <p className="section-note">The team leader is responsible for getting the team to the court on time.</p>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="leaderName">Full Name *</label>
            <input
              type="text"
              id="leaderName"
              name="leaderName"
              value={formData.leaderName}
              onChange={handleChange}
              placeholder="Team leader's name"
              className={errors.leaderName ? 'error' : ''}
            />
            {errors.leaderName && <span className="error-text">{errors.leaderName}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="leaderEmail"><Mail size={16} /> Email *</label>
            <input
              type="email"
              id="leaderEmail"
              name="leaderEmail"
              value={formData.leaderEmail}
              onChange={handleChange}
              placeholder="email@example.com"
              className={errors.leaderEmail ? 'error' : ''}
            />
            {errors.leaderEmail && <span className="error-text">{errors.leaderEmail}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="leaderPhone"><Phone size={16} /> Mobile *</label>
            <input
              type="tel"
              id="leaderPhone"
              name="leaderPhone"
              value={formData.leaderPhone}
              onChange={handleChange}
              placeholder="0400 000 000"
              className={errors.leaderPhone ? 'error' : ''}
            />
            {errors.leaderPhone && <span className="error-text">{errors.leaderPhone}</span>}
          </div>
        </div>
      </section>

      {/* Players */}
      <section className="form-section">
        <h3><Users size={20} /> Players</h3>
        <p className="section-note">Add 3-10 players. Each player's parent/guardian must agree to the waiver for under 18s.</p>

        {errors.players && <div className="error-banner">{errors.players}</div>}

        <div className="players-list">
          {formData.players.map((player, index) => (
            <div key={index} className="player-row">
              <span className="player-number">{index + 1}</span>
              <div className="player-fields">
                <input
                  type="text"
                  value={player.name}
                  onChange={(e) => handlePlayerChange(index, 'name', e.target.value)}
                  placeholder="Player name"
                  className="player-name"
                />
                <select
                  value={player.age}
                  onChange={(e) => handlePlayerChange(index, 'age', e.target.value)}
                  className={`player-age ${errors[`player_${index}_age`] ? 'error' : ''}`}
                >
                  <option value="">Age...</option>
                  {AGE_BRACKETS.map(age => (
                    <option key={age.value} value={age.value}>{age.label}</option>
                  ))}
                </select>
                <select
                  value={player.sex}
                  onChange={(e) => handlePlayerChange(index, 'sex', e.target.value)}
                  className={`player-sex ${errors[`player_${index}_sex`] ? 'error' : ''}`}
                >
                  <option value="">Sex...</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {formData.players.length > 3 && (
                  <button
                    type="button"
                    className="remove-player"
                    onClick={() => removePlayer(index)}
                    aria-label="Remove player"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {formData.players.length < 10 && (
          <button type="button" className="add-player-btn" onClick={addPlayer}>
            + Add Another Player
          </button>
        )}
      </section>

      {/* Agreements */}
      <section className="form-section agreements">
        <h3>Agreements</h3>

        <label className={`checkbox-label ${errors.agreeToRules ? 'error' : ''}`}>
          <input
            type="checkbox"
            name="agreeToRules"
            checked={formData.agreeToRules}
            onChange={handleChange}
          />
          <span>I have read and agree to the <a href="/rules" target="_blank">Tricket Rules</a> *</span>
        </label>

        <label className={`checkbox-label ${errors.agreeToWaiver ? 'error' : ''}`}>
          <input
            type="checkbox"
            name="agreeToWaiver"
            checked={formData.agreeToWaiver}
            onChange={handleChange}
          />
          <span>I accept the <a href="/waiver" target="_blank">Safety Waiver</a> for myself and all players listed (or confirm parent/guardian consent for minors) *</span>
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="agreeToMedia"
            checked={formData.agreeToMedia}
            onChange={handleChange}
          />
          <span>I consent to photos/videos being taken and used per the <a href="/consent" target="_blank">Media Consent Policy</a></span>
        </label>
      </section>

      <button
        type="submit"
        className="btn btn-primary btn-large submit-btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Registering...' : 'Register Team'}
      </button>
    </form>
  )
}

export default RegistrationForm
