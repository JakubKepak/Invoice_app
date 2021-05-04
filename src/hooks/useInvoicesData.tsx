import { useReducer, useEffect } from 'react';
import useFetch from 'hooks/useFetch';
import { invoiceDataReducer } from 'reducers/invoiceDataReducer';

export default function useInvoicesData(query: any): any {
  const { data, error, loading } = useFetch(query);

  const initialState = {
    data: undefined,
    originalData: undefined,
    filter: ['PAID', 'PENDING', 'DRAFT'],
  };

  const [state, dispatch] = useReducer(invoiceDataReducer, initialState);

  useEffect(() => {
    console.log(state);
    dispatch({ type: 'refresh', payload: data });
  }, [data]);

  const addFilter = (filter: 'PAID' | 'PENDING' | 'DRAFT') => {
    dispatch({
      type: 'addFilter',
      payload: filter,
    });
  };

  const removeFilter = (filter: 'PAID' | 'PENDING' | 'DRAFT') => {
    dispatch({
      type: 'removeFilter',
      payload: filter,
    });
  };

  return [state.data, error, loading, addFilter, removeFilter];
}
