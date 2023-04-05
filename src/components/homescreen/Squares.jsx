import React from 'react'
import styled from 'styled-components'

export const Squares = () => {
  return (
    <BigSquare>
        <YellowCircle/>
        <HalfCircle/>   
    </BigSquare>
  )
}
const BigSquare = styled.div`
    width:12%;
    height:21%;
    background-color:#6DBACC;
    border-radius:20px;
    display:flex;
    align-items:flex-end;
    justify-content:center;
    position:absolute;  
    z-index:-1;
    left:58%;
    top:40%
`
const YellowCircle=styled.div`
    width:30%;
    height:30%;
    background-color:#FEFF77;
    border-radius:50px;
    margin-bottom:5%;
    margin-right:5%;
    
`
const HalfCircle = styled.div`
    width:30%;
    height:15%;
    background-color:#8AF8EF;
    border-top-left-radius:50px;
    border-top-right-radius:50px;
    margin-bottom:20%;


`