import { styled } from 'styled-vanilla-extract/qwik';

export const CreditsWrapper = styled.div`
  display: flex;
  gap: 10px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50px;
  background-color: var(--background);
  padding: 10px 20px;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.3);

  @media (min-width: 768px) {
    bottom: 30px;
  }
`;

export const Credit = styled.a`
  display: flex;
  gap: 10px;
  align-items: center;
  color: #fff;
`;

export const Divider = styled.div`
  width: 1px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const Icon = styled.img``;
