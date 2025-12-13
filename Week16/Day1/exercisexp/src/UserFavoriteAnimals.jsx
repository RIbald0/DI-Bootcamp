import React from "react";

class UserFavoriteAnimals extends React.Component {
    render() {
        const animalsArray = this.props.animals;
        return (
            <ul>
                {animalsArray.map((animal, index) => (
                    <li key={index}>
                        {animal}
                    </li>



                ))}
            </ul>
        )
    }
}

export default UserFavoriteAnimals;