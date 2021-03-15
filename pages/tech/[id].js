import React, { useEffect, useState } from "react";
import Page from "../../components/Page";
import TechIconDatabase from "../../db/tech-icon.json";
import styled from "styled-components";
import WorkDatabase from "../../db/work.json";
import Work from "../../components/Work";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  & > * {
    margin: 8px 0px;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-top: 32px;
`;

const Description = styled.p``;

const WorkGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  & > article {
    width: 250px;
    margin: 4px;
  }
`;

const TechShow = ({ techIcon }) => {
  return (
    <Page>
      <Head>
        <title>{techIcon?.title} | 1000ship</title>
      </Head>
      <Content>
        <img
          src={`/tech-icons/original/${techIcon?.icon}`}
          alt={techIcon?.title}
          style={{ width: 200, height: 200, objectFit: "contain" }}
        />
        <Title>{techIcon?.title}</Title>
        <Description>{techIcon?.description}</Description>

        <SubTitle>관련된 작품</SubTitle>
        <WorkGroup>
          {WorkDatabase.filter((each) => each.techIcons.includes(techIcon.id)).map((work) => (
            <Work key={work.id} data={work} />
          ))}
        </WorkGroup>
      </Content>
    </Page>
  );
};

export default TechShow;

export async function getStaticPaths() {
  return {
    paths: TechIconDatabase.map(({ id }) => ({ params: { id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const techIcon = TechIconDatabase.find((each) => each.id === id);
  return { props: { techIcon } };
}
