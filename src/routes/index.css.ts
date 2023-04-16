import { styled } from 'styled-vanilla-extract/qwik';

export const Grid = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 25px;
    padding: 30px;
  }
`;
