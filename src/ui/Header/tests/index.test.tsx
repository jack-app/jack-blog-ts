import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from "..";

it("render Header component", () => {
  render(<Header />);

  const heading = screen.getByRole("heading", {
    name: "Component",
  });

  expect(heading).toBeInTheDocument();
});
