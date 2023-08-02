import {
  component$,
  useStore,
  noSerialize,
  type NoSerialize,
  useSignal,
} from '@builder.io/qwik';
import { DocumentHead, routeLoader$ } from '@builder.io/qwik-city';
import { TileComponent } from '~/components/tile/tile';
import { Game } from '~/components/game/game.types';
import { Grid, NoResults } from './index.css';
import { GameView } from '~/components/game/game';
import { FilterComponent } from '~/components/filters/filters';

export const useRemoteData = routeLoader$(async () => {
  // This code runs only on the server, after every navigation
  const response = await fetch(
    'https://raw.githubusercontent.com/Matheus7OP/xboxkbm-game-list/main/games.json',
  );
  const data: Game[] = await response.json();
  return data.sort((a, b) => a.Name.localeCompare(b.Name));
});

export default component$(() => {
  const filterQuery = useSignal('');

  const store = useStore<{ selectedGame: NoSerialize<Game | undefined> }>({
    selectedGame: undefined,
  });

  const data = useRemoteData().value;

  return (
    <>
      <FilterComponent
        onFilter$={filter => {
          filterQuery.value = filter;
        }}
      />
      <Grid>
        {data.map((item: Game, index: number) =>
          filterQuery.value.length === 0 ||
          item.Name.toLowerCase().includes(filterQuery.value.toLowerCase()) ? (
            <TileComponent
              index={index}
              title={item.Name}
              key={item.ImageLink}
              url={item.ImageLink}
              onClick$={() => {
                store.selectedGame = noSerialize<Game>(item);
              }}
            />
          ) : null,
        )}
        {store.selectedGame && (
          <GameView
            {...store.selectedGame}
            onClose$={() => {
              store.selectedGame = noSerialize<undefined>(undefined);
            }}
          />
        )}
        {data.filter(item =>
          item.Name.toLowerCase().includes(filterQuery.value.toLowerCase()),
        ).length === 0 && (
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
