import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="page">
      <main>
        <Slot />
      </main>
    </div>
  );
});
