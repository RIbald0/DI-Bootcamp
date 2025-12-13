import { useState } from 'react'
import './App.css'

function App() {

  const [languages, setLanguages] = useState([

    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 }

  ])

  const handleVote = (index) => {
    const newArr = [...languages];
     const newArr2 = {
      ...newArr[index],    
      votes: newArr[index].votes +1
    }
    newArr[index] = newArr2
    setLanguages(newArr)
  }


  return (
    <>
      <ul>
        {languages.map((language, index) => (
          <div key={index}>
            {language.votes} {language.name}
            <button onClick={() => handleVote(index)}>Click Here</button>
          </div>
        ))}
      </ul>
    </>
  )
}

export default App
