import React, { useState } from "react";
import styled from "styled-components";
import { Squares } from "./Squares";
import { HowWorks } from "./HowWorks";

export const Home = () => {
  const [visible,setVisible] =useState(false)
  return (
    <>    <Container>
      <Title>I THINK YOUR BUSINESS FIND SEO SOLUTION...</Title>
      <Squares />
      <Para>
        We create a customized approach for businesses in various industries
        wich maximize customer satisfaction,
      </Para>
      <ButtContainer>
        <All>SEE OUR ALL SERVICE</All>
        <How onClick={()=> setVisible(true)}>HOW IT WORKS</How>
      </ButtContainer>

    </Container>
    {visible?<HowWorks/>:null}
    </>
  );
};
const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  margin-top:5%;
`;
const Title = styled.h1`
  font-size: 3.5rem;
  width: 40%;
  font-weight: 800;
  text-align: center;
  margin-bottom:0;
`;
const Para = styled.p`
  width:20%;
  text-align:left;
  margin-right:5%;  
  font-size:1.1rem;
  margin-top:1%;
`;
const ButtContainer = styled.div`
display:flex;
flex-direction:space-between;
width:25%

`
const All = styled.button`
  font-size:1rem;
  background-color:#FEFF77;
  padding: 2% 3% 2% 3%;
  margin-right:2%;
  border-radius:15px;
  border:none;
  cursor:pointer;
  font-weight:800;
`
const How = styled.button`
  font-size:.8rem;
  background-color:#F1D6BF;
  border:none;
  cursor:pointer;
  font-weight:800;
`