import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './components/App.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'

createRoot(document.getElementById('container')).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>
)