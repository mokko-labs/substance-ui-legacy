import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import {Panel} from '../../components/Layouts/index'

test('Panel Styled Component', () => {
  const tree = renderer.create(<Panel />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('max-width', '100%')
  expect(tree).toHaveStyleRule('display', 'block')
  expect(tree).toHaveStyleRule('width', '100%')
  expect(tree).toHaveStyleRule('height', 'auto')
  expect(tree).toHaveStyleRule('margin', 'undefinedpx')
  expect(tree).toHaveStyleRule('box-sizing', 'border-box')
  expect(tree).toHaveStyleRule('justify-content', 'flex-start')
  expect(tree).toHaveStyleRule('flex-direction', 'row')
  expect(tree).toHaveStyleRule('text-align', 'left')

  expect(tree).toHaveStyleRule('padding-top', '0px')
  expect(tree).toHaveStyleRule('padding-right', '0px')
  expect(tree).toHaveStyleRule('padding-left', '0px')
  expect(tree).toHaveStyleRule('padding-bottom', '0px')

})
