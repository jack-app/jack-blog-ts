import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Footer } from "..";

it("render Footer component", () => {
  render(<Footer />);

  const heading = screen.getByRole("heading", {
    name: "Component",
  });

  expect(heading).toBeInTheDocument();
});
