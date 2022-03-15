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

  /* title */
  h2 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  /* description */
  p {
    color: #666;
    font-weight: lighter;
    margin-bottom: 4px;
  }
  /* createdYear */
  small {
    font-size: 12px;
    color: #888;
  }
`;

const Image = styled.img`
  ${({ loaded }) => (loaded ? css`` : css`
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

const Work = ({ data }) => {
  if (!data) return <div></div>

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
      <a>
        <Article>
          <Image src={`/img/workspace/${imageName}`} alt={title} onLoad={() => setLoaded(true)} loaded={loaded} />
          <h2>{title}</h2>
          <p>{description}</p>
          <small>{createdYear}</small>
        </Article>
      </a>
    </Link>
  );
};

export default Work;
