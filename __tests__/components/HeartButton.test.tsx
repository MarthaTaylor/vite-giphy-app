import { render, screen, fireEvent } from "@testing-library/react";
import HeartButton from '../../src/components/HeartButton';
import { describe, it, expect, vi } from "vitest";

// isSaved is true, the button displays the red heart ❤️
describe("HeartButton Component", () => {
  it("renders correctly with isSaved = true", () => {
    render(<HeartButton isSaved={true} onClick={() => {}} />);

    expect(screen.getByRole("button", { name: /remove from favorites/i })).toHaveTextContent("❤️");
  });

  // verifies that clicking the button correctly calls the onClick function
  it("triggers onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<HeartButton isSaved={false} onClick={handleClick} />);

    const button = screen.getByRole("button", { name: /add to favorites/i });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
