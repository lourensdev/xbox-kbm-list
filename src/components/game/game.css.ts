import { styled } from 'styled-vanilla-extract/qwik';

export const GameDisplayWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  overflow: auto;

  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const GameModalClose = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
  width: 25px;
  height: 25px;
  opacity: 0.6;

  @media (min-width: 768px) {
    width: 32px;
    top: 10px;
    right: 8px;
  }

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 25px;
    width: 2px;
    background-color: #fff;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export const GameOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  animation: animFadeIn 0.3s ease-in-out;

  @keyframes animFadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export const GameModalBody = styled.div`
  display: flex;
  position: relative;
  background-color: #222222;
  padding: 20px;
  margin: 20px;
  line-height: 1.5;
  max-width: 800px;
  border-radius: 5px;
  z-index: 2;
  animation: animFadeIn 0.3s ease-in-out;
  flex-direction: column;

  @media (min-width: 768px) {
    gap: 20px;
    flex-direction: row;
  }

  @keyframes animFadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

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

export const GamePoster = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  height: auto;
  background-color: #191919;
  border: 3px solid transparent;

  @media (min-width: 768px) {
    width: 200px;
    min-width: 200px;
  }
`;

export const Thumbnail = styled.img`
  object-fit: contain;
  width: 50%;
  height: auto;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
`;

export const Description = styled.p``;

export const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 5px;
  color: #fff;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  background-color: #008746;
  text-decoration: none;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-transform: uppercase;
  font-weight: 700;
  transition: background-color 0.3s ease-in-out;

  @media (min-width: 768px) {
    width: auto;
  }

  &:hover {
    background-color: #04b358;
  }
`;
