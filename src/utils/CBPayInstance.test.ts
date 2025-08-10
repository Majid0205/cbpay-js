import { CBPayInstance } from './CBPayInstance';

describe('CBPayInstance', () => {
  it('creating CBPayInstance instance should be ok', () => {
    new CBPayInstance(DEFAULT_ARGS);
  });

  // TODO: Plenty of more tests we _should_ add here (regarding events/messaging/etc)
});

const DEFAULT_ARGS: ConstructorParameters<typeof CBPayInstance>[0] = {
  appId: 'abc123',
  appParams: {},
  widget: 'buy',
  experienceLoggedIn: 'popup',
  experienceLoggedOut: 'popup',
};
https://github.com/coinbase/cbpay-js/blob/main/src%2Fofframp%2FgenerateOffRampURL.test.ts
74122105-9644-404c-95c1-7f23a6565335