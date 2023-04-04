import React from "react";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <StyledContainer>
      <Sseo>SSEO</Sseo>
      <Nav>
        <Link>hola</Link>
        <Link>hola</Link>
        <Link>hola</Link>
      </Nav>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Sseo = styled.p`
  font-weight: 800;
  font-size: 1.5rem;
  width: 20%;
`;
const Nav = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  justify-content: space-around;
  border-radius: 25px;
`;
const Link = styled.p``;
