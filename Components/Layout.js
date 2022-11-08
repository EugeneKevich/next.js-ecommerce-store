import { css } from '@emotion/react';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

const mainStyles = css`
  width: 100%;
`;
export default function Layout(props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main css={mainStyles}> {props.children} </main>
      <Footer />
    </>
  );
}
