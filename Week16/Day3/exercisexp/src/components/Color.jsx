import React from "react";

class Color extends React.Component {
    constructor() {
        super()
        this.state = {
            favoriteColor: 'red',
            show : true
        }
    }

    changeColor = () => {
        this.setState({favoriteColor : 'blue' })
    }

    deleteHeader = () => {
        this.setState({show : false})
    }

    shouldComponentUpdate() {
        return true
    }

    componentDidMount() {
        this.setState({favoriteColor : 'yellow'})
    }

    componentDidUpdate() {
        console.log('after update')
    }

    getSnapshotBeforeUpdate() {
        console.log('in getSnapshotBeforeUpdate')
        return null
    }


    render() {
        return (
        <>
            <h1>My Favorite color is {this.state.favoriteColor}</h1>
            <button onClick={() => this.changeColor()}>Change Color</button>
            <button onClick={() => this.deleteHeader()}>Delete Header</button>
            {this.state.show ? <Child /> : null}
        </>
        )
    }
}


class Child extends React.Component {
    constructor() {
        super()
    }

    componentWillUnmount (){
        alert('The component named Header is about to be unmounted')
    }

    render() {
        return (
            <>
                <header>Hello World!</header>
            </>
        )
    }
}

export { Color , Child };