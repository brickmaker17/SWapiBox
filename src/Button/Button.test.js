import React from 'react';
import { configure, shallow } from 'enzyme';


import Adapter from 'enzyme-adapter-react-16';
import Button from './Button';

configure({ adapter: new Adapter() });



describe('Button', () => {
  let mockPurpose = "people"
  let mockImage;
  let mockFunc = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Button purpose={mockPurpose} />)
  })

  it.skip('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})