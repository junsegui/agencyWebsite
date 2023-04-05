import {
  faChartLine,
  faGlasses,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

export const HowWorks = () => {
  return (
    <>
      <Container>
        <FirstSquare>
          <Para>SEO CONSULTANCY</Para>
          <Icon icon={faGlasses} />
          <Text>
            From they fine john give of rich he, they age and draw mrs like,
            improving and detrust may instantlu
          </Text>
        </FirstSquare>
        <SecondSquare>
          <Para>COMPETITOR ANALYSIS</Para>
          <Icon icon={faMobile} />
          <Text>
            His defective for convinced residenceown, connectoin has put
            impossibleown apartments
          </Text>
        </SecondSquare>
        <ThirdSquare>
          <Para>SOCIAL MARKETING</Para>
          <Icon icon={faChartLine} />
          <Text>
            His defective for convinced residenceown, connectoin has put
            impossibleown apartments
          </Text>
        </ThirdSquare>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FirstSquare = styled.div`
  width: 18%;
  height: auto;
  background-color: #feff77;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1%;
  margin-right: 1%;
`;
const Para = styled.p`
  font-size: 1.2rem;
  padding-bottom: 10%;
  font-weight: 800;
  padding-top: 5%;
  width: 65%;
`;
const Text = styled.p`
  width: 80%;
  padding-bottom: 10%;
  padding-top: 10%;
`;
const Icon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  padding-bottom: 10%;
  padding-top: 10%;
`;
const SecondSquare = styled.div`
  background-color: #b27e6f;
  width: 18%;
  height: auto;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1%;
  margin-right: 1%;
`;
const ThirdSquare = styled.div`
  background-color: #9ac385;
  width: 18%;
  height: auto;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1%;
`;
