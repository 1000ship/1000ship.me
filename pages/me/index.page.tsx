import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Page from "../../components/Page";

const Description = styled.p`
  margin-top: 50px;
  text-align: center;
  font-size: smaller;
  line-height: 1.5;
  color: #999;
`;

const Content = styled.main`
  padding: 16px;

  & h2 {
    font-size: large;
    font-weight: 700;
    margin: 8px 0px;
  }
  & ul {
    list-style: disc;
    & > li {
    }
  }

  & a {
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 4px;
    &:hover {
      background-color: #eee;
    }
  }
`;

const GitContributionChart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  padding: 8px;

  & > h2 {
    margin-top: 16px;
    margin-left: 8px;
    font-weight: medium;
    font-size: 16px;
    & > a {
      display: flex;
      align-items: center;
      font-weight: 500;
      padding: 4px 8px;
      border-radius: 4px;
      & > span {
        margin-left: 4px;
      }
      &:hover {
        background-color: #eee;
      }
    }
  }
  & > div {
    margin-bottom: 16px;
    max-width: 100vw;
    overflow-x: scroll;
    overflow-y: hidden;
    & > img {
      margin: 16px;
    }
  }
`;

const Section = styled.section`
  margin: 32px 0px;
`;

const List = styled.ul`
  margin-left: 24px;
  list-style: disc;
  & > li {
    margin: 8px;
    color: #333;
    font-weight: lighter;

    & i {
      font-style: italic;
      color: #888;
    }
    & b {
      font-weight: 500;
      color: black;
    }
  }
`;
const SubList = styled.ul`
  margin-left: 24px;
  list-style: circle;
  & > li {
    margin: 8px;
    color: #555;
    font-weight: lighter;
  }
`;

const URL = {
  LoFi: "https://music.youtube.com/playlist?list=PLHoqbVn8h6ipHj4GpEjT7gJlULGup_wDT",
  Jazz: "https://music.youtube.com/playlist?list=PLHoqbVn8h6iqeo3oPVLK_2_RZCgY5kAxt",
};

const MeIndexPage: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Me | 1000ship</title>
      </Head>
      <GitContributionChart>
        <h2>
          <a
            href="https://github.com/1000ship"
            target="_blank"
            dangerouslySetInnerHTML={{
              __html: `   
              <ion-icon name="logo-github" />
              <span>1000ship</span>
            `,
            }}
          ></a>
        </h2>
        <div>
          <img
            src="https://ghchart.rshah.org/1000ship"
            alt="1000ship's Github Contribution Chart"
          />
        </div>
      </GitContributionChart>
      <Content>
        <Section>
          <h2>놀랍게도 저는 프로그래밍'만' 좋아하진 않아요.</h2>
          <List>
            <li>
              <b>칵테일, 위스키</b>를 아주 좋아합니다. 동아리 활동은 물론,
              조주기능사 자격증도 취득했답니다.
            </li>
            <li>
              <b>여행</b> 다니는 것을 좋아해요. 세상은 넓고, 구경할 것은 아주
              많아요.
            </li>
          </List>
        </Section>

        <Section>
          <h2>저는 이런 음악을 좋아해요.</h2>
          <List>
            <li>
              <a href={URL.LoFi} target="_blank">
                Lo-Fi
              </a>
            </li>
            <li>
              <a href={URL.Jazz} target="_blank">
                Jazz
              </a>
            </li>
          </List>
        </Section>

        <Section>
          <h2>저는 디지털노마드 생활 중이에요.</h2>
          <List>
            <li>
              <b>🇺🇸 Austin, Texas | St. Bonifacius, Minnesota</b>{" "}
              <i>— 2021.10-2022.01</i>
            </li>
          </List>
          <br />
          <p>그리고 여러 여행을 다닌 적 있어요.</p>
          <br />
          <iframe
            width="100%"
            height={500}
            style={{ backgroundColor: "#f9f9f9" }}
            src="https://nomadlist.com/@dantechun/embed"
            scrolling="no"
            frameBorder={0}
            allowFullScreen
          ></iframe>
        </Section>
      </Content>

      <Description>
        찾아와주셔서 감사합니다!
        <br />
        여러분 주변 친구, 지인들처럼 한 명의 사람으로서 저를 소개합니다.
        <br />
        계속해서 페이지 내용을 업데이트할 예정입니다!
      </Description>
    </Page>
  );
};

export default MeIndexPage;
