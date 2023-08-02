import { component$ } from '@builder.io/qwik';
import { Card } from './tile.css';
import { Image } from '@unpic/qwik';

export const TileComponent = component$(
  (props: { url: string; onClick$: () => void }) => {
    const adjustImageDimensions = (imageLink: string): string => {
      const imageUrl: string = imageLink.split('?')[0];
      return `${imageUrl}?q=100&w=300&h=450`;
    };

    return (
      <Card onClick$={props.onClick$}>
        <Image
          aspectRatio={2 / 3}
          layout="constrained"
          src={adjustImageDimensions(props.url)}
          loading="lazy"
        />
      </Card>
    );
  },
);
