import { css } from '@emotion/react';

const footerStyles = css`
  border-top: 2px solid #ddd;
  height: 50px;
  width: 100%;

  padding: 30;
  bottom: 0;
  position: fixed;
  background-color: #fff;
`;
export default function Footer() {
  return (
    <footer css={footerStyles}>
      <span>Copyright Kayaks 2022</span>
    </footer>
  );
}
