import React from "react";
import styled from "styled-components";
import Page from "../../components/Page";
import TechIcon from "../../components/TechIcon";
import TechIconDatabase from "../../db/tech-icon.json";

const Main = styled.main`
  padding: 8px;
`;

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  background-color: #efefef;
`;

const Title = styled.h2`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: bold;
  margin: 12px 0px;
  margin-top: 24px;
  text-align: center;
  
  & small {
    color: #888;
    margin-top: 4px;
    font-size: 18px;
    font-weight: 400; 
  }
`;

const List = styled.ul`
  margin-left: 24px;
  list-style: disc;
  & > li {
    margin: 15px 10px;
  }
`;
const SubList = styled.ul`
  list-style: circle;
  & > li {
    margin: 10px 20px;
    font-size: 15px;
    color: #666;
  }
`;

const Divider = styled.div`
  height: 64px;
`;

const TechIndex = () => {
  return (
    <Page>
      <Main>
        <Title>
          웹 프론트엔드 개발
          <small>자신있습니다</small>
        </Title>
        <List>
          <li>
            2019년부터 <b>ES6+</b>를 시작했습니다.
          </li>
          <SubList>
            <li>Throttle, Debounce, Closure 개념을 이해하고 즉시 구현/설명할 수 있습니다.</li>
            <li>Proxy, FormData 클래스 활용 경험이 있습니다.</li>
          </SubList>
          <li>
            HMR, JSX, SASS을 위한 <b>Webpack 세팅 경험</b>이 있습니다.
          </li>
          <li>
            <b>React 프레임워크</b>를 자주 사용합니다.
          </li>
          <SubList>
            <li>
              useContext, useReducer, Recoil를 자주쓰고, redux와 redux-thunk 사용 경험도 있으나 자주
              쓰진 않습니다.
            </li>
            <li>Jest로 API 기능 테스트 코드를 작성하는 편입니다.</li>
          </SubList>
          <li>
            SEO를 위한 SSR 필요성을 이해하며 <b>NextJS</b> 사용 경험이 있습니다.
          </li>
          <li>
            <b>JWT</b>를 사용한 경험이 있으며, 탈취 위험성을 줄이기 위해 Active/Refresh 토큰을
            분리하여 관리한 적이 있습니다.
          </li>
          <li>NPM Publish 경험이 있습니다.</li>
          <li>CSS의 Flexbox를 자유롭게 다루며 자주 사용합니다.</li>
          <li>
            WebGL을 사용하는 PixiJS를 다루고 간단한 Vertex/Fragment Shader를 구현할 수 있습니다.
          </li>
        </List>
        <Grid>
          {TechIconDatabase.filter((each) => each.keywords.includes("frontend")).map(
            ({ title, icon, id }, index) => (
              <TechIcon key={index} id={id} icon={icon} title={title} />
            )
          )}
        </Grid>

        <Divider />

        <Title>
          웹 서버 개발
          <small>할 수 있습니다</small>
        </Title>
        <List>
          <li>
            2016년부터 <b>Ruby on rails</b>를 접했습니다.
          </li>
          <SubList>
            <li>2019년 소프트웨어마에스트로 과정에서 MVC프레임워크로 사용했습니다.</li>
            <li>2021년 인썸니아 회사에서 MVC프레임워크 및 API서버로 사용했습니다.</li>
          </SubList>
          <li>
            2019년부터 <b>Express</b>, <b>Flask</b>를 접했습니다.
          </li>
          <li>
            2021년부터 <b>NestJS</b>를 접했습니다.
          </li>
          <li>Join의 중요성을 알고 있습니다.</li>
          <li>다음과 같은 ORM 사용경험이 있습니다.</li>
          <SubList>
            <li>Ruby on rails ORM</li>
            <li>TypeORM과 NestJS</li>
            <li>Sequelizer과  Express</li>
          </SubList>
        </List>
        <Grid>
          {TechIconDatabase.filter((each) => each.keywords.includes("backend")).map(
            ({ title, icon, id }, index) => (
              <TechIcon key={index} id={id} icon={icon} title={title} />
            )
          )}
        </Grid>

        <Divider />

        <Title>
          Infra / DevOps
          <small>관심있습니다</small>
        </Title>
        <List>
          <li>2020년부터 <b>Docker</b>, <b>Kubernetes</b>를 접했습니다.</li>
          <SubList>
            <li>C/C++, Ruby, Java, Python 등 OnlineJudge(채점서버)를 구현한 적 있습니다.</li>
            <li>kubectl의 apply, describe, get, logs 명령을 주로 사용했습니다.</li>
            <li>Pod, Job, ReplicationController, LoadBalancer를 주로 사용했습니다.</li>
          </SubList>
          <li>5대의 컴퓨터에 CentOS를 설치하고, Kubernetes를 구축한 경험이 있습니다.</li>
          <li>방화벽, 고정IP, 포트포워딩 설정 경험이 있습니다.</li>
          <li>Nginx의 proxy-pass를 활용한 경험이 있습니다.</li>
          <li>AWS의 EC2, Route53 사용 경험이 있습니다.</li>
        </List>
        <Grid>
          {TechIconDatabase.filter((each) => each.keywords.includes("devops")).map(
            ({ title, icon, id }, index) => (
              <TechIcon key={index} id={id} icon={icon} title={title} />
            )
          )}
        </Grid>
      </Main>
    </Page>
  );
};

export default TechIndex;
