import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//dont use app.css
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/shared/Header"
import Footer from './components/shared/Footer'
import Navbar from './components/shared/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import Exhibitors from './components/Exhibitors'
import Sponsors from './components/Sponsors'
import CallForSubmission from './components/CallforSubmission'
import Location from './components/Location';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/callforsubmission" element= {<CallForSubmission />} />
      <Route path="/location" element= {<Location />} />
      <Route path="/contact" element= {<Contact />} />
      <Route path="/exhibitors" element= {<Exhibitors />} />
      <Route path="/sponsors" element= {<Sponsors />} />

      </Routes>
    </Router>
  )
}

export default App
