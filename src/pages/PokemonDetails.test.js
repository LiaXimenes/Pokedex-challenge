import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PokemonDetails from "./PokemonDetails";
import axios from "axios";

jest.mock("axios");

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "1",
  }),
  useRouteMatch: () => ({ url: "/details/1" }),
}));

describe("Details page test", () => {
  it("Call details function", async () => {
    axios.get.mockResolvedValue({});

    render(
      <MemoryRouter initialEntries={["/details/1"]}>
        <PokemonDetails path="/details/:id" />
      </MemoryRouter>
    );
    expect(axios.get).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_BASE_URL}/pokemon/1`
    );
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
