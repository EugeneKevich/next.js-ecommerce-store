import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import example1 from '../public/home1.jpg';
import example2 from '../public/home2.jpg';
import kayak1 from '../public/kayakWall2.jpg';

const bannerStyles = css`
  height: 800px;
`;
const sectionStyles = css``;

const productsStyles = css`
  display: flex;
  justify-content: center;
`;

const buttonStyles = css`
  color: #015a8d;
  border: 1px solid;
  border-radius: 50%;
  width: 350px;
  height: 350px;
  text-align: center;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title> Home</title>
        <meta name="description" content="Kayaks store" />
      </Head>
      <div css={bannerStyles}>
        {' '}
        <Image src={kayak1} alt="weddwd" />
      </div>
      <section css={sectionStyles}>
        <div>
          <h1>Products</h1>
        </div>
        <div css={productsStyles}>
          <Image src={example1} alt="sdq" />
          <Image src={example2} alt="wqs" />
        </div>
        <div href="" css={buttonStyles}>
          <a>More Kayaks</a>
        </div>
      </section>
    </>
  );
}
