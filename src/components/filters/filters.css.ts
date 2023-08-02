import { styled } from 'styled-vanilla-extract/qwik';

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 20px 0;
  position: sticky;
  top: 0;

  @media (min-width: 768px) {
    padding: 30px 30px 0;
  }
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }

  @media (min-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;
