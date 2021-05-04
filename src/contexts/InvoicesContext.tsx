import { createContext } from 'react';

import useInvoiceData from 'hooks/useInvoicesData';
import { INVOICES } from 'queries/queries';

type InvoiceContextType = {
  data: any;
  error: any;
  loading: any;
  addFilter: any;
  removeFilter: any;
};

export const InvoicesContext = createContext<InvoiceContextType>({
  data: undefined,
  error: undefined,
  loading: undefined,
  addFilter: undefined,
  removeFilter: undefined,
});

export default function InvoicesProvider({ children }: any): any {
  const [data, error, loading, addFilter, removeFilter] = useInvoiceData(
    INVOICES
  );

  return (
    <InvoicesContext.Provider
      value={{ data, error, loading, addFilter, removeFilter }}
    >
      {children}
    </InvoicesContext.Provider>
  );
}
