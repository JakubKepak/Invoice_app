/* eslint-disable no-case-declarations */
import { FilterType, InvoiceType, DataInvoices } from 'types/types';

type Action =
  | { type: 'addFilter'; payload: FilterType }
  | { type: 'removeFilter'; payload: FilterType }
  | { type: 'error' }
  | { type: 'refresh'; payload: DataInvoices | undefined };

interface StateType {
  data: DataInvoices | undefined;
  originalData: DataInvoices | undefined;
  filter: string[];
}

export const initialState = {
  data: undefined,
  originalData: undefined,
  filter: ['PAID', 'PENDING', 'DRAFT'],
};

export const invoiceDataReducer = (state: StateType, action: Action): any => {
  switch (action.type) {
    case 'refresh':
      if (action.payload) {
        const filteredData = action.payload.data.filter(
          (invoice: InvoiceType) => state.filter.includes(invoice.status)
        );

        return {
          ...state,
          originalData: action.payload,
          data: { data: filteredData },
        };
      }

      return state;
    case 'addFilter':
      if (!state.filter.includes(action.payload)) {
        state.filter.push(action.payload);
      }

      if (state.data && state.originalData) {
        const filteredData = state.originalData.data.filter(
          (invoice: InvoiceType) => state.filter.includes(invoice.status)
        );

        return {
          ...state,
          filter: state.filter,
          data: { data: filteredData },
        };
      }

      return state;

    case 'removeFilter':
      if (state.filter.includes(action.payload)) {
        state.filter.splice(state.filter.indexOf(action.payload), 1);
      }

      if (state.data && state.originalData) {
        const filteredData = state.originalData.data.filter(
          (invoice: InvoiceType) => state.filter.includes(invoice.status)
        );

        return {
          ...state,
          filter: state.filter,
          data: { data: filteredData },
        };
      }

      return state;
    case 'error':
      return state;
    default:
      throw new Error('Invalid action');
  }
};
