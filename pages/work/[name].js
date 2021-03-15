import React from "react";
import { useRouter } from "next/router";
import Page from "../../components/Page";
import WorkDatabase from "../../db/work.json";
import TechIconDatabase from "../../db/tech-icon.json";
import TechIcon from "../../components/TechIcon";
import styled from "styled-components";

const Content = styled.section`
  height: 70vh;
  display: flex;
  flex-flow: row wrap;
  & > img {
    flex: 1 0 200px;
    margin-right: 16px;
    border-radius: 8px;
    object-fit: contain;
  }
  & > div {
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

const WorkShow = () => {
  const router = useRouter();
  const { name } = router.query;
  const work = WorkDatabase.find((each) => each.id === name);
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
          <a href={linkHref} target="_blank">자세히보기</a>
          <Grid>
            {techIcons
              ?.map((each) => TechIconDatabase.find((techIcon) => techIcon.id === each))
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
