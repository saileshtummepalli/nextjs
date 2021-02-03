import React from 'react';
import { mount, render, shallow} from "enzyme"

import Testimonial from '../Testimonial';

  describe('<Testimonial/>', () => {
    it('Should shallow correctly', () => {
      const  container  = shallow( <Testimonial/>);
      expect(container.debug()).toMatchSnapshot();
    });
    describe('<Testimonial/>', () => {
      it('enzyme shallow', () => {
        const  container  = shallow(<Testimonial/>);
        const wapper = container.find(`[data-test='testimonial']`);
        expect(wapper.length).toBe(1);
      });
    })
  });