import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ArticleDetailBody } from "..";

it("render ArticleDetailBody component", () => {
  render(<ArticleDetailBody />);

  const heading = screen.getByRole("heading", {
    name: "Component",
  });

  expect(heading).toBeInTheDocument();
});
