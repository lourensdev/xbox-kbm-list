import {
  component$,
  useSignal,
  useVisibleTask$,
  useStylesScoped$,
} from '@builder.io/qwik';
import { FilterContainer, Logo } from './filters.css';

export const FilterComponent = component$(
  (props: { onFilter$: (filter: string) => void }) => {
    const filterQuery = useSignal('');

    useVisibleTask$(({ track }) => {
      track(() => filterQuery.value);
      props.onFilter$(filterQuery.value);
    });

    useStylesScoped$(`
    input {
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 50px;
        box-sizing: border-box;
        color: #fff;
        background-color: var(--background-transparent);
        width: 100%;
        padding: 15px 20px;
        font-size: 1.2em;

        @media (min-width: 768px) {
          padding: 20px 30px;
          font-size: 1.5em;
        }
    }

    input::-webkit-search-cancel-button {
        -webkit-appearance: none;
        height: 1em;
        width: 1em;
        border-radius: 50em;
        background: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg)
        no-repeat 50% 50%;
        background-size: contain;
        cursor: pointer;
        filter: invert(1);
    }

    input:focus {
        outline: none;
    }

    input:placeholder-shown::-webkit-search-cancel-button {
      opacity: 0;
      pointer-events: none;
    }
  `);

    return (
      <FilterContainer>
        <Logo src={'/kbm_logo_filled_flat.svg'} />
        <input
          type="search"
          placeholder="Filter by Game"
          bind:value={filterQuery}
        />
      </FilterContainer>
    );
  },
);
