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
  Title,
} from './game.css';
import { Image } from '@unpic/qwik';
import { rewriteImageUrl } from '~/utils';

export const GameView = component$((props: Game) => {
  const adjustImageDimensions = (imageLink: string): string => {
    const imageUrl: string = imageLink.split('?')[0];
    return rewriteImageUrl(imageUrl, 300, 450);
  };

  return (
    <GameDisplayWrapper>
      <GameModalBody>
        <GameModalClose onClick$={props.onClose$}></GameModalClose>
        <GamePoster>
          <Image
            class="g-fit-image"
            width={200}
            height={300}
            priority={true} // Don't lazy load images above the fold for mobile
            layout="fullWidth"
            src={adjustImageDimensions(props.ImageLink)}
            alt={`${props.Name} Cover Art`}
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
