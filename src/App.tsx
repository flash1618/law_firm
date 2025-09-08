import './App.css'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs'
import PracticeAreas from './components/PracticeAreas'
import Testimonials from './components/Testimonials'
import MeetOurTeam from './components/MeetOurTeam'
import ContactUs from './components/ContactUs'
import TermsAndConditions from './components/TermsAndConditions'
import PrivacyPolicy from './components/PrivacyPolicy'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/practice-areas" element={<PracticeAreas />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/team" element={<MeetOurTeam />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  )
}

export default App
