import "./styles.css";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

import styled from '@emotion/styled'
//PageOne
import { Body } from "./pageOne/Body";
import { Header } from "./pageOne/Header";
import { Footer } from "./pageOne/Footer";


const myCache = createCache({
  key: "test-project-cache"
});

export default function App() {
  return (
    <CacheProvider value={myCache}>
        <Container>
          <Header />
          <Body />
          <Footer />
        </Container>
    </CacheProvider>
  );
}

const Container =styled.div`
display: flex;
flex-direction: column;
background-color: #282828;
text-align: center;
height: 812px;
`