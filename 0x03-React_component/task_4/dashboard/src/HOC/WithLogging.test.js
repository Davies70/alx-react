import React from "react";
import { shallow } from "enzyme";
import WithLogging from "./WithLogging";

describe("WithLogging", () => {
  let consoleSpy;
  let WrappedComponent;
  let Component;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    WrappedComponent = () => <p>Hello, world!</p>;
    Component = WithLogging(WrappedComponent);
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("logs Component on mount and unmount for pure HTML", () => {
    const wrapper = shallow(<Component />);
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Component WrappedComponent is mounted"
    );
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Component WrappedComponent is going to unmount"
    );
  });

  it("logs the component name on mount and unmount for Login component", () => {
    const Login = () => <p>Login</p>;
    const WrappedLogin = WithLogging(Login);
    const wrapper = shallow(<WrappedLogin />);
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith("Component Login is mounted");
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Component Login is going to unmount"
    );
  });
});
