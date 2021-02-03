import { shallow } from "enzyme";
import App from "../pages/_app";
it("renders without crashing", () => {
 const app= shallow(<App />)
  expect(app).toMatchSnapshot()
});
