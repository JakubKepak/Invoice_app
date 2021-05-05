import { createContext } from 'react';
import useInvoiceData from 'hooks/useInvoicesData';
import { INVOICES } from 'queries/queries';
import { DataInvoices } from 'types/types';

type InvoiceContextType = {
  data: DataInvoices | undefined;
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
