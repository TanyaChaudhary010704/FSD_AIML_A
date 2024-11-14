import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Greetings from './Greetings.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
    {/* <Greetings name="Tanya" />
    <Greetings name="Tanisha" />
    <Greetings name="Riya" /> */}
    <Footer />
  </StrictMode>,
)
