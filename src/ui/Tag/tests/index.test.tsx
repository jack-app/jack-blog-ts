import "@testing-library/jest-dom";
import { Tag } from "..";
import { render, screen } from "@testing-library/react";

describe("Tag", () => {
  test("Tagに渡したnameが表示されるか", async () => {
    render(<Tag name="Tag" color="default" />);

    expect(screen.getByText("Tag")).toBeInTheDocument();
  });

  test("TagにisButtonを渡した場合、link要素が正常に働くか", async () => {
    render(<Tag name="Tag" color="default" isLink />);

    expect(screen.getByRole("link", { name: "Tag" })).toBeInTheDocument();
  });
});
