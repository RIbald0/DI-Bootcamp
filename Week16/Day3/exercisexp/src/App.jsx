import { useState } from 'react'
import './App.css'
import BuggyCounter from './components/BuggyCounter.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import { Color , Child }  from './components/Color.jsx'

function App() {

  return (
    <>
      <ErrorBoundary>
      <BuggyCounter />
      <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
      <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
      <BuggyCounter />
      </ErrorBoundary>
      <BuggyCounter />
      <Color />
    </>
  )
}

export default App
