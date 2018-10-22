import React from 'react';
import { configure, shallow } from 'enzyme';


import Adapter from 'enzyme-adapter-react-16';
import Card from './Card';

configure({ adapter: new Adapter() });



describe('Card', () => {
  const mockProp = [{
    Homeworld: 'stewjon',
    Name: 'Luke',
    Species: 'Human',
    population: '2'
  }]

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card person={mockProp[0]} />)
  })

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it.skip('should changeFavorite method if the favorite button is pressed', () => {
    const changeFavoriteMock = jest.fn();
    wrapper = shallow(<Card 
      person={mockProp[0]}
      changeFavorite={changeFavoriteMock()}
      />)
    wrapper.find('.favorite-button').simulate('click');

    expect(changeFavoriteMock).toHaveBeenCalled();
  })

  it.skip('should update favorite in state when the button is clicked', () => {
    wrapper = shallow(<Card
      person={mockProp[0]}
    />)
    wrapper.find('.favorite-button').simulate('click');

    expect(wrapper.state().favorite).toEqual(true);
  })

})