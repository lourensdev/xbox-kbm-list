import {
  component$,
  useStore,
  noSerialize,
  $,
  type NoSerialize,
  qrl,
  useSignal,
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { TileComponent } from '~/components/tile/tile';
import { Game } from '~/components/game/game.types';
import sourceData from '~/data.json';
import { Grid, NoResults } from './index.css';
import { GameView } from '~/components/game/game';
import { FilterComponent } from '~/components/filters/filters';

const DATA: Game[] = sourceData.sort((a, b) => a.Name.localeCompare(b.Name));

export default component$(() => {
  const filterQuery = useSignal('');
  const store = useStore<{ selectedGame: NoSerialize<Game | undefined> }>({
    selectedGame: undefined,
  });

  const filteredData = useStore<{ games: NoSerialize<Game[]> }>({
    games: noSerialize(DATA),
  });

  const filterGames = $((filter: string) => {
    filteredData.games = noSerialize(
      DATA.filter(item =>
        item.Name.toLowerCase().includes(filter.toLowerCase()),
      ),
    );
  });

  return (
    <>
      <FilterComponent
        onFilter$={filter => {
          filterQuery.value = filter;
          filterGames(filter);
        }}
      />
      <Grid>
        {filteredData.games?.map(item => (
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
        {filteredData.games?.length === 0 && (
          <NoResults>Unable to find game '{filterQuery}'</NoResults>
        )}
      </Grid>
    </>
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
