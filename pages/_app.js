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
      <Header/>
      <Component {...pageProps} />
      <Footer/>
      <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
    </>
  );
}

export default MyApp;
