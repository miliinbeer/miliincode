import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.color.background};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const Spiner = styled.div`
  width: 500px;
  height: 500px;
  border: 30px solid ${({ theme }) => theme.color.secondary};
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: rotation 1s linear infinite;
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
