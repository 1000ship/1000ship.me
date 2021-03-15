import React from "react";
import styled, { css } from "styled-components";
import { rootApi } from "../utils/api";

const TechIconDir = `/tech-icons/original/`;
const TechIconList = [
  "javascript.png",
  "typescript.png",
  "styled-components.png",
  "jwt.svg",
  "react.png",
  "nextjs.png",
  "nodejs.png",
  "nestjs.png",
  "python.png",
  "flask.png",
  "ruby.png",
  "rails.png",
  "aws.png",
  "framework7.png",
  "docker.png",
  "k8s.png",
  "air.png",
  "flash.png",
  "android.png",
  "java.png",
  "ios.png",
  "swift.png",
  "php.png",
  "html.png",
  "css.png",
  "bootstrap.png",
  "tailwind.svg"
];
const IconsSupportingDarkMode = ["ios", "aws", "flask"];

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

const TechIcon = styled.div`
  margin: 8px;
  width: 55px;
  height: 55px;
  background-image: url(${({ icon }) => css`${TechIconDir}${icon}`});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  transition: 0.5s;
  &:hover {
    transform: scale(1.2);
    & > div {
      opacity: 1;
    }
  }
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    user-select: none;
    opacity: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.8);
    transition: 0.5s;
    font-size: 12px;
    font-weight: bold;
    margin: auto auto;
  }
`;

export default (props) => {
  return (
    <Container>
      <Title className="partial-title">🛠 저는 이런 기술을 사용해본 경험이 있어요.</Title>
      <Grid>
        {TechIconList.map((iconName, index) => {
          return (
            <TechIcon key={index} icon={iconName} iconDark={IconsSupportingDarkMode.includes(iconName) ? `${iconName}-dark` : iconName}>
              <div>{iconName.split(".")[0]}</div>
            </TechIcon>
          );
        })}
      </Grid>
    </Container>
  );
};
