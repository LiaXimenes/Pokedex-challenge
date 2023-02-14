import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Pokemon from "./Pokemon";

describe("Pokemon element", () => {
  it("Display pokemon on screen", async () => {
    const pokemon = {
      name: "pikachu",
    };
    render(
      <MemoryRouter>
        <Pokemon pokemon={pokemon} />
      </MemoryRouter>
    );

    const button = await screen.findByRole("button");
    expect(button).toBeInTheDocument();
  });
});
