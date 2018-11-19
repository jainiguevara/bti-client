import React from 'react'
import renderer from 'react-test-renderer'
import LoginForm from '../LoginForm'
import LoginHeader from '../LoginHeader'


it('should render the LoginForm', () => {
  const component =
    renderer.create(
      <LoginHeader />
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})