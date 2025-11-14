import React from "react";

class BuggyCounter extends React.Component {
    constructor() {
        super()
        this.state = {
            counter : 0
        }
    }

    handleClick = () => {
        this.setState({counter: this.state.counter + 1})
    }


    render() {
        if (this.state.counter === 5) throw new Error('I crashed')
        return (
            <>
            <h2>Counter: {this.state.counter}</h2>
            <button onClick={() => this.handleClick()}>+ 1</button>
            </>
        )
    }
}


export default BuggyCounter

