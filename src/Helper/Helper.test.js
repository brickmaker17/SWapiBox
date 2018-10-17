import React from 'react';
import { configure, shallow } from 'enzyme';

import App from '../App'

import Helper from './Helper';
import { promises } from 'fs';

const getData = require('./Helper').getData;

describe('Helper', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('getData should call fetch with correct param', async () => {
    const expected = 'https://swapi.co/api/';

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200
    }))
    console.log(Helper)
    getData()
    await expect(window.fetch).toHaveBeenCalledWith(expected)
  })

  it('getFilms gets called with the correct params', () => {
  })

  it('getFilms calls fetch with the proper params', () => {
  })

  it('should call getPeople', () => {
  })

  it('Should call fetchPerson', () => {
  })

  it('fetchPerson should call fetch with correct params', () => {
  })

  it('fetchPerson should call getSpecies', () => {
  })

  it('fetchPerson should call getHomeworld', () => {
  })

  it('fetchPerson should call getPopulation', () => {
  })

  it('should call getPlanets', () => {
  })

  it('getPlanets should call fetch with the correct params', () => {
  })
<<<<<<< HEAD
=======

>>>>>>> 2b77a61e9b5b758ffa392df6e752f55e73e1867b
})