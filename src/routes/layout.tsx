import { component$, Slot } from '@builder.io/qwik';
import { MainWrapper } from './layout.css';

export default component$(() => {
  return (
    <div class="page">
      <main>
        <MainWrapper>
          <Slot />
        </MainWrapper>
      </main>
    </div>
  );
});
