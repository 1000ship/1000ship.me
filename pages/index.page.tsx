import { NextPage } from "next";
import Head from "next/head";
import { RefCallback, useCallback } from "react";
import styled from "styled-components";
import Page from "../components/Page";
import HomeTech from "./HomeTech";
import { motion } from "framer-motion";

const ProfileContainer = styled.main`
  display: flex;
  flex-flow: row wrap;
`;
const ProfileLeft = styled.div`
  flex: 1 0 400px;
  height: 400px;
  overflow: hidden;
`;

const ProfileImage = motion(styled.img`
  width: 100%;
`);
const ProfileRight = styled.div`
  flex: 1 0 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > * {
    margin: 16px;
    line-height: 1.2;
  }
  & .horizontal {
    display: flex;
  }
  & h1 {
    text-align: center;
    font-size: xx-large;
    font-weight: 700;
    & span {
      font-size: large;
      font-weight: 500;
    }
  }
  & p {
    width: 80%;
    font-size: medium;
    font-weight: lighter;
    text-align: center;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    padding: 16px;
    border-radius: 5px;
  }
  & ul {
    padding: 16px;
    list-style: disc;
    & > li {
      margin: 4px;
      color: #333;
      font-weight: lighter;
      & > i {
        font-style: italic;
        color: #888;
      }
      & > b {
        font-weight: 500;
        color: black;
      }
    }
  }
`;

const HomePage: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Software Developer 1000ship</title>
      </Head>
      <ProfileContainer>
        <ProfileLeft>
          <ProfileImage
            src="/img/profile.jpg"
            initial={{ y: 0 }}
            whileInView={{ y: -250 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </ProfileLeft>
        <ProfileRight>
          <div className="horizontal">
            <h1>
              천성혁 <span>Dante Chun</span>
            </h1>
          </div>
          <p>
            Keep learning, developing, refactoring
            <br />
            Until to be zero dependencies.
          </p>
          <ul>
            <li>
              <b>한국디지털미디어고등학교 웹프로그래밍</b> 졸업{" "}
              <i>— 2012-2015</i>
            </li>
            <li>
              <b>홍익대학교 컴퓨터공학</b> 조기졸업 <i>— 2016-2021</i>
            </li>
            <li>
              <b>멋쟁이사자처럼</b> 4기 <i>— 2016</i>
            </li>
            <li>
              <b>소프트웨어마에스트로</b> 10기 <i>— 2019</i>
            </li>
            <li>
              <b>인썸니아</b> 프리랜서 <i>— 2020.12-2021.09</i>
            </li>
            <li>
              <b>Naver AI Lab</b> 프리랜서 <i>— 2021.08-2021.11</i>
            </li>
            <li>
              <a href="https://dante.company" target="_blank">
                <b>Dante Company</b>
              </a>{" "}
              대표 <i>— 2021.10-Present</i>
            </li>
          </ul>
        </ProfileRight>
      </ProfileContainer>
      <HomeTech />
    </Page>
  );
};

export default HomePage;
