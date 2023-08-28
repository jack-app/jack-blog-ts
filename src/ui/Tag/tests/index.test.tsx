import '@testing-library/jest-dom'
import { Tag } from '..'
import { waitFor, render, screen } from '@testing-library/react'

it('render Tag component', () => {
  render(<Tag />)

  const heading = screen.getByRole('heading', {
    name: 'Component',
  })

  expect(heading).toBeInTheDocument()
})