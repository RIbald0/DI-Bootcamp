import './App.css'
import Counter from './Counter'
import Greeting from './Greeting'
import User from './UserCard'
import UserList from './UserList'

function App() {

  return (
    <>
      <Greeting name={"Matteo"} messageCount={1}/>
      <Counter />
      <User />
      <User name={"Alice"}/>
      <User name={"Bob"} age={50} role={"Manager"}/>
      <UserList />
    </>
  )
}

export default App
