import { styled } from 'styled-vanilla-extract/qwik';

export const ImageCaption = styled.figcaption`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  opacity: 0.4;
  font-size: 11px;
`;

export const ImageCaptionIcon = styled.img`
  width: 15px;
  height: 15px;
`;
