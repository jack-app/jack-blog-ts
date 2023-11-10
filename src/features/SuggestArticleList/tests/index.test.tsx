import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { SuggestArticleList } from '..'

it('render SuggestArticleList component', () => {
  render(<SuggestArticleList />)

  const heading = screen.getByRole('heading', {
    name: 'Component',
  })

  expect(heading).toBeInTheDocument()
})