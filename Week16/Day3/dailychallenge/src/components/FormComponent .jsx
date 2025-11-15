import React from "react";

const Form = (props) => {

    return (
        <>
            <input
                type="text"
                name="firstName"
                value={props.formData.firstName}
                onChange={props.handleChange}
                placeholder="First Name"
            />
            <br />
            <input
                type="text"
                name="lastName"
                value={props.formData.lastName}
                onChange={props.handleChange}
                placeholder="Last Name"
            />
            <br />
            <input
                type="text"
                name="age"
                value={props.formData.age}
                onChange={props.handleChange}
                placeholder="Age"
            />
            <br />
            <label>
                <input
                    type="radio"
                    name="gender"
                    value='male'
                    checked={props.formData.gender === 'male'}
                    onChange={props.handleChange}
                />
                Male
            </label >
            <br />
            <label>
                <input
                    type="radio"
                    name="gender"
                    value='female'
                    checked={props.formData.gender === 'female'}
                    onChange={props.handleChange}
                />
                Female
            </label>
            <br />
            <h4>Select your destination</h4>
            <select
                name="destination"
                value={props.formData.destination}
                onChange={props.handleChange}>
                <option value="" disabled selected>--Please choose a Destination--</option>
                <option value="Thailand">Thailand</option>
                <option value="Japan">Japan</option>
                <option value="Brazil">Brazil</option>
            </select>
            <br />
            <h4>Dietary Restriction</h4>
            <label>
                <input
                    type="checkbox"
                    name="nutsFree"
                    checked={props.formData.nutsFree}
                    onChange={props.handleChange}
                />
                Nuts Free
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    name="lactoseFree"
                    checked={props.formData.lactoseFree}
                    onChange={props.handleChange}
                />
                Lactose Free
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    name="veganMeal"
                    checked={props.formData.veganMeal}
                    onChange={props.handleChange}
                />
                Vegan
            </label>
        </>
    )
}

export default Form