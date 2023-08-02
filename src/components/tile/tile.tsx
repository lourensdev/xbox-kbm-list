import { component$ } from '@builder.io/qwik';
import { Card } from './tile.css';
import { Image } from '@unpic/qwik';

export const TileComponent = component$(
  (props: { url: string; index: number; onClick$: () => void }) => {
    const adjustImageDimensions = (imageLink: string): string => {
      const imageUrl: string = imageLink.split('?')[0];
      return `${imageUrl}?q=80&w=300&h=450`;
    };

    return (
      <Card onClick$={props.onClick$}>
        <Image
          class="g-fit-image"
          width={200}
          height={300}
          priority={props.index < 6} // Don't lazy load images above the fold for mobile
          layout="fullWidth"
          src={adjustImageDimensions(props.url)}
        />
      </Card>
    );
  },
);
