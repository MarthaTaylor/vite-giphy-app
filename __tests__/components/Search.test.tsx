import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../../src/components/Search";
import { describe, it, expect, vi } from "vitest";

describe("Search Component", () => {

  // ensures the search input + button render correctly
  it("renders the input and search button", () => {
    render(<Search onSearch={() => {}} />);

    expect(screen.getByRole("searchbox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /search gifs/i })).toBeInTheDocument();
  });

  // verifies that clicking the search button triggers onSearch with a trimmed query
  it("calls onSearch with trimmed input when the button is clicked", () => {
    const mockOnSearch = vi.fn();
    render(<Search onSearch={mockOnSearch} />);

    const input = screen.getByRole("searchbox");
    const button = screen.getByRole("button", { name: /search gifs/i });

    fireEvent.change(input, { target: { value: "  cat gifs  " } });
    fireEvent.click(button);

    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith("cat gifs");
  });
});
