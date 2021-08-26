import Link from "next/link";
import React, { useState } from "react";
import styled, { css } from "styled-components";

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

const Image = styled.img`
  ${({loaded}) => (loaded ? css`` : css`
    height: 300px;
    background-color: #EEE;
  `)}
  transition: 0.2s;
  border-radius: 8px;
  max-height: 400px;
  object-fit: cover;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.1);
  &:hover {
    box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
  }
`

const Work = ({data}) => {
  if( !data ) return <div></div>

  const [loaded, setLoaded] = useState(false)
  
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
        <Image src={`/img/workspace/${imageName}`} alt={title} onLoad={() => setLoaded(true)} loaded={loaded}/>
        <h2>{title}</h2>
        <p>{description}</p>
        <small>{createdYear}</small>
      </Article>
    </Link>
  );
};

export default Work;
