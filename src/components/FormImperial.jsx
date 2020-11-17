import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const FormImperial = props => {
    return (
        <form onSubmit={props.onSubmitHandler}>
            <label htmlFor="imperial-weight">Weight: </label>
            <input type="number"
                required
                placeholder="Weight in pounds"
                name="weight"
                id="imperial-weight"
                value={props.weight}
                onChange={props.onChangeHandler}
            /><br />
            <label htmlFor="imperial-height" id="form-imperial-height-label">Height: </label>
            <input type="number"
                required
                placeholder="Height in inches"
                name="height"
                id="imperial-height"
                value={props.height}
                onChange={props.onChangeHandler} /><br />
            <Button id="imperial-calculate" animated color="orange">
                <Button.Content visible>Calculate BMI</Button.Content>
                <Button.Content hidden>
                    <Icon name='calculator' />
                </Button.Content>
            </Button>
        </form>
    )
}

export default FormImperial
