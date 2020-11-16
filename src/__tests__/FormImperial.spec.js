import React from "react";
import { shallow } from "enzyme";

import FormImperial from "../components/FormImperial";

describe("FormImperial", () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();
  const wrapper = shallow(
    <FormImperial
      weight="198"
      height="74"
      onChangeHandler={handleChange}
      onSubmitHandler={handleSubmit}
    />
  );

  it("renders with weight prop", () => {
    expect(wrapper.find("#imperial-weight").props().value).toEqual("198");
  });

  it("renders with height prop", () => {
    expect(wrapper.find("#imperial-height").props().value).toEqual("74");
  });

  it("on change the onChangeHandler is being called", () => {
    wrapper.find("#imperial-weight").simulate("change");
    expect(handleChange).toHaveBeenCalled();
    wrapper.find("#imperial-height").simulate("change");
    expect(handleChange).toHaveBeenCalled();
  });

  it("on submit the onSubmitHandler is being called", () => {
    wrapper.find("form").simulate("submit");
    expect(handleSubmit).toHaveBeenCalled();
  });
});
