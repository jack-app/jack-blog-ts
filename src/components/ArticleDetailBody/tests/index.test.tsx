import '@testing-library/jest-dom'
import { ArticleDetailBody } from '..'
import { waitFor, render, screen } from '@testing-library/react'

it('render ArticleDetailBody component', () => {
  render(<ArticleDetailBody />)

  const heading = screen.getByRole('heading', {
    name: 'Component',
  })

  expect(heading).toBeInTheDocument()
})