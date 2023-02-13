import styled from "styled-components";

export default function PokemonBox(props) {
  const { pokemon } = props;

  return (
    <Pokemon>
      <p className="name">{pokemon.name}</p>
    </Pokemon>
  );
}

const Pokemon = styled.button`
  width: 130px;
  height: 130px;
  background: #fff;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;

  :hover {
    cursor: pointer;
    box-shadow: 0 0 10px 5px #ffd523;
  }
`;
