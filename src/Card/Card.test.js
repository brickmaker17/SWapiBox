import React from 'react'
import { shallow } from 'enzyme'

import Card from './Card'

describe( 'Card', () => {

  it('Should match the snapshot', () => {
    const mockProp = [{
      homeworld: 'stewjon',
      name: 'Luke',
      species: 'Human',
      population: '2'
      }]

    const wrapper = shallow(<Card {...mockProp} />)
    expect(wrapper).toMatchSnapshot()
  })

  
})