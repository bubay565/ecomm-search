import 'raf/polyfill'
import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import SearchPage from './SearchPage'

describe('SearchPage', () => {
  const buildPageObject = () => {
    const wrapper = shallow(<SearchPage />)
    const pageObject = {
      getSpecificationTitle: () => wrapper.find('h1').text()
    }
    return pageObject
  }

  test('should have the correct heading', () => {
    const component = buildPageObject()
    const expectValue =  component.getSpecificationTitle()
    expect(expectValue).toBe(' Argos Search Page ');
  });

})
