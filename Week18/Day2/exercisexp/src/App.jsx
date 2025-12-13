import './App.css'
import ThemeSwitcher from './components/ThemeSwitcher.jsx'
import { ThemeProvider } from './components/ThemeContext.jsx'

function App() {

  return (
<ThemeProvider>
      <div className="App">
        <h1>Theme Switcher Example</h1>
        <ThemeSwitcher/> 
      </div>
    </ThemeProvider>
  )
}

export default App
