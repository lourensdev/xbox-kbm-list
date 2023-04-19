import { styled } from 'styled-vanilla-extract/qwik';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 20px 0;

  @media (min-width: 768px) {
    padding: 30px 30px 0;
  }
`;
