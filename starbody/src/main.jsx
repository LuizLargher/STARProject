import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './components/App.jsx'
import Example from './components/Example.jsx'
import Mine from './components/Mine.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Example />
    <Mine />
  </StrictMode>
)