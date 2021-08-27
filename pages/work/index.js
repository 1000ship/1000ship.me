import Head from "next/head";
import React, { useCallback } from "react";
import styled from "styled-components";
import Page from "../../components/Page";
import Work from "../../components/Work";
import WorkDatabase from "../../db/work.json";

const Section = styled.section`
  margin: 40px 0px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-left: 16px;
`

const Split = styled.div`
  border-top: 1px solid #ddd;
  margin-top: 8px;
`

const WorkGrid = styled.div`
  display: grid;
  padding: 32px;
  grid-gap: 16px;
  grid-template-columns: repeat(1, minmax(300px, 1fr));
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    padding: 16px;
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }
`

const WorkIndex = () => {

  const uniqueArrays = useCallback((strArr) => {
    const unique = [];
    for (let i = 0; i < strArr.length; i++) {
      if (unique.indexOf(strArr[i]) === -1) {
        unique.push(strArr[i]);
      }
    }
    return unique;
  },[]);

  const yearSections = uniqueArrays(WorkDatabase.map(work => work.createdYear))

  return (
    <Page>
      <Head>
        <title>Work | 1000ship</title>
      </Head>
      {yearSections.map((year) => 
        <Section key={year}>
          <SectionTitle>{year}</SectionTitle>
          <Split/>
          <WorkGrid>
            {WorkDatabase.filter(work => work.createdYear === year).map((work) => (
              <Work key={work.id} data={work} />
            ))}
          </WorkGrid>
        </Section>
      )}
    </Page>
  );
};

export default WorkIndex;
