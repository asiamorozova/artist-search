import React from 'react';
import { shallow } from 'enzyme';
import Artist from './Artist';

describe('Artist', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Artist
      id='string'
      name={'some artist'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
