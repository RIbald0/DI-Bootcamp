import './App.css'
import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: '',
      post: '',
      responseToPost: ''
    }

  }

  async componentDidMount() {
    const response = await fetch('http://localhost:5001/api/hello')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const responseData = await response.text()
    this.setState({ message : responseData})
  }


  handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:5001/api/world', {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({message : this.state.post})
    })
    const responseText = await response.text(response)
    this.setState({ responseToPost : responseText})
  }


  handleChange = async (e) => {
    this.setState({ post: e.target.value })
  }

  render() {
    return (
      <>
        <h2>{this.state.message}</h2>
        <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} />
        <button>Submit</button>
        </form>
        <br />
        <p>{this.state.responseToPost}</p>
      </>
    )
  }
}


export default App
