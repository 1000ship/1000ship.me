import React, { useEffect, useState } from "react";
import Page from "../../components/Page";
import TechIconDatabase from "../../db/tech-icon.json";
import styled from "styled-components";
import WorkDatabase from "../../db/work.json";
import Work from "../../components/Work";
import Head from "next/head";

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

const Description = styled.p`
  color: #333;
`;

const WorkGroup = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
  & > article {
    width: 250px;
    margin: 8px;
  }
`;

const TechShow = ({ techIcon }) => {
  const relativeWorks = WorkDatabase.filter((each) => each.techIcons.includes(techIcon.id));

  return (
    <Page>
      <Head>
        <title>{techIcon?.title} | 1000ship</title>
      </Head>
      <Content>
        <img
          src={`/tech-icons/original/${techIcon?.icon}`}
          alt={techIcon?.title}
          style={{ width: 150, height: 150, objectFit: "contain" }}
        />
        <Title>{techIcon?.title}</Title>
        <Description>{techIcon?.description}</Description>

        {relativeWorks.length > 0 && (
          <>
            <SubTitle>관련된 작품</SubTitle>
            <WorkGroup>
              {relativeWorks.map((work) => (
                <Work key={work.id} data={work} />
              ))}
            </WorkGroup>
          </>
        )}
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
