import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { products } from '../../database/products';
import { getParsedCookies, setStringifiedCookies } from '../../utils/cookies';

const cardProduct = css`
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
  margin-bottom: 12%;
`;
const imageStyles = css`
  border: 1px solid #9d9d9d;
  border-radius: 20px;
  background-color: #fff;
  padding-top: 20px;
`;

const descriptionStyles = css`
  width: 400px;
  padding-left: 50px;
  height: 400px;
  border: 1px solid #9d9d9d;
  border-radius: 20px;
  background-color: #fff;

  button {
    width: 30px;
    border-radius: 5px;
    border: 1px ridge #015a8d;
    margin-left: 10px;
    background-color: #e7e2e2;
  }
`;

const priceStyle = css`
  font-size: 25px;
  font-weight: 500;
  color: tomato;
`;

export default function Product(props) {
  const [amountOfKayak, setAmountOfKayak] = useState(1);
  return (
    <>
      <Head>
        <title>Kayaks</title>
        <meta name="description" content="Kayaks Catalog" />
      </Head>

      <div css={cardProduct}>
        <div key={'product' + props.product.id} css={imageStyles}>
          <Image
            data-test-id="product-image"
            src={`/${props.product.id}-${props.product.name}.jpg`}
            width="480px"
            height="350px"
          />
        </div>
        <div css={descriptionStyles}>
          <div>
            <h1>{props.product.name}</h1>
          </div>
          <div>
            <p>Type: {props.product.type}</p>
            <p>Number of seats: {props.product.seats}</p>
          </div>
          <div>
            <div>
              <p>Quantity {amountOfKayak}</p>
              <button
                onClick={() => {
                  setAmountOfKayak(amountOfKayak + 1);
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  setAmountOfKayak(amountOfKayak - 1);
                }}
              >
                -
              </button>

              <p css={priceStyle}>{props.product.price * amountOfKayak} </p>
            </div>

            <a
              href="/../cardshop"
              onClick={() => {
                const currentCookieValue = getParsedCookies('quantity');

                if (!currentCookieValue) {
                  setStringifiedCookies('quantity', [
                    { id: props.product.id, quantity: amountOfKayak },
                  ]);
                } else {
                  const foundCookie = currentCookieValue.find(
                    (cookieProductObject) =>
                      cookieProductObject.id === props.product.id,
                  );

                  if (!foundCookie) {
                    currentCookieValue.push({
                      id: props.product.id,
                      quantity: amountOfKayak,
                    });
                    setStringifiedCookies('quantity', currentCookieValue);
                  }
                }
              }}
            >
              Add to Card
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export function getServerSideProps(context) {
  const productId = parseInt(context.query.productId);

  const parsedCookies = context.req.cookies.quantity
    ? JSON.parse(context.req.cookies.quantity)
    : [];

  const product = products.map((kayak) => {
    return {
      ...kayak,
      quantity:
        parsedCookies.find(
          (cookieProductObject) => kayak.id === cookieProductObject.id,
        )?.quantity || 1,
    };
  });

  const foundKayak = product.find((kayak) => {
    const singleProduct = kayak.id === productId;
    return singleProduct;
  });

  return {
    props: {
      product: foundKayak,
    },
  };
}

/*  */

/* const currentCookieValue = getParsedCookies('quantity');

                  if (!currentCookieValue) {
                    setStringifiedCookies('quantity', [
                      { id: props.product.id, quantity: 1 },
                    ]);
                  } else {
                    const foundCookie = currentCookieValue.find(
                      (cookieProductObject) =>
                        cookieProductObject.id === props.product.id,
                    );

                    if (!foundCookie) {
                      currentCookieValue.push({
                        id: props.product.id,
                        quantity: +1,
                      });
                    } else {
                      foundCookie.quantity++;
                    }
                    setStringifiedCookies('quantity', currentCookieValue);
                  }
                  const currentCookieValue = getParsedCookies('quantity');

                  if (!currentCookieValue) {
                    setStringifiedCookies('quantity', [
                      { id: props.product.id, quantity: 1 },
                    ]);
                  } else {
                    const foundCookie = currentCookieValue.find(
                      (cookieProductObject) =>
                        cookieProductObject.id === props.product.id,
                    );

                    if (!foundCookie) {
                      currentCookieValue.push({
                        id: props.product.id,
                        quantity: -1,
                      });
                    } else {
                      foundCookie.quantity--;
                    }
                    setStringifiedCookies('quantity', currentCookieValue);
                  } */
