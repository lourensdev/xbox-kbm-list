import { component$ } from '@builder.io/qwik';
import { Credit, CreditsWrapper, Divider, Icon } from './credits.css';

export const CreditComponent = component$(() => {
  return (
    <CreditsWrapper>
      <Credit
        href="https://github.com/Matheus7OP/xboxkbm-game-list"
        target="_blank"
      >
        <Icon
          src={'/credit.svg'}
          width={20}
          height={20}
          alt={'Xbox KBM Support Logo'}
        />
        Source
      </Credit>
      <Divider />
      <Credit href="https://github.com/lourensdev" target="_blank">
        <Icon
          src={'/created.svg'}
          width={20}
          height={20}
          alt={'Xbox KBM Support Logo'}
        />
        lourensdev
      </Credit>
    </CreditsWrapper>
  );
});
