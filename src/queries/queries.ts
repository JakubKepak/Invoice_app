import { gql } from "@apollo/client";

// Queries
export const INVOICES = gql`
  {
    data: getInvoices {
      id
      createdAt
      paymentDue
      description
      paymentTerms
      clientName
      clientEmail
      status
      senderAddress {
        street
        city
        postCode
        country
      }
      clientAddress {
        street
        city
        postCode
        country
      }
      items {
        name
        quantity
        price
        total
      }
      total
    }
  }
`;

// Mutations
export const REMOVE_INVOICE = gql`
  mutation RemoveInvoice($id: ID!) {
    data: deleteInvoice(input: { id: $id }) {
      id
    }
  }
`;

export const ADD_INVOICE = gql`
  mutation AddInvoice($invoice: NewInvoiceInput) {
    data: createInvoice(input: $invoice) {
      id
    }
  }
`;
