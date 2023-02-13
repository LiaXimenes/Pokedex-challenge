import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonList from "./pages/PokemonList";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/pokemons" element={<PokemonList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
