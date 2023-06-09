import React from "react";
import styled from "styled-components";

export const Layout = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

const StyledLayout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
