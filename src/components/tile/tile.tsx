import { component$ } from '@builder.io/qwik';
import { Card } from './tile.css';
import { Image } from '@unpic/qwik';
import { rewriteImageUrl } from '~/utils';

export const TileComponent = component$(
  (props: {
    title: string;
    url: string;
    index: number;
    onClick$: () => void;
  }) => {
    const adjustImageDimensions = (imageLink: string): string => {
      const imageUrl: string = imageLink.split('?')[0];
      return rewriteImageUrl(imageUrl, 300, 450);
    };

    return (
      <Card onClick$={props.onClick$}>
        <Image
          class="g-fit-image"
          width={200}
          height={300}
          decoding="async"
          loading="lazy"
          layout="fullWidth"
          src={adjustImageDimensions(props.url)}
          alt={`${props.title} Cover Art`}
        />
      </Card>
    );
  },
);
