import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import WhatItIs from './pages/WhatItIs'
import Rules from './pages/Rules'
import TeamEntry from './pages/TeamEntry'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Fixtures from './pages/Fixtures'
import Consent from './pages/Consent'
import Waiver from './pages/Waiver'
import './App.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-is-tricket" element={<WhatItIs />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/enter" element={<TeamEntry />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/consent" element={<Consent />} />
          <Route path="/waiver" element={<Waiver />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
