import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SearchTags } from "..";

it("render SearchTags component", () => {
  render(<SearchTags />);

  const heading = screen.getByRole("heading", {
    name: "Component",
  });

  expect(heading).toBeInTheDocument();
});
