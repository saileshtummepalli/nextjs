
import Navbar from "../navbar";
import { shallow} from "enzyme"
import Router from 'next/router'

const mockedRouter = {pathname:"/" }
Router.router = mockedRouter

describe('<Navbar />', () => {
  it('Should shallow correctly', () => {
    const  container  = shallow(<Navbar />);
    expect(container.debug()).toMatchSnapshot();
  });
});