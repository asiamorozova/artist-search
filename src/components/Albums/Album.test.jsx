import React from 'react';
import { shallow } from 'enzyme';
import Album from './Album.js';

describe('Album', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Album
      id='string'
      title={'some song'} 
      date={'1969'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
