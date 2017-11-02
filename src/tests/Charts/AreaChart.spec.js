
import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import {AreaChart} from '../../components/Charts/index'

import toJson from 'enzyme-to-json'

import { mount, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('Area Chart Styled Components', () => {
  const wrapper = mount(
    <AreaChart chartStyle={{fill:'white'}}
               height={250}
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
  expect(toJson(wrapper)).toMatchSnapshot();
    // Match the props
  expect(wrapper.props().chartStyle).toEqual({fill:'white'})
  expect(wrapper.props().height).toEqual(250)
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
