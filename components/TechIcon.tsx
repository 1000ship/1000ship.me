import React, { FC } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";

const TechIconDir = `/tech-icons/original/`;

const Container = styled.a<{ size: number; icon: string }>`
  cursor: pointer;
  position: relative;
  margin: 8px;
  ${({ size }) => css`
    width: ${size}px;
    height: ${size}px;
  `}
  transition: 0.5s;

  &:hover {
    transform: scale(1.2);
    & > img {
      opacity: 0.2;
    }
    & > div {
      opacity: 1;
    }
  }
  & > img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: 0.5s;
  }
  & > div {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    opacity: 0;
    width: 100%;
    height: 100%;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    margin: auto auto;
    transition: 0.5s;
  }
`;

interface TechIconProps {
  id: string;
  title: string;
  icon: string;
  size?: number;
}

const TechIcon: FC<TechIconProps> = (props) => {
  const { size = 55, icon, title, id } = props;

  return (
    <Link href={`/tech/${id}`}>
      <Container size={size} icon={icon}>
        <img src={`${TechIconDir}${icon}`} alt={title} />
        <div>{title}</div>
      </Container>
    </Link>
  );
};

export default TechIcon;
