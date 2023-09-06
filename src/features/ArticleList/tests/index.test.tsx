import '@testing-library/jest-dom'
import { ArticleList } from '..'
import { waitFor, render, screen } from '@testing-library/react'

it('render ArticleList component', () => {
  render(<ArticleList />)

  const heading = screen.getByRole('heading', {
    name: 'Component',
  })

  expect(heading).toBeInTheDocument()
})