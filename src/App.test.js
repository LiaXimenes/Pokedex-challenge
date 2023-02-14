import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Pokedex Logo", () => {
  render(<App />);
  const linkElement = screen.getByAltText("Logo");
  expect(linkElement).toBeInTheDocument();
});
