import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import "@fortawesome/fontawesome-free/css/all.min.css";   // 👈 add this
import './index.css'
import App from './App.jsx'

const redirect = sessionStorage.redirect;

if (redirect) {
  sessionStorage.removeItem("redirect");
  window.history.replaceState(null, null, redirect);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>   {/* 👈 wrap App */}
      <App />
    </HelmetProvider>
  </StrictMode>,
)