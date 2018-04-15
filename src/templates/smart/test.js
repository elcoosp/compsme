import React from 'react'
import @NAME from './index.js'
import renderer from 'react-test-renderer'

test('@NAME should ...', () => {
  const component = renderer.create( <@NAME></@NAME>)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
