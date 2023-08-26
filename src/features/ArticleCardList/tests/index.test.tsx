import '@testing-library/jest-dom'
import { ArticleCards } from '..'
import { waitFor, render, screen } from '@testing-library/react'

it('render ArticleCards component', () => {
  render(<ArticleCards />)

  const heading = screen.getByRole('heading', {
    name: 'Component',
  })

  expect(heading).toBeInTheDocument()
})