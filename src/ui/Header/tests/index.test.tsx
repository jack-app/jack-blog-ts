import '@testing-library/jest-dom'
import { Header } from '..'
import { waitFor, render, screen } from '@testing-library/react'

it('render Header component', () => {
  render(<Header />)

  const heading = screen.getByRole('heading', {
    name: 'Component',
  })

  expect(heading).toBeInTheDocument()
})