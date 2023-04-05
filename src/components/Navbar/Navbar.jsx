import React from "react";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <StyledContainer>
      <Sseo>SSEO</Sseo>
      <Nav>
        <Link>HOME</Link>
        <Link>ABOUT</Link>
        <Link>CATEGORIES</Link>
        <Link>PRICING</Link>
      </Nav>
      <Contact>CONTACT US</Contact>
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
  font-size: 1.2rem;
  width: auto;
`;
const Nav = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  margin-right:0%;
  flex-direction: row;
  background-color: #ffffff;
  justify-content: space-around;
  margin-left:10%;
  border-radius: 25px;
`;
const Link = styled.p``;
const Contact = styled.button`
  width:auto;
  background-color:#FEFF77;
  margin-left:5%;
  padding:.8% 1% .8% 1%;
  border-radius:15px;
  border:none;
  cursor:pointer;
`
