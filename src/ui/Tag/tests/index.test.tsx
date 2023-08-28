import "@testing-library/jest-dom";
import { Tag } from "..";
import { waitFor, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Tag", () => {
  test("Tagに渡したnameが表示されるか", async () => {
    render(<Tag name="Tag" color="default" />);

    expect(screen.getByText("Tag")).toBeInTheDocument();
  });

  test("TagにisButtonを渡した場合、button要素が正常に働くか", async () => {
    const handleClick = jest.fn();
    render(<Tag name="Tag" color="default" isButton handleClick={handleClick} />);

    expect(screen.getByRole("button")).toBeInTheDocument();

    userEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
