import {
  QRL,
  $,
  component$,
  useStore,
  noSerialize,
  type NoSerialize,
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { TileComponent } from '~/components/tile/tile';
import { Game } from '~/components/game/game.types';
import sourceData from '~/data.json';
import { Grid } from './index.css';
import { GameView } from '~/components/game/game';

export default component$(() => {
  const DATA: Game[] = sourceData.sort((a, b) => a.Name.localeCompare(b.Name));
  const store = useStore<{ selectedGame: NoSerialize<Game | undefined> }>({
    selectedGame: undefined,
  });

  return (
    <Grid>
      {DATA.map(item => (
        <TileComponent
          key={item.ImageLink}
          url={item.ImageLink}
          onClick$={() => {
            store.selectedGame = noSerialize<Game>(item);
          }}
        />
      ))}
      {store.selectedGame && (
        <GameView
          {...store.selectedGame}
          onClose$={() => {
            store.selectedGame = noSerialize<undefined>(undefined);
          }}
        />
      )}
    </Grid>
  );
});

export const head: DocumentHead = {
  title: 'Xbox Games that support Keyboard & Mouse',
  meta: [
    {
      name: 'description',
      content: 'The latest keyboard & mouse list for Xbox One, Xbox Series X/S',
    },
  ],
};
