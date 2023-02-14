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

  function toggleShowAbilities() {
    if (showAbilities === true) {
      setShowAbilities(false);
    } else {
      setShowAbilities(true);
    }
  }

  function toggleShowTypes() {
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

  return (
    <>
      <Header></Header>
      {pokemon ? (
        <Pokemon>
          <div>
            <p className="name">Name: {pokemon.name}</p>
            <p className="order">Order: {pokemon.order}</p>
            <p className="weight">Weight: {pokemon.weight}</p>
            <p className="experience">Experience: {pokemon.base_experience}</p>
            <Collapse onClick={toggleShowAbilities}>
              {showAbilities ? (
                <>Abilities: {pokemon.abilities.length} (hide)</>
              ) : (
                <>Abilities: {pokemon.abilities.length} (show)</>
              )}
              {showAbilities ? (
                pokemon.abilities.map((a) => (
                  <p key={a.ability.name}>{a.ability.name}</p>
                ))
              ) : (
                <></>
              )}
            </Collapse>
            <Collapse onClick={toggleShowTypes}>
              {showTypes ? (
                <>Types: {pokemon.types.length} (hide)</>
              ) : (
                <>Types: {pokemon.types.length} (show)</>
              )}
              {showTypes ? (
                pokemon.types.map((t) => <p key={t.type.name}>{t.type.name}</p>)
              ) : (
                <></>
              )}
            </Collapse>
          </div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
          <img src={pokemon.sprites.back_default} alt={pokemon.name}></img>
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

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  img {
    height: 30%;
    width: 30%;
  }
`;

const Collapse = styled.div`
  padding: 10px 0 5px 10px;
  width: 150px;
  :hover {
    cursor: pointer;
  }
`;
