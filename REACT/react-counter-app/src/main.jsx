import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // in strict mode rendered two times
  <StrictMode>
    <BrowserRouter>
      {/* app.jsx contains all the routing */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
