import { styled } from 'styled-vanilla-extract/qwik';

export const Grid = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 10px;

  @media (min-width: 768px) {
    gap: 25px;
    padding: 30px;
  }
`;

export const NoResults = styled.div`
  opacity: 0.5;
  font-size: 1.5rem;
`;
