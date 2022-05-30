import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Page from "../../components/Page";
import TechIcon from "../../components/TechIcon";
import TechIconDatabase from "../../db/tech-icon.json";

const Content = styled.main`
  padding: 8px;
`;

const Section = styled.section``

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
  margin: 30px 0px;
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
      <Head>
        <title>Tech Icons | 1000ship</title>
      </Head>
      <Content>
        <Section>
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
              SEO를 위한 SSR 필요성을 이해하며 <b>NextJS</b> 사용 경험이 있습니다.
            </li>
            <li>NPM에 직접 만든 모듈을 Publish한 경험이 있습니다.</li>
            <li>
              WebGL을 사용하는 PixiJS를 다루고 간단한 Vertex/Fragment Shader를 구현할 수 있습니다.
            </li>
            <li>최근에 저는 ...</li>
            <SubList>
              <li><b>NextJS</b>를 사용하여 작업합니다.</li>
              <li><b>React Query</b>, <b>Recoil</b>, <b>Axios</b>, <b>Tailwind CSS</b>, <b>Framer Motion</b>과 같은 모듈을 잘 활용하고 있습니다.</li>
              <li>Atomic 컴포넌트 디자인 패턴을 선호합니다.</li>
            </SubList>
          </List>
          <Grid>
            {TechIconDatabase.filter((each) => each.keywords.includes("frontend")).map(
              ({ title, icon, id }, index) => (
                <TechIcon key={index} id={id} icon={icon} title={title} />
              )
            )}
          </Grid>
        </Section>

        <Divider />

        <Section>
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
              2021년부터 <b>NestJS</b>, <b>Strapi</b>를 접했습니다.
            </li>
            <li>
              2022년부터 <b>Serverless</b>, <b>Spring Boot</b>, <b>Kotlin</b>를 접했습니다.
            </li>
            <li>최근에 저는</li>
            <SubList>
              <li>빠른 개발이 필요한 프로젝트에는 <b>Strapi</b>를 사용하고 있습니다!</li>
              <li>서비스 구조가 단순하다면 <b>Serverless</b>를 사용하고 있습니다!</li>
              <li>유지보수가 중요한 프로젝트일 시 <b>Spring Boot</b>, <b>Express</b>를 사용하고 있습니다!</li>
            </SubList>
            <li>아래와 같은 Microservice를 활용해본 적이 있습니다.</li>
            <SubList>
              <li>Redis (AWS ElastiCache)</li>
              <li>Message Queue (AWS SQS)</li>
            </SubList>
          </List>
          <Grid>
            {TechIconDatabase.filter((each) => each.keywords.includes("backend")).map(
              ({ title, icon, id }, index) => (
                <TechIcon key={index} id={id} icon={icon} title={title} />
              )
            )}
          </Grid>
        </Section>

        <Divider />

        <Section>
          <Title>
            Others
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
            <li>Nginx를 사용한 경험이 있습니다.</li>
            <li>AWS의 다양한 리소스를 활용하고 있습니다.</li>
            <SubList>
              <li>Amplify, Route53, VPC, EC2, S3, Lambda, Cognito, SNS 인썸니아 회사 근무 중 사용</li>
              <li>Amplify, S3, Lambda, DynamoDB, Mechanical Turk 네이버 AI Lab 근무 중 사용</li>
              <li>그외 ElastiCache(캐싱), ECR(도커 이미지 저장소), SQS(메시지 큐)</li>
            </SubList>
            <li>FFMPEG를 활용하여 GIF 병합, 영상처리 작업을 한 경험이 있습니다.</li>
            <SubList>
              <li>NFT 발행을 위한 민팅 작업</li>
            </SubList>
          </List>
          <Grid>
            {TechIconDatabase.filter((each) => each.keywords.includes("devops")).map(
              ({ title, icon, id }, index) => (
                <TechIcon key={index} id={id} icon={icon} title={title} />
              )
            )}
          </Grid>
        </Section>
      </Content>
    </Page>
  );
};

export default TechIndex;
