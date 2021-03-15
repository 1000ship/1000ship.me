import Head from "next/head";
import { useCallback } from "react";
import styled from "styled-components";
import HomeTech from "./_index_tech"

const Container = styled.div`
  width: 100vw;
  max-width: 1024px;
  height: 100vh;
  margin: 0px auto;
`;

const ProfileContainer = styled.div`
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
      font-size: medium;
      font-weight: 500;
    }
  }
  & p {
    width: 80%;
    font-size: medium;
    font-weight: lighter;
    text-align: center;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .10);
    padding: 16px;
    border-radius: 5px;
  }
  & ul {
    list-style: disc;
  }
`;

function Home() {
  const names = ["1000ship", "천성혁", "千成赫"];
  const profileImageRef = useCallback(el => {
    if( !el ) return
    let scrollY = 0
    const scrollAnimate = () => {
      const dy = (el.scrollHeight - el.offsetHeight - scrollY) * 0.005;
      scrollY += dy
      el.scrollTo(0, scrollY)
      if( el.scrollHeight - el.offsetHeight >= scrollY + 1 )
        requestAnimationFrame(scrollAnimate)  
    }
    requestAnimationFrame(scrollAnimate)
  })

  return (
    <Container>
      <Head>
        <title>1000ship</title>
        <link rel="icon" href="/favicons/favicon.png" />
      </Head>

      <main>
        <ProfileContainer>
          <ProfileLeft ref={profileImageRef}>
            <ProfileImage src="/img/profile.jpg" />
          </ProfileLeft>
          <ProfileRight>
            <div className="horizontal">
              <h1>천성혁 <span>@1000ship</span></h1>
            </div>
            <p>
              Keep learning, developing, refactoring
              <br/>Until to be zero dependencies.
            </p>
            <ul>
              <li>한국디지털미디어고등학교 웹프로그래밍 전공</li>
              <li>홍익대학교 컴퓨터공학 전공</li>
              <li>2016 멋쟁이사자처럼 4기</li>
              <li>2019 소프트웨어마에스트로 10기 연수</li>
              <li>2020 홍익대 컴퓨터공학과 학생회</li>
              <li>2021 인썸니아 React, Rails 개발자</li>
            </ul>
          </ProfileRight>
        </ProfileContainer>
        <HomeTech/>
      </main>
    </Container>
  );
}

export default Home;
