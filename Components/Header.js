import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import cart from '../public/cart.png';
import smallLogo from '../public/logo.png';

const headerStyles = css`
  width: 100%;
  background: #fff;
  display: flex;
  border-bottom: 2px solid #ccc;
`;

const logoStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 100px;
`;

const navStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;

  a {
    font-size: 20px;
  }

  > a + a {
    margin-left: 20px;
  }
`;

const logo = css`
  width: 120px;
`;

const cartStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
`;

export default function Header(props) {
  return (
    <header css={headerStyles}>
      <div css={logoStyles}>
        <div css={logo}>
          <Image src={smallLogo} alt="" />
        </div>
      </div>
      <nav css={navStyles}>
        <Link href="/"> Home</Link>
        <Link href="/products" data-test-id="products-link">
          Products
        </Link>
        <Link href="/">About</Link>
        <Link href="/">Contacts</Link>
      </nav>
      <div css={cartStyles}>
        <div>
          <Link href="/cardshop">
            <Image src={cart} alt="" width="30px" height="30px" />
          </Link>
          <p>props</p>
        </div>
      </div>
    </header>
  );
}
