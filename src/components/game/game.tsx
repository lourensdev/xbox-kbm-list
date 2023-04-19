import { component$ } from '@builder.io/qwik';
import { Game } from './game.types';
import {
  Button,
  Description,
  GameDisplayWrapper,
  GameModalBody,
  GameModalClose,
  GameOverlay,
  GamePoster,
  ImageCaption,
  ImageCaptionIcon,
  Thumbnail,
  Title,
} from './game.css';

export const GameView = component$((props: Game) => {
  const adjustImageDimensions = (imageLink: string): string => {
    const imageUrl: string = imageLink.split('?')[0];
    return `${imageUrl}?q=100&w=300&h=450`;
  };

  return (
    <GameDisplayWrapper>
      <GameModalBody>
        <GameModalClose onClick$={props.onClose$}></GameModalClose>
        <GamePoster>
          <Thumbnail
            width="200px"
            height="300px"
            src={adjustImageDimensions(props.ImageLink)}
            loading="lazy"
          />
          <ImageCaption>
            <ImageCaptionIcon src="/icons/information.png" />
            {props.ImageSource}
          </ImageCaption>
        </GamePoster>
        <div>
          <Title>{props.Name}</Title>
          <Description>{props.Description}</Description>
          <Description>
            <strong>Crossplay:</strong> {props.CrossplayEnabled ? 'Yes' : 'No'}
          </Description>
          <Button href={props.BuyLink} target="_blank">
            Store Link
          </Button>
        </div>
      </GameModalBody>
      <GameOverlay onClick$={props.onClose$} />
    </GameDisplayWrapper>
  );
});
