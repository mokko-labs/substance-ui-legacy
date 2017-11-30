import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import {Container} from '../../components/Layouts/index'

test('Padded Styled Component', () => {
  const tree = renderer.create(<Container />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('max-width', '1700px')
  expect(tree).toHaveStyleRule('padding-right', '70px')
  expect(tree).toHaveStyleRule('padding-left', '70px')
  expect(tree).toHaveStyleRule('margin', '0 auto')

})
