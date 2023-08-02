import { styled } from 'styled-vanilla-extract/qwik';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  width: calc(50% - 20px);
  height: auto;
  background-color: #191919;
  border: 3px solid transparent;
  transition: border-color 0.3s ease-in-out;
  cursor: pointer;

  @media (max-width: 375px) {
    width: 200px;
    height: 300px;
  }

  @media (min-width: 375px) {
    width: calc((355px - 50px) / 2);
    height: calc((355px - 50px) / 2 * 1.5);
  }

  @media (min-width: 460px) {
    width: 200px;
    height: 300px;
  }

  &:hover {
    border-color: #fff;
  }
`;
