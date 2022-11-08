import { css } from '@emotion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { products } from '../database/products';
import { getParsedCookies, setStringifiedCookies } from '../utils/cookies';

const priceStyle = css`
  font-size: 25px;
  font-weight: 500;
  color: tomato;
`;

const cartStyles = css`
  text-align: center;
  display: flex;
  justify-content: space-evenly;
`;
const cartItemStyles = css`
  margin-bottom: 20px;

  span {
    margin-left: 20px;
    font-size: 25px;
  }
`;
export default function CardShop(props) {
  const totalValue = props.currentCart.map((value) => {
    return value.price * value.quantity;
  });

  console.log(totalValue);

  const totalPr = totalValue.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);

  console.log(totalPr);

  return (
    <div>
      <h1> Your Cart</h1>
      <div css={cartStyles}>
        <div>
          {props.currentCart.map((kayak) => {
            return (
              <div
                key="cart-product-<product id>"
                data-test-id="cart-product-<product id>"
                css={cartItemStyles}
              >
                <Image
                  src={`/${kayak.id}-${kayak.name}.jpg`}
                  width="130px"
                  height="100px"
                />

                <span>{kayak.price * kayak.quantity} €</span>
              </div>
            );
          })}
        </div>
        <div>
          <p css={priceStyle}> Total Price: {totalPr} €</p>
        </div>
      </div>
    </div>
  );
}

export function getServerSideProps(context) {
  const currentCookieValue = context.req.cookies.quantity
    ? JSON.parse(context.req.cookies.quantity)
    : [];

  const currentCart = currentCookieValue.map((product) => {
    const kayakInCart = products.find((card) => card.id === product.id);
    return { ...kayakInCart, ...product };
  });

  return {
    props: {
      currentCart,
    },
  };
}
