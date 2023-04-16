import { styled } from 'styled-vanilla-extract/qwik';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  overflow: hidden;
  width: 40%;
  height: auto;
  background-color: #191919;

  @media (min-width: 768px) {
    width: 200px;
    height: 300px;
  }
`;

export const Thumbnail = styled.img`
  object-fit: contain;
  width: 100%;
  height: auto;
`;
