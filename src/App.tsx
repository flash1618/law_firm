import './App.css'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import PracticeAreas from './components/PracticeAreas'
import Testimonials from './components/Testimonials'
import MeetOurTeam from './components/MeetOurTeam'
import ContactUs from './components/ContactUs'
import LegalPolicies from './components/LegalPolicies'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/practice-areas" element={<PracticeAreas />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/team" element={<MeetOurTeam />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/policies" element={<LegalPolicies />} />
      </Routes>
    </>
  )
}

export default App
