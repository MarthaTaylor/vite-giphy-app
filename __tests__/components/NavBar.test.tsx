import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../../src/components/NavBar";
import { describe, it, expect } from "vitest";

// ensures that both navlinks Trending GIFs + Saved GIFs are present
describe("NavBar Component", () => {
  it("renders navigation links correctly", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    expect(screen.getByRole("link", { name: /trending gifs/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /saved gifs/i })).toBeInTheDocument();
  });

  // verifies that the links point to the correct paths (/ for Trending and /saved for Saved GIFs)
  it("links have correct href attributes", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    expect(screen.getByRole("link", { name: /trending gifs/i })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: /saved gifs/i })).toHaveAttribute("href", "/saved");
  });
});
