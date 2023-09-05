import '@testing-library/jest-dom'
import { ArticleDetail } from '..'
import { waitFor, render, screen } from '@testing-library/react'

it('render ArticleDetail component', () => {
  render(<ArticleDetail />)

  const heading = screen.getByRole('heading', {
    name: 'Component',
  })

  expect(heading).toBeInTheDocument()
})