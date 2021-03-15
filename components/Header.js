import React from "react";
import styled from "styled-components";
import Link from 'next/link'

const Container = styled.header`
  left: 0;
  right: 0;
  padding: 13px;
  box-shadow: 0px 4px 4px var(--navbar-shadow-color);
  & a {
    text-decoration: unset;
    color: inherit;
  }
`;
const Content = styled.nav`
  display: flex;
  width: 100%;
  max-width: 1024px;
  margin: 0px auto;

  & ul {
    display: flex;
    & li {
      font-weight: 500;
      font-size: 18px;
      margin-left: 15px;
      transition: color 0.3s;
      &:hover {
        color: gray;
      }
    }
  }
`;

const Logo = styled.div`
  font-weight: 900;
  font-size: 18px;
  margin-right: 5px;
`;

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo><Link href="/">1000ship</Link></Logo>
        <ul>
          <li><Link href="/tech">.tech</Link></li>
          <li><Link href="/work">.work</Link></li>
          <li><Link href="/me">.me</Link></li>
        </ul>
      </Content>
    </Container>
  );
};

export default Header;
