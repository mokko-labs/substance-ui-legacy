import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Padded from '../../components/Layouts/Padded'

test('Padded Styled Component', () => {
  const tree = renderer.create(<Padded />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('padding-top', '0px')
  expect(tree).toHaveStyleRule('padding-right', '0px')
  expect(tree).toHaveStyleRule('padding-left', '0px')
  expect(tree).toHaveStyleRule('box-sizing', 'border-box')

})