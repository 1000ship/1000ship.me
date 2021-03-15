import { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500&display=swap');
    body {
      font-family: 'Noto Sans KR', sans-serif;
    }
    b {
      font-weight: bolder;
    }
    a {
      text-decoration: inherit;
      color: inherit;
    }
  `
  
  return (
    <>
      <Reset/>
      <GlobalStyle/>
      <Head>
        <title>Junior Software Developer 성혁 | 1000ship</title>
        <link rel="icon" href="/favicons/favicon.png" />
        <meta name="description" content="아직 배울게 많은 주니어 개발자입니다.  개발 기술, 만든 작품을 소개하고자 합니다." />
        <meta name="keywords" content="천성혁,성혁,React,Expo,NextJS,NestJS,홍익대학교,프론트엔드,백엔드,인프라" />
        <meta charset="utf-8" />
        <meta lang="ko" />
      </Head>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
      <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
    </>
  );
}

export default MyApp;
