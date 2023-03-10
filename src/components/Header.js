import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/images/logo-pokedex.png";

export default function Header() {
  return (
    <Container>
      <Link to={"/"}>
        <img src={logo} alt="Logo" />
      </Link>
    </Container>
  );
}

const Container = styled.div`
  background: #e44141;
  text-align: center;
  padding: 10px 0;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
  width: 100%;
`;
