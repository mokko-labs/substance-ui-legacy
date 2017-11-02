
import React from 'react'
import 'jest-styled-components'
import {StackChart} from '../../components/Charts/index'

import { mount, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('Area Chart Styled Components', () => {
  let StackChartData1 = [
    { x: 1, y: 2},
    { x: 2, y: 3},
    { x: 3, y: 5},
    { x: 4, y: 4},
    { x: 5, y: 6}
  ]
  let StackChartData2 = [
    { x: 1, y: 0},
    { x: 2, y: 2},
    { x: 3, y: 2},
    { x: 4, y: 5},
    { x: 5, y: 2}
  ]

  const wrapper = mount(
    <StackChart
      curves={true}
      dataColors={['#DD105E', '#46466E']}
      animation={{
        duration: 2000,
        onLoad: {
          duration: 1000
        }
      }}
      data={[StackChartData1, StackChartData2]}
    />
  );
  // Match the props
  expect(wrapper.props().curves).toEqual(true)
  expect(wrapper.props().animation).toEqual({
    duration: 2000,
    onLoad: {
      duration: 1000
    }
  })
  expect(wrapper.props().dataColors).toEqual(['#DD105E', '#46466E'])
  expect(wrapper.props().data).toEqual([StackChartData1, StackChartData2])

})
