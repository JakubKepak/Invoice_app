import { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';

export default function useFetch(query: any, variables = {}) {
  const [queryFunction, { data, error, loading, called }] = useLazyQuery(
    query,
    {
      variables: variables,
    }
  );
  const history = useHistory();

  useEffect(() => {
    queryFunction();
  }, [queryFunction]);

  useEffect(() => {
    if (error?.message === 'not authenticated') {
      history.push('/login');
    }
  }, [error, history]);

  return { data, error, loading, called };
}
