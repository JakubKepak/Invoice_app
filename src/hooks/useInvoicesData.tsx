import { useReducer, useEffect } from 'react';
import useFetch from 'hooks/useFetch';
import { invoiceDataReducer } from 'reducers/invoiceDataReducer';

export default function useInvoicesData(query: any): any {
  const { data, error, loading } = useFetch(query);

  const initialState = {
    data: undefined,
    filter: ['PAID', 'PENDING', 'DRAFT'],
  };

  const [state, dispatch] = useReducer(invoiceDataReducer, initialState);

  useEffect(() => {
    console.log(state);
    dispatch({ type: 'refresh', payload: data });
    dispatch({ type: 'filter' });
  }, [data]);

  const filterPaid = () => {
    dispatch({
      type: 'filter',
    });
  };

  return [state.data, error, loading, filterPaid];
}
