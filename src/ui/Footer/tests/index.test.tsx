import '@testing-library/jest-dom'
import { Footer } from '..'
import { waitFor, render, screen } from '@testing-library/react'

it('render Footer component', () => {
  render(<Footer />)

  const heading = screen.getByRole('heading', {
    name: 'Component',
  })

  expect(heading).toBeInTheDocument()
})