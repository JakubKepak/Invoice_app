type Action =
  | { type: 'filter' }
  | { type: 'error' }
  | { type: 'refresh'; payload: any };

export const invoiceDataReducer = (state: any, action: Action) => {
  switch (action.type) {
    case 'refresh':
      return { ...state, data: action.payload };
    case 'filter':
      // eslint-disable-next-line no-case-declarations
      if (state.data) {
        const filteredData = state.data.data.filter((invoice: any) =>
          state.filter.includes(invoice.status)
        );

        return { ...state, data: { data: filteredData } };
      }

      return state;
    case 'error':
      return state;
    default:
      throw new Error('Invalid action');
  }
};
