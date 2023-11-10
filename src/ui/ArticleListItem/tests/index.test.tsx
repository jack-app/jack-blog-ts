import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { ArticleListItem } from '..'

it('render ArticleListItem component', () => {
  render(<ArticleListItem />)

  const heading = screen.getByRole('heading', {
    name: 'Component',
  })

  expect(heading).toBeInTheDocument()
})