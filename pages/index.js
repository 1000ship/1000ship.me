import Head from "next/head";
import { useCallback } from "react";
import styled from "styled-components";
import Page from "../components/Page";
import HomeTech from "./_index_tech";

const ProfileContainer = styled.main`
  display: flex;
  flex-flow: row wrap;
`;
const ProfileLeft = styled.div`
  flex: 1 0 400px;
  height: 400px;
  overflow: hidden;
`;
const ProfileImage = styled.img`
  width: 100%;
`;
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

function Home() {
  const profileImageRef = useCallback((el) => {
    if (!el) return;
    const totalY = el.scrollHeight - el.offsetHeight;
    let scrollY = 0;
    let targetY = totalY;
    const scrollAnimate = () => {
      scrollY += (targetY - scrollY) * 0.01;
      el.scrollTo(0, scrollY);
      requestAnimationFrame(scrollAnimate);
    };
    requestAnimationFrame(scrollAnimate)
    el.querySelector("img").onload = () => requestAnimationFrame(scrollAnimate);
  });

  return (
    <Page>
      <Head>
        <title>Software Developer 1000ship</title>
      </Head>
      <ProfileContainer>
        <ProfileLeft ref={profileImageRef}>
          <ProfileImage src="/img/profile.jpg" />
        </ProfileLeft>
        <ProfileRight>
          <div className="horizontal">
            <h1>
              천성혁 <span>Dante</span>
            </h1>
          </div>
          <p>
            Keep learning, developing, refactoring
            <br />
            Until to be zero dependencies.
          </p>
          <ul>
            <li><b>한국디지털미디어고등학교 웹프로그래밍</b> 졸업 <i>— 2012-2015</i></li>
            <li><b>홍익대학교 컴퓨터공학</b> 조기졸업 <i>— 2016-2021</i></li>
            <li><b>멋쟁이사자처럼</b> 4기 <i>— 2016</i></li>
            <li><b>소프트웨어마에스트로</b> 10기 <i>— 2019</i></li>
            <li><b>홍익대 컴퓨터공학과 학생회</b> <i>— 2020</i></li>
            <li><b>인썸니아</b> 프리랜서 <i>— 2020.12-2021.09</i></li>
            <li><b>Naver AI Lab</b> 프리랜서 <i>— 2021.08-Present</i></li>
            <li><a href="https://dante.company" target="_blank"><b>Dante Company</b></a> 대표 <i>— 2021.10-Present</i></li>
          </ul>
        </ProfileRight>
      </ProfileContainer>
      <HomeTech />
    </Page>
  );
}

export default Home;
