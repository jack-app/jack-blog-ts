import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ArticleList } from "..";

it("render ArticleList component", () => {
  render(<ArticleList />);

  const heading = screen.getByRole("heading", {
    name: "Component",
  });

  expect(heading).toBeInTheDocument();
});
