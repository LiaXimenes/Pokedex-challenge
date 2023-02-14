import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import PokemonDetails from "./pages/PokemonDetails";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/details/:id" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
