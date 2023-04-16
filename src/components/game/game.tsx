import { component$ } from '@builder.io/qwik';
import { Game } from './game.types';

export const GameView = component$((props: Game) => {
  const adjustImageDimensions = (imageLink: string): string => {
    const imageUrl: string = imageLink.split('?')[0];
    return `${imageUrl}?q=100&w=300&h=450`;
  };

  return (
    <>
      I'm GAME<button onClick$={props.onClose$}>close</button>
    </>
  );
});
