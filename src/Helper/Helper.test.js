import React from 'react';
import { configure, shallow } from 'enzyme';

import App from '../App'

import Helper from './Helper';
import { promises } from 'fs';

const getData = require('./Helper').getData;
const fetchFilms = require('./Helper').fetchFilms;

describe('Helper', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it.skip('getData should call fetch with correct param', async () => {
    const expected = 'https://swapi.co/api/';

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200
    }))
    getData()
    await expect(window.fetch).toHaveBeenCalledWith(expected)
  })

  it.skip('fetchFilms gets called with the correct params', async () => {
    const expected = 'https://swapi.co/api/films/'
    
    const mockFunction = jest.fn()

    await expect(mockFunction).toHaveBeenCalledWith(expected);
  })

  // it('fetchFilms calls fetch with the proper params', async () => {
  //   const expected = 'https://swapi.co/api/films/'

  //   window.fetch = jest.fn().mockImplementation(() =>  Promise.resolve({
  //       status: 200
  //     }))
  //   // fetchFilms()
  //   await expect(window.fetch).toHaveBeenCalledWith(expected);
  // })

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
})