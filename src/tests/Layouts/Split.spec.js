import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import {Split} from '../../components/Layouts/index'

test('Panel Styled Component', () => {
  const tree = renderer.create(<Split />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('display', 'flex')
  expect(tree).toHaveStyleRule('flex-wrap', 'wrap')
  expect(tree).toHaveStyleRule('position', 'relative')
  expect(tree).toHaveStyleRule('box-sizing', 'border-box')
  expect(tree).toHaveStyleRule('margin', '0')

})
