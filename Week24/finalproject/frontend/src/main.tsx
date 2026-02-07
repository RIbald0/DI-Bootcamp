import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './context/AuthContext.tsx'

// Targets the 'root' div in your index.html and starts the React engine
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* AuthProvider is placed here so every single component in <App /> can access user data */}
    <AuthProvider>
    <App />
    </AuthProvider>
  </StrictMode>,
)
