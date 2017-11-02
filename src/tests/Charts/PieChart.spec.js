
import React from 'react'
import 'jest-styled-components'
import {PieChart} from '../../components/Charts/index'

import { mount, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('Area Chart Styled Components', () => {
  let PieData = [
    { x: "Cats", y: 35 },
    { x: "Dogs", y: 40 },
    { x: "Birds", y: 55 },
    { x: "Humans", y: 70 }
  ]

  const wrapper = mount(
    <PieChart innerRadius={60}
              height={250}
              animation={{
                duration: 2000,
                onLoad: { duration: 1000 }
              }}
              dataColors={['#303A52', '#574B90', '#9E579D', '#FC85AE']}
              data={PieData}
    />
  );
  // Match the props
  expect(wrapper.props().innerRadius).toEqual(60)
  expect(wrapper.props().height).toEqual(250)
  expect(wrapper.props().animation).toEqual({
    duration: 2000,
    onLoad: {
      duration: 1000
    }
  })
  expect(wrapper.props().dataColors).toEqual(['#303A52', '#574B90', '#9E579D', '#FC85AE'])
  expect(wrapper.props().data).toEqual(PieData)

})
