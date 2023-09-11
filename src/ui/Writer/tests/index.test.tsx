import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Writer } from "..";

it("render Writer component", () => {
  render(<Writer />);

  const heading = screen.getByRole("heading", {
    name: "Component",
  });

  expect(heading).toBeInTheDocument();
});
