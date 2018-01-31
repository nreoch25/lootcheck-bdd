import React from "react";
import { shallow } from "enzyme";
import App from "../components/App";

describe("App", () => {
  const app = shallow(<App />);
  it("renders properly", () => {
    expect(app).toMatchSnapshot();
  });
  it("contains a connected Wallet component", () => {
    // enzyme trick to log out jsx
    //console.log(app.debug());
    expect(app.find("Connect(Wallet)").exists()).toBe(true);
  });
});
