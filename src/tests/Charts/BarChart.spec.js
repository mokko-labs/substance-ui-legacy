
import React from 'react'
import 'jest-styled-components'
import {BarChart} from '../../components/Charts/index'

import { mount, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('Area Chart Styled Components', () => {
  const wrapper = mount(
    <BarChart chartStyle={
      {fill: 'white',
      width: 20}}
               height={270}
               animation={{
                 duration: 2000,
                 onLoad: {
                   duration: 1000
                 }
               }}
               data={[
                 { x: 1, y: 2},
                 { x: 2, y: 3},
                 { x: 3, y: 5},
                 { x: 4, y: 4},
                 { x: 5, y: 6}
               ]}
    />
  );
  // Match the props
  expect(wrapper.props().chartStyle).toEqual({fill: 'white',
    width: 20})
  expect(wrapper.props().height).toEqual(270)
  expect(wrapper.props().animation).toEqual({
    duration: 2000,
    onLoad: {
      duration: 1000
    }
  })
  expect(wrapper.props().data).toEqual([
    { x: 1, y: 2},
    { x: 2, y: 3},
    { x: 3, y: 5},
    { x: 4, y: 4},
    { x: 5, y: 6}
  ])

})
