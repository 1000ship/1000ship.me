import React from "react";
import styled, { css } from "styled-components";
import TechIcon from "../components/TechIcon";
import TechIconDatabase from "../db/tech-icon.json"

const Container = styled.div`
  margin: 24px 0px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 8px 16px;
`;

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const HomeTech = (props) => {
  return (
    <Container>
      <Title className="partial-title">π  μ λ μ΄λ° κΈ°μ μ μ¬μ©ν΄λ³Έ κ²½νμ΄ μμ΄μ.</Title>
      <Grid>
        {TechIconDatabase.map(({icon, title, id}, index) => {
          return (
            <TechIcon key={index} id={id} icon={icon} title={title}/>
          );
        })}
      </Grid>
    </Container>
  );
};

export default HomeTech
