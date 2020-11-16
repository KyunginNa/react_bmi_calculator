import React from "react";
import { mount } from "enzyme";
import App from "../App";

describe("App component", () => {
  const wrapper = mount(<App />);
  it("Counts using the metric method", () => {
    wrapper
      .find("#select-method")
      .simulate("change", { target: { value: "metric" } });
    wrapper
      .find("#weight")
      .simulate("change", { target: { name: "weight", value: "90" } });
    wrapper
      .find("#height")
      .simulate("change", { target: { name: "height", value: "190" } });
    wrapper.find("form").simulate("submit");
    expect(wrapper.find("#bmi-message").text()).toEqual(
      "You are Normal with a BMI of 24.93"
    );
  });
  it("Counts using the imperial method", () => {
    wrapper
      .find("#select-method")
      .simulate("change", { target: { value: "imperial" } });
    wrapper
      .find("#imperial-weight")
      .simulate("change", { target: { name: "weight", value: "192" } });
    wrapper
      .find("#imperial-height")
      .simulate("change", { target: { name: "height", value: "74" } });
    wrapper.find("form").simulate("submit");
    expect(wrapper.find("#bmi-message").text()).toEqual(
      "You are Normal with a BMI of 24.65"
    );
  });
});
