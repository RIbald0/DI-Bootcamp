import { useState } from 'react'
import './App.css'
import Car from './Components/Car.jsx'
import Events from './Components/Events.jsx';
import Phone from './Components/Phone.jsx'
import Color from './Components/Color.jsx'


function App() {
  const carinfo = { name: "Ford", model: "Mustang" };

  return (
    <>
      <Car carModel={carinfo.model}/>
      <Events />
      <Phone />
      <Color />
    </>
  )
}

export default App
