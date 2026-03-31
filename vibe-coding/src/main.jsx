import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import App from './App.jsx'

import '@fortawesome/fontawesome-free/css/all.min.css'
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/waffle-n-toast-vibe-coding/">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
