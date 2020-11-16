import React, { Component } from "react";
import FormMetric from './components/FormMetric'
import FormImperial from './components/FormImperial'
import Message from './components/Message'
import { calculateMetricBmi } from './helpers/bmiMetricHelper'

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
    const [bmiValue, bmiMessage] = calculateMetricBmi(
      this.state.weight,
      this.state.height
    )
    this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage })
  }

  render() {
    const method = this.state.method
    let form;
    if ( method === "metric") {
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
      <div>
        <select id="select-method" value={this.state.method} onChange={this.onSelectHandler}>
          <option value="metric">Metric</option>
          <option value="imperial">Imperial</option>
        </select>
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
