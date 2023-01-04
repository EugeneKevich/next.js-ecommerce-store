import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

const bannerStyles = (Open) => css`
  z-index: 1;
  bottom: 0;
  left: 0;
  background: green;
  border: 1px solid #ddd;
  width: 100%;
  padding: 20px;

  ${!Open &&
  css`
    display: none;
    overflow: hidden;
  `};
`;

export default function CookieBanner() {
  const [bannerOpen, setBannerOpen] = useState(true);

  useEffect(() => {
    const initialValue = getLocalStorage('bannerOpen');
    if (initialValue === null) {
      setBannerOpen(false);
    }
  }, []);

  return (
    <div css={bannerStyles(bannerOpen)}>
      {console.log('banner', bannerOpen)}
      <span>Accept our Cookie</span>
      <button
        onClick={() => {
          setBannerOpen(false);
          setLocalStorage('BannerOpen', false);
        }}
      >
        yes
      </button>
    </div>
  );
}
