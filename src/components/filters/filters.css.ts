import { styled } from 'styled-vanilla-extract/qwik';

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 20px 0;
  position: sticky;
  top: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  );

  @media (min-width: 768px) {
    gap: 15px;
    padding: 30px 30px 0;
  }
`;

export const Logo = styled.img`
  width: 56px;
  height: 56px;
  cursor: pointer;
  user-select: none;

  &:active {
    transform: scale(0.9);
  }

  @media (min-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;
