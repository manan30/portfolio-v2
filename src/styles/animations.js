import { keyframes, css } from 'styled-components';

const slideIn = (direction) => keyframes`
  ${
    !direction || direction === 'left'
      ? css`
          from {
            transform: translateX(-200%);
          }

          to {
            transform: translateX(0);
          }
        `
      : css`
          from {
            transform: translateX(200%);
          }

          to {
            transform: translateX(0);
          }
        `
  }
`;

const slideInAnimation = (direction) =>
  css`
    animation: ${slideIn(direction)} 2s ease-in-out;
  `;

export { slideInAnimation };
