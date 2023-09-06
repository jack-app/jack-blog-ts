import '@testing-library/jest-dom'
import { SearchTags } from '..'
import { waitFor, render, screen } from '@testing-library/react'

it('render SearchTags component', () => {
  render(<SearchTags />)

  const heading = screen.getByRole('heading', {
    name: 'Component',
  })

  expect(heading).toBeInTheDocument()
})