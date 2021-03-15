import React from "react";
import styled from "styled-components";
import Page from "../../components/Page";
import Work from "../../components/Work";
import WorkDatabase from "../../db/work.json";

const Section = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  & > * {
    flex: 1 0 300px;
    margin: 8px;
  }
`;

const WorkIndex = () => {
  return (
    <Page>
      <Section>
        {WorkDatabase.map((work) => (
          <Work key={work.id} data={work} />
        ))}
      </Section>
    </Page>
  );
};

export default WorkIndex;
