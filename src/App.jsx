import React, { Component } from "react";
import FormMetric from './components/FormMetric'
import FormImperial from './components/FormImperial'
import SelectMethod from './components/SelectMethod'
import Message from './components/Message'
import { calculateMetricBmi } from './helpers/bmiMetricHelper'
import { calculateImperialBmi } from './helpers/bmiImperialHelper'
import { Image } from 'semantic-ui-react'


class App extends Component {
  state = {
    method: "metric",
    weight: "",
    height: "",
    bmiValue: "",
    bmiMessage: ""
  }

  onSelectHandler = e => this.setState({ method: e.target.value })
  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value })
  onSubmitHandler = e => {
    e.preventDefault()
    if (this.state.method === "metric") {
      const [bmiValue, bmiMessage] = calculateMetricBmi(
        this.state.weight,
        this.state.height)
      this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage })
    }
    else {
      const [bmiValue, bmiMessage] = calculateImperialBmi(
        this.state.weight,
        this.state.height)
      this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage })
    }
  }

  render() {
    const method = this.state.method
    let form;
    if (method === "metric") {
      form =
        <FormMetric
          weight={this.state.weight}
          height={this.state.height}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
        />
    } else {
      form =
        <FormImperial
          weight={this.state.weight}
          height={this.state.height}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
        />
    }
    return (
      <div id="app-div">
         <Image src="/images/scale.png" size="small" centered></Image>
          <h2>BMI Calculator</h2>
        <SelectMethod
          value={this.state.method}
          onChange={this.onSelectHandler}
        />
        {form}
        {this.state.bmiValue && (
          <Message
            bmiValue={this.state.bmiValue}
            bmiMessage={this.state.bmiMessage}
          />
        )}
      </div>
    )
  }
}

export default App;
