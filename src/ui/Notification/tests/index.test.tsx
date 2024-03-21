import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { Notification } from '..'

it('render Notification component', () => {
  render(<Notification />)

  const heading = screen.getByRole('heading', {
    name: 'Component',
  })

  expect(heading).toBeInTheDocument()
})