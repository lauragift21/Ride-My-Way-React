import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from '../../src/containers/Home';

describe('render', () => {
  test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });
  test('create a snapshot', () => {
    const wrapper = shallow(<Home />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
