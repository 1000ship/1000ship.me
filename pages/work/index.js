import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Page from "../../components/Page";
import WorkDatabase from "../../db/work.json";

const Section = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  & > * {
    cursor: pointer;
    margin: 8px;
    flex: 1 0 300px;
  }
`;
const Article = styled.article``;

const WorkIndex = () => {
  return (
    <Page>
      <Section>
      {WorkDatabase.map(
        ({
          id,
          linkHref,
          imageName,
          supportVideo,
          videoName,
          title,
          description,
          createdYear,
          tags,
          techIcons,
        }, index) => (
          <Link href={`/work/${id}`} key={index}>
            <Article>
              <img src={`/img/workspace/${imageName}`}/>
              <h2>{title}</h2>
              <p>{description}</p>
              <small>{createdYear}</small>
            </Article>
          </Link>
        )
      )}
      </Section>
    </Page>
  );
};

export default WorkIndex;
