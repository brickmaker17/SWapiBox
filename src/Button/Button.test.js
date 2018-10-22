// import React from 'react';
// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import Button from './Button';

// configure({ adapter: new Adapter() });

// describe('BUTTON', () => {
//   let wrapper;

//   beforeEach(() => {
//     wrapper = shallow(<Button purpose="people" image="BB8" />)
//   })
  
//   it('Should match the snapshot', () => {
//     // wrapper = shallow(<Button purpose="people" />)
//     expect(wrapper).toMatchSnapshot()
//   })
  
//   it('should take in the correct props', () => {

//     expect(wrapper.props().purpose).to.equal('people');
//     // expect(wrapper.props().image).to.equal('BB8');
     
//   })
// })