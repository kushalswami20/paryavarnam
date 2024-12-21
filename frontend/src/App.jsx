import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//dont use app.css
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/shared/Footer'
import Navbar from './components/shared/Navbar'
import Home from './components/ui/Home'
import Sponsors from './components/Sponsors'
import Resources from './components/Resources'
import Team from './components/Team'
import Gallery from './components/Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resources" element= {<Resources />} />
      <Route path="/team" element= {<Team />} />
      <Route path="/Gallery" element= {<Gallery />} />
      <Route path="/sponsors" element= {<Sponsors />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
