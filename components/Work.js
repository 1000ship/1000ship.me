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
    transition: 0.2s;
    border-radius: 8px;
    max-height: 400px;
    object-fit: cover;
    &:hover {
      box-shadow: 0px 4px 8px rgba(0,0,0,0.3);
    }
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
  if( !data ) return <div></div>
  
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
