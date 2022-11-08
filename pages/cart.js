import { css } from '@emotion/react';
import { GetServerSideProps } from 'next';

const personalData = css`
  padding-left: 300px;
`;

const adressData = css`
  padding-left: 300px;
`;

const cardData = css`
  padding-left: 300px;
`;
const form = css`
  width: 1000px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
`;
export default function shoppingCart() {
  return (
    <div css={form}>
      {' '}
      <div css={personalData}>
        <form id="personal">
          <ul>
            <li>
              <label htmlFor="firstName">First Name </label>
              <input type="text" data-test-id="checkout-first-name" />{' '}
            </li>
            <li>
              <label htmlFor="lastName">Last Name </label>
              <input type="text" data-test-id="checkout-last-name" />{' '}
            </li>
            <li>
              <label htmlFor="e-mail">E-mail: </label>
              <input type="email" data-test-id="checkout-email" />{' '}
            </li>
          </ul>
        </form>
      </div>
      <div css={adressData}>
        <form id="adress">
          <ul>
            <li>
              <label htmlFor="adress">Adress </label>
              <input type="text" data-test-id="checkout-address" />{' '}
            </li>
            <li>
              <label htmlFor="city">City </label>
              <input type="text" data-test-id="checkout-city" />{' '}
            </li>
            <li>
              <label htmlFor="postalCode">Postal code </label>
              <input type="text" data-test-id="checkout-postal-code" />{' '}
            </li>
            <li>
              <label htmlFor="country">Country </label>
              <input type="text" data-test-id="checkout-country" />{' '}
            </li>
          </ul>
        </form>
      </div>
      <div css={cardData}>
        <form id="card">
          <ul>
            <li>
              <label htmlFor="card">Card </label>
              <input type="text" data-test-id="checkout-credit-card" />{' '}
            </li>
            <li>
              <label htmlFor="expirationDate">Expiration Date</label>
              <input type="text" data-test-id="checkout-expiration-date" />{' '}
            </li>
            <li>
              <label htmlFor="cvvCode">CVV Code </label>
              <input type="text" data-test-id="checkout-security-code" />{' '}
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
