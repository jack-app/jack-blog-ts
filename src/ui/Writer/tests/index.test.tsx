import '@testing-library/jest-dom'
import { Writer } from '..'
import { waitFor, render, screen } from '@testing-library/react'

it('render Writer component', () => {
  render(<Writer />)

  const heading = screen.getByRole('heading', {
    name: 'Component',
  })

  expect(heading).toBeInTheDocument()
})