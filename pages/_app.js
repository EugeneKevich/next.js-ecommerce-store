import { css, Global } from '@emotion/react';
import CookieBanner from '../Components/CoockiBanner';
import Layout from '../Components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
            margin: 0;
            background-color: #ccc;
          }

          h1 {
            font-size: 48px;
            color: #015a8d;
            text-align: center;
          }

          h2 {
            font-size: 38px;
            color: #015a8d;
          }

          a {
            color: #015a8d;
            font-weight: 700;
            text-decoration: none;
          }
        `}
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
      <CookieBanner />
    </>
  );
}

export default MyApp;
