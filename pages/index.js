import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import example1 from '../public/home1.jpg';
import example2 from '../public/home2.jpg';
import kayak1 from '../public/kayakWall2.jpg';

const mainStyle = css`
  width: 100%;
`;

const sectionStyles = css`
  text-align: center;
`;

const productsStyles = css`
  margin: auto;
  display: flex;
  justify-content: space-between;
  width: 1200px;

  img {
    border-radius: 15px;
    margin-bottom: 30px;
  }
`;

const buttonStyle = css`
  margin: 30px 0;
  background-color: #015a8d;
  color: #fff;
  border-radius: 15px;
  width: 180px;
  height: 45px;
  border: none;
  a {
    font-size: 20px;
    color: #fff;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title> Home</title>
        <meta name="description" content="Kayaks store" />
      </Head>
      <div css={mainStyle}>
        <Image src={kayak1} alt="weddwd" height="700px" />

        <section css={sectionStyles}>
          <h1>Products</h1>

          <div css={productsStyles}>
            <Image src={example1} alt="sdq" width="500px" height="200px" />
            <Image src={example2} alt="wqs" width="500px" height="200px" />
          </div>

          <button css={buttonStyle}>
            <Link href="/products">More Kayaks</Link>
          </button>
        </section>
      </div>
    </>
  );
}
