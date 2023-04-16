import { component$ } from '@builder.io/qwik';
import { Card, Thumbnail } from './tile.css';

export const TileComponent = component$(
  (props: { url: string; onClick$: () => void }) => {
    const adjustImageDimensions = (imageLink: string): string => {
      const imageUrl: string = imageLink.split('?')[0];
      return `${imageUrl}?q=100&w=300&h=450`;
    };

    return (
      <Card onClick$={props.onClick$}>
        <Thumbnail
          width="200px"
          height="300px"
          src={adjustImageDimensions(props.url)}
          loading="lazy"
        />
      </Card>
    );
  },
);
