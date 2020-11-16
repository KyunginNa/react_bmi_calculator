import React from 'react'

const FormImperial = props => {
    return (
        <form onSubmit={props.onSubmitHandler}>
            <label htmlFor="imperial-weight">Weight</label>
            <input type="number"
                required
                placeholder="Weight in pounds"
                name="weight"
                id="imperial-weight"
                value={props.weight}
                onChange={props.onChangeHandler} />
            <label htmlFor="imperial-height">Height</label>
            <input type="number"
                required
                placeholder="Height in inches"
                name="height"
                id="imperial-height"
                value={props.height}
                onChange={props.onChangeHandler} />
            <button id="imperial-calculate">Calculate BMI</button>
        </form>
    )
}

export default FormImperial
