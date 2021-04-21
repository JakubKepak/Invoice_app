import { shallow } from "enzyme";
import App from "App";

test("renders without error", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  // expect(wrapper.exists()).toBe(true);
  expect(appComponent.length).toBe(1);
});
