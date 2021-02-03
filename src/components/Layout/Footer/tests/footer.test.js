
import Footer from "../footer";
import {render, shallow,getRenderOutput} from "enzyme"

describe('<Footer />', () => {
  it('Should shallow correctly', () => {
    const  container  = shallow(<Footer />);
    expect(container.debug()).toMatchSnapshot();
  });
  describe('<Footer />', () => {
    it('enzyme shallow', () => {
      const  container  = shallow(<Footer />);
      const wapper = container.find(`[data-test='footerComponent']`);
      expect(wapper.length).toBe(1);
    });
  })
});