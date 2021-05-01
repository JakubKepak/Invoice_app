import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import {
  GET_INVOICE,
  REMOVE_INVOICE,
  UPDATE_INVOICE,
  INVOICES,
} from 'queries/queries';

export default function useDBHandler(invoice: any) {
  const [deleteInvoice] = useMutation(REMOVE_INVOICE);
  const [updateInvoice] = useMutation(UPDATE_INVOICE);

  const history = useHistory();

  const deleteInvoiceHandler = () => {
    deleteInvoice({
      variables: { id: invoice.data.id },
      refetchQueries: [{ query: INVOICES }],
    });
    history.push('/');
  };

  const updateInvoiceStatusHandler = () => {
    updateInvoice({
      variables: { invoice: { id: invoice.data.id, status: 'PAID' } },
      refetchQueries: [
        { query: INVOICES },
        { query: GET_INVOICE, variables: { id: invoice.data.id } },
      ],
    });
  };

  return { deleteInvoiceHandler, updateInvoiceStatusHandler };
}
