import React from 'react';
import styled from "styled-components"

const InstagramLink = "https://www.instagram.com/1000ship/";
const FacebookLink = "https://www.facebook.com/1000ship";
const YoutubeLink = "https://www.youtube.com/channel/UCABGTT1zjQgvkejvugkmdig";
const BlogLink = "https://blog.naver.com/cjstjdgur123";
const GithubLink = "https://github.com/1000ship"

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
`
const Copyright = styled.div`
  font-size: 16px;
  font-weight: lighter;
`

const IconList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  & > li {
    margin: 10px;
    font-size: 24px;
    & a {
      color: black;
      &:hover {
        color: gray;
      }
    }
  }
`


const Footer = () => {

  return (
    <Container>
      <IconList>
        <li><a href={GithubLink}><ion-icon name="logo-github"/></a></li>
        <li><a href={InstagramLink}><ion-icon name="logo-instagram"/></a></li>
        <li><a href={FacebookLink}><ion-icon name="logo-facebook"/></a></li>
        <li><a href={YoutubeLink}><ion-icon name="logo-youtube"/></a></li>
      </IconList>
      <Copyright>2021, 1000ship</Copyright>
    </Container>
  );
};

export default Footer;