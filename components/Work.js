import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Article = styled.article`
  cursor: pointer;

  transition: 0.2s;
  &:hover {
    transform: scale(1.02);
  }

  & > * {
    width: 100%;
    margin: 4px 0px;
  }
  img {
    border-radius: 8px;
    max-height: 400px;
    object-fit: cover;
  }
  h2 {
    font-size: 18px;
    font-weight: bold;
  }
  p {
    color: #555;
  }
  small {
    font-size: 14px;
  }
`;

const Work = ({data}) => {
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
  } = data;
  return (
    <Link href={`/work/${id}`}>
      <Article>
        <img src={`/img/workspace/${imageName}`} alt={title}/>
        <h2>{title}</h2>
        <p>{description}</p>
        <small>{createdYear}</small>
      </Article>
    </Link>
  );
};

export default Work;
