import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Header from "../components/Header";
import Pokemon from "../components/Pokemon";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState(null);

  function getPokemons(nextUrl) {
    let url = "";

    if (nextUrl) {
      url = nextUrl;
    } else {
      url = `${process.env.REACT_APP_API_BASE_URL}/pokemon?offset=0&limit=20`;
    }

    axios.get(url).then((response) => {
      setPokemons(response.data);
    });
  }

  useEffect(() => {
    getPokemons();
  }, []);

  console.log(pokemons);

  return (
    <>
      <Header></Header>

      <Container>
        {pokemons ? (
          pokemons.results.map((p) => <Pokemon pokemon={p} key={p.name} />)
        ) : (
          <p>Loading...</p>
        )}
      </Container>

      <Footer>
        <Button onClick={() => getPokemons(pokemons.previous)}>Previous</Button>
        <Button onClick={() => getPokemons(pokemons.next)}>Next</Button>
      </Footer>
    </>
  );
}

const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Footer = styled.div`
  background: #e44141;
  padding: 10px 0;
  box-shadow: 0 -4px 10px 5px rgba(0, 0, 0, 0.2);
  height: 65px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Button = styled.button`
  background: #e44141;
  :hover {
    cursor: pointer;
    color: #ffd523;
  }
`;
