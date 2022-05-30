import React from "react";
import Page from "../../components/Page";
import WorkDatabase from "../../db/work.json";
import TechIconDatabase from "../../db/tech-icon.json";
import TechIcon from "../../components/TechIcon";
import styled from "styled-components";
import Head from "next/head"

const Content = styled.section`
  padding: 8px;
  height: 70vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  & > img {
    width: 300px;
    height: 300px;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    @media (min-width: 600px) {
      margin-right: 16px;
    }
  }
  & > div {
    margin: 0px 8px;
    flex: 1 0 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > * {
      margin: 4px 0px;
    }
    & > h1 {
      font-size: 24px;
      font-weight: bold;
    }
    & > p {
      color: #333;
    }
    & > small {
      color: #666;
    }
    & > a {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      width: 150px;
      height: 30px;
      padding: 4px;
      border-radius: 4px;
      background-color: #efefef;
      transition: 0.3s;
      &:hover {
        background-color: #dedede;
      }
    }
  }
`;

const TagGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
const Tag = styled.div`
  margin: 0px 4px;
  padding: 3px 6px;
  border: 1px solid black;
  border-radius: 4px;
`;

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Spacer = styled.div`
  flex: 1;
`

const WorkShow = ({work}) => {
  const {
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
  } = work || {};

  return (
    <Page>
      <Head>
        <title>{work?.title} | 1000ship</title>
      </Head>
      <Content>
        <img src={`/img/workspace/${imageName}`} />
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <small>{createdYear}</small>
          <TagGroup>
            {tags?.map((tag) => (
              <Tag>{tag}</Tag>
            ))}
          </TagGroup>
          <Spacer />
          <a href={linkHref} target="_blank">자세히보기</a>
          <Grid>
            {techIcons
              ?.map((each) => TechIconDatabase.find((techIcon) => techIcon.id === each))
              ?.filter(each => !!each)
              ?.map(({ title, icon, id }) => (
                <TechIcon key={id} id={id} title={title} icon={icon} size={40}/>
              ))}
          </Grid>
        </div>
      </Content>
    </Page>
  );
};

export default WorkShow;

export async function getStaticPaths() {
  return {
    paths: WorkDatabase.map(({id}) => ({ params: { id } })),
    fallback: false,
  }
}

export async function getStaticProps({ params: {id} }) {
  const work = WorkDatabase.find((each) => each.id === id);
  return { props: {work} }
}
