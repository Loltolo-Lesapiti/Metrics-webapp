import store from './mock/store';
import { fetchCurrencies } from './mock/forexslice';

describe('test the store', () => {
  it('Check if there is currencies in the store after fetching data', async () => {
    await store.dispatch(fetchCurrencies());
    expect(store.getState().currency.currency.ticker).toEqual('USD/JPY');
  });
});
