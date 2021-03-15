import React from "react";
import { useRouter } from "next/router";
import Page from "../../components/Page";
import WorkDatabase from "../../db/work.json";
import TechIconDatabase from "../../db/tech-icon.json";
import TechIcon from "../../components/TechIcon";
import styled from "styled-components";

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
      <img src={`/img/workspace/${imageName}`} />
      <h2>{title}</h2>
      <p>{description}</p>
      <small>{createdYear}</small>
      <Grid>
        {techIcons
          ?.map((each) => TechIconDatabase.find((techIcon) => techIcon.id === each))
          ?.map(({ title, icon, id }) => (
            <TechIcon key={id} id={id} title={title} icon={icon} />
          ))}
      </Grid>
    </Page>
  );
};

export default WorkShow;
