import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { WriterList } from '..'

it('render WriterList component', () => {
  render(<WriterList />)

  const heading = screen.getByRole('heading', {
    name: 'Component',
  })

  expect(heading).toBeInTheDocument()
})