import { styled } from 'styled-vanilla-extract/qwik';

export const Grid = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 10px 80px;

  @media (min-width: 768px) {
    gap: 25px;
    padding: 30px 30px 100px;
  }
`;

export const NoResults = styled.div`
  padding-top: 30px;
  opacity: 0.5;
  font-size: 1.5rem;
`;
