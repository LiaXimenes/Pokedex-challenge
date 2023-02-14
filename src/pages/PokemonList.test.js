import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PokemonList from "./PokemonList";

describe("Pokemon List page", () => {
  it("Display Logo and Next button on screen", async () => {
    render(
      <MemoryRouter>
        <PokemonList />
      </MemoryRouter>
    );

    const linkElement = screen.getByAltText("Logo");
    expect(linkElement).toBeInTheDocument();

    const nextButton = screen.getByText("Next");
    expect(nextButton).toBeInTheDocument();
  });
});
