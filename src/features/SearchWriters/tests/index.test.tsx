import '@testing-library/jest-dom'
import { SearchWriters } from '..'
import { waitFor, render, screen } from '@testing-library/react'

it('render SearchWriters component', () => {
  render(<SearchWriters />)

  const heading = screen.getByRole('heading', {
    name: 'Component',
  })

  expect(heading).toBeInTheDocument()
})