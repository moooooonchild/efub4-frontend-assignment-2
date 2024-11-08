import { keyframes } from 'styled-components';

export const getRandomX = () => `${Math.random() * 100}vw`;

export const createFallingAnimation = (startX, startY, finishX) => ({
  animation: `falling 5s linear forwards`,
  left: startX,
  top: `${startY}px`,
  '--finish-x': finishX,
});

export const fallingKeyframes = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    transform: translateY(calc(100vh + 150px)) rotate(1080deg);
    left: var(--finish-x);
  }
`;
