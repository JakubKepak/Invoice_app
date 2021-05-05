import { invoiceDataReducer, initialState } from 'reducers/invoiceDataReducer';

describe('invoiceDataReducer', () => {
  it('should return initial state', () => {
    expect(
      invoiceDataReducer(initialState, { type: 'refresh', payload: undefined })
    ).toMatchSnapshot();
  });
});
