import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('Search component', () => {
  it('utilizes the Search component', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toMatchSnapshot();
  });
});
