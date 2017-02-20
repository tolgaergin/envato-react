import styled, { keyframes } from 'styled-components';

export const Container = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Dots = styled.div `
  display: flex;
  justify-content: center;
  font-size: 22px;
`;

const loadingFade = keyframes `
  0% { opacity: 0; }
  50% { opacity: 0.8; }
  100% { opacity: 0; }
`;

export const Dot = styled.div `
  width: 8px;
  height: 8px;
  margin: 0 4px;
  background-color: #000;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 2px #fff;
  animation: ${loadingFade} 1s infinite;
  animation-delay: 0s;

  &:nth-child(2) {
    animation-delay: 0.1s;
  }

  &:nth-child(3) {
    animation-delay: 0.2s;
  }
`;
