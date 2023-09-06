import '@testing-library/jest-dom'
import { ArticleDetailHeader } from '..'
import { waitFor, render, screen } from '@testing-library/react'

it('render ArticleDetailHeader component', () => {
  render(<ArticleDetailHeader />)

  const heading = screen.getByRole('heading', {
    name: 'Component',
  })

  expect(heading).toBeInTheDocument()
})