/* eslint-disable no-case-declarations */
type Action =
  | { type: 'addFilter'; payload: any }
  | { type: 'removeFilter'; payload: any }
  | { type: 'error' }
  | { type: 'refresh'; payload: any };

export const invoiceDataReducer = (state: any, action: Action) => {
  switch (action.type) {
    case 'refresh':
      if (action.payload) {
        const filteredData = action.payload.data.filter((invoice: any) =>
          state.filter.includes(invoice.status)
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

      console.log(state.filter);

      if (state.data) {
        const filteredData = state.originalData.data.filter((invoice: any) =>
          state.filter.includes(invoice.status)
        );

        console.log(filteredData);

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

      console.log(state.filter);

      if (state.data) {
        const filteredData = state.originalData.data.filter((invoice: any) =>
          state.filter.includes(invoice.status)
        );

        console.log(filteredData);

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
