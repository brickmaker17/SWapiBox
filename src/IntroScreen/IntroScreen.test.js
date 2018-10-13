import React from 'react';
import { configure, shallow } from 'enzyme';

import IntroScreen from './IntroScreen';

describe('IntroScreen', () => {
  it('Should match the snapshot', () => {
    const mockcrawl = 'A long time ago'
    const mocktitle = 'Return of the Sithe'
    const mockyear =  '1992'

    const wrapper = shallow(<IntroScreen  crawl={mockcrawl} title={mocktitle} year={mockyear} />)
    expect(wrapper).toMatchSnapshot()
  })


})