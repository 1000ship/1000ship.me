import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import Link from 'next/link'
import { useRouter } from 'next/router'
import { css } from "styled-components";

const Container = styled.header`
  z-index: 9999;
  position: fixed;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.95);
  padding: 13px;
  & a {
    text-decoration: unset;
    color: inherit;
  }
  border-bottom: 0px solid transparent;
  ${({underline = false}) => underline && css`border-bottom: 1px solid #eee;`}
  transition: border-bottom 0.3s;
`;
const Content = styled.nav`
  display: flex;
  width: 100%;
  max-width: 1024px;
  margin: 0px auto;

  & ul {
    display: flex;
    & > li {
      margin-left: 8px;
      font-weight: 500;
      font-size: 18px;
    }
  }
`;

const Logo = styled.div`
  font-weight: 900;
  font-size: 18px;
  margin-right: 5px;
`;

const MenuAnchor = styled.a`
  cursor: pointer;
  padding: 2px 4px;
  border-radius: 4px;
  transition: 0.3s;
  &:hover {
    background-color: #f5f5f5;
  }
  ${({active}) => active && css`
    background-color: #eee;
    color: black;
  `}
`

const Header = () => {
  const router = useRouter();
  const [containerHeight, setContainerHeight] = useState(0)
  const containerRef = useRef(null)
  useLayoutEffect(() => {
    setContainerHeight(containerRef.current.offsetHeight)
  }, [containerRef.current])

  return (
    <>
    <div style={{height: containerHeight}}/>
    <Container ref={containerRef} underline={router.pathname !== "/"}>
      <Content>
        <Logo><Link href="/"><MenuAnchor>1000ship</MenuAnchor></Link></Logo>
        <ul>
          <li><Link href="/tech"><MenuAnchor active={router.pathname.includes("/tech")}>.tech</MenuAnchor></Link></li>
          <li><Link href="/work"><MenuAnchor active={router.pathname.includes("/work")}>.work</MenuAnchor></Link></li>
          <li><Link href="/me"><MenuAnchor active={router.pathname.includes("/me")}>.me</MenuAnchor></Link></li>
        </ul>
      </Content>
    </Container>
    </>
  );
};

export default Header;
