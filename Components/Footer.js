import { css } from '@emotion/react';

const footerStyles = css`
  border-top: 2px solid #ddd;
  height: 50px;
  margin: 0;
  padding: 0;
  bottom: 0;
  background-color: #fff;
`;
export default function Footer() {
  return (
    <footer css={footerStyles}>
      <span>Copyright Kayaks 2022</span>
    </footer>
  );
}
