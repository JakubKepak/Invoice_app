import { invoiceDataReducer, initialState } from 'reducers/invoiceDataReducer';
import { mockData } from '__mock__/data';
import {
  allFilterInvoiceStateMock,
  PendingDrafFilterInvoiceStateMock,
} from '__mock__/invoiceDataStateMock';

describe('invoiceDataReducer', () => {
  it('should return initial state', () => {
    expect(
      invoiceDataReducer(initialState, { type: 'refresh', payload: undefined })
    ).toMatchSnapshot();
  });

  it('should return state after initial fetch', () => {
    expect(
      invoiceDataReducer(initialState, { type: 'refresh', payload: mockData })
    ).toMatchSnapshot();
  });

  it('removeFilter - should return all but paid invoices', () => {
    expect(
      invoiceDataReducer(allFilterInvoiceStateMock, {
        type: 'removeFilter',
        payload: 'PAID',
      })
    ).toMatchSnapshot();
  });

  it('addFilter - should return all invoices', () => {
    expect(
      invoiceDataReducer(PendingDrafFilterInvoiceStateMock, {
        type: 'addFilter',
        payload: 'PAID',
      })
    ).toMatchSnapshot();
  });
});
