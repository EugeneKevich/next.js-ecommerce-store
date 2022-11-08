import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';

const catalogContainer = css`
  justify-content: center;
  display: grid;
  grid-template-columns: 350px 350px 350px;
  grid-template-rows: 430px 430px;
  column-gap: 20px;
  row-gap: 20px;
`;

const catalogStyles = css`
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  padding: 10px;
  width: 300px;

  h2 {
    text-align: center;
  }
`;

export default function Kayaks(props) {
  return (
    <>
      <Head>
        <title>Kayaks</title>
        <meta name="description" content="Kayaks Catalog" />
      </Head>
      <h1>Kayaks</h1>

      <div css={catalogContainer}>
        {props.products.map((product) => {
          return (
            <div key={'product' + product.id} css={catalogStyles}>
              <Link href={`/products/${product.id}`}>
                <a data-test-id={`product-${product.id}`}>
                  <Image
                    src={`/${product.id}-${product.name}.jpg`}
                    width="400px"
                    height="450px"
                  />
                </a>
              </Link>
              <h2>
                <Link href={`/products/${product.id}`}>{product.name}</Link>
              </h2>
            </div>
          );
        })}
      </div>
    </>
  );
}

export function getServerSideProps() {
  return {
    props: {
      products: products,
      abc: 123,
    },
  };
}
