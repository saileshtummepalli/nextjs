import React from 'react';
import { shallow} from "enzyme"
import  Header  from '../Header';

  describe('<Header/>', () => {
    it('Should shallow correctly', () => {
      const  container  = shallow( <Header letsgo="test" hello="hello" />);
      expect(container.debug()).toMatchSnapshot();
    });
    describe('<Header/>', () => {
      it('enzyme render', () => {
        const  container  = shallow(<Header/>);
        const wapper = container.find(`[data-test='HeaderComponent']`);
        expect(wapper.length).toBe(1);
      });
    })
  });