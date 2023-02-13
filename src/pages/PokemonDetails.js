import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import styled from "styled-components";

import Header from "../components/Header";

export default function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  const [showAbilities, setShowAbilities] = useState(false);
  const [showTypes, setShowTypes] = useState(false);

  function toogleShowAbilities() {
    if (showAbilities === true) {
      setShowAbilities(false);
    } else {
      setShowAbilities(true);
    }
  }

  function toogleShowTypes() {
    if (showTypes === true) {
      setShowTypes(false);
    } else {
      setShowTypes(true);
    }
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/pokemon/${id}`)
      .then((response) => {
        setPokemon(response.data);
      });
  }, [id]);

  console.log(pokemon);

  return (
    <>
      <Header></Header>
      {pokemon ? (
        <Pokemon>
          <p className="name">Name: {pokemon.name}</p>
          <p className="order">Order: {pokemon.order}</p>
          <p className="weight">Weight: {pokemon.weight}</p>
          <p className="experience">Experience: {pokemon.base_experience}</p>
          <Collapse onClick={toogleShowAbilities}>
            {showAbilities ? (
              <>Abilities: {pokemon.abilities.length} (hide)</>
            ) : (
              <>Abilities: {pokemon.abilities.length} (show more)</>
            )}
            {showAbilities ? (
              pokemon.abilities.map((a) => (
                <p key={a.ability.name}>{a.ability.name}</p>
              ))
            ) : (
              <></>
            )}
          </Collapse>
          <Collapse onClick={toogleShowTypes}>
            {showTypes ? (
              <>Types: {pokemon.types.length} (hide)</>
            ) : (
              <>Types: {pokemon.types.length} (show more)</>
            )}
            {showTypes ? (
              pokemon.types.map((t) => <p key={t.type.name}>{t.type.name}</p>)
            ) : (
              <></>
            )}
          </Collapse>
        </Pokemon>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}

const Pokemon = styled.div`
  font-family: "Kanit", sans-serif;
  width: 80%;
  background: #fff;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  margin: auto;
  margin-top: 20px;

  p {
    padding: 10px 0 5px 10px;
  }
`;

const Collapse = styled.div`
  padding: 10px 0 5px 10px;
  :hover {
    cursor: pointer;
  }
`;
