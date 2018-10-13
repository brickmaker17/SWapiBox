import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Card from './Card';

describe('Card', () => {

  const mockPerson = {
    Homeworld: "Tatooine",
    Name: "Luke Skywalker",
    Species: "Human",
    population: "200000",
  }

  it('Should match the snapshot', () => {
    const mockProp = [{
      Homeworld: 'stewjon',
      Name: 'Luke',
      Species: 'Human',
      population: '2'
    }]

    const wrapper = shallow(<Card  person={mockProp[0]} />)
    expect(wrapper).toMatchSnapshot()
  })


})