import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Homepage from './pages/home.jsx'
import AboutPage from './pages/about.jsx'
import ContactPage from './pages/contact.jsx'
import ServicesPage from './pages/servicespage.jsx'


function App() {
  

  return (
    <div className='app-container'>
      <Header />
          <Routes>
            <Route path={"/"} element={<Homepage />} />
            <Route path={"/about"} element={<AboutPage />} />
            <Route path={"/contact"} element={<ContactPage />} />
            <Route path={"/services"} element={<ServicesPage />} />
          </Routes>
      <Footer />
    </div>
  )
}

export default App
