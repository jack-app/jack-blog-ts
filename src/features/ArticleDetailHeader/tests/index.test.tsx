import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ArticleDetailHeader } from "..";

it("render ArticleDetailHeader component", () => {
  render(<ArticleDetailHeader />);

  const heading = screen.getByRole("heading", {
    name: "Component",
  });

  expect(heading).toBeInTheDocument();
});
