import React from "react";
import './Exercise.css'


class Exercise extends React.Component {
    render () {
        const style_header = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };
        return (
            <div>
                <h1 style={style_header}>This is a Header</h1>
                <p className="para">This is a paragragh</p>
                <a href="#">
                    This is a Link
                </a>
                <form>
                    <label>Enter Value:</label>
                    <input type="text" />
                    <button type="submit">Submit</button>
                </form>
                <img
                    src="https://via.placeholder.com/100"
                    alt="Placeholder image"
                />
                <ul>
                    <li>Item A</li>
                    <li>Item B</li>
                </ul>
            </div>

        )
    }
}

export default Exercise