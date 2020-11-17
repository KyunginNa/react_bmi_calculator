import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const FormMetric = props => {
    return (
        <form onSubmit={props.onSubmitHandler}>
            <label htmlFor="weight">Weight: </label>
            <input
                type="number"
                required
                placeholder="Weight in kgs"
                value={props.weight}
                name="weight"
                id="weight"
                onChange={props.onChangeHandler}
            /><br />
            <label htmlFor="height" id="form-height-label">Height: </label>
            <input
                type="number"
                required
                placeholder="Height in cm"
                value={props.height}
                name="height"
                id="height"
                onChange={props.onChangeHandler} /><br />
            <Button id="calculate" animated color="orange">
                <Button.Content visible>Calculate BMI</Button.Content>
                <Button.Content hidden>
                    <Icon name='calculator' />
                </Button.Content>
            </Button>
        </form>
    )
}

export default FormMetric
