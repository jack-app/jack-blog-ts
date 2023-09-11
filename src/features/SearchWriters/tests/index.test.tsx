import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SearchWriters } from "..";

it("render SearchWriters component", () => {
  render(<SearchWriters />);

  const heading = screen.getByRole("heading", {
    name: "Component",
  });

  expect(heading).toBeInTheDocument();
});
