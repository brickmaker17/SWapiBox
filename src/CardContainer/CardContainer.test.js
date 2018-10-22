import React from 'react';
import { configure, shallow } from 'enzyme';

import CardContainer from './CardContainer';

describe('CardContainer', () => {
  it.skip('Should match the snapshot', () => {
    const mockProp = [{
      Homeworld: 'stewjon',
      Name: 'Luke',
      Species: 'Human',
      population: '2'
    },
    {
      Homeworld: 'stewjon',
      Name: 'Luke',
      Species: 'Human',
      population: '2'
    },
    {
      Homeworld: 'stewjon',
      Name: 'Luke',
      Species: 'Human',
      population: '2'
    },
    {
      Homeworld: 'stewjon',
      Name: 'Luke',
      Species: 'Human',
      population: '2'
    },
    {
      Homeworld: 'stewjon',
      Name: 'Luke',
      Species: 'Human',
      population: '2'
    },
    {
      Homeworld: 'stewjon',
      Name: 'Luke',
      Species: 'Human',
      population: '2'
    },
    {
      Homeworld: 'stewjon',
      Name: 'Luke',
      Species: 'Human',
      population: '2'
    },
    {
      Homeworld: 'stewjon',
      Name: 'Luke',
      Species: 'Human',
      population: '2'
    },
    {
      Homeworld: 'stewjon',
      Name: 'Luke',
      Species: 'Human',
      population: '2'
    },
    {
      Homeworld: 'stewjon',
      Name: 'Luke',
      Species: 'Human',
      population: '2'
    }
  ]

    const wrapper = shallow(<CardContainer  characters={mockProp} />)
    expect(wrapper).toMatchSnapshot()
  })


})