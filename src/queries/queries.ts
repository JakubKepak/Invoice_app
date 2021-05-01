import { gql } from '@apollo/client';

// Queries
export const INVOICES = gql`
  query AllInvoices {
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

export const GET_INVOICE = gql`
  query GetInvoice($id: ID!) {
    data: getInvoice(input: { id: $id }) {
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

export const UPDATE_INVOICE = gql`
  mutation UpdateInvoice($invoice: NewInvoiceInput) {
    data: updateInvoice(input: $invoice) {
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

export const LOGIN = gql`
  mutation Login($input: LoginInput) {
    data: loginUser(input: $input) {
      token
    }
  }
`;

export const REGISTER = gql`
  mutation Register($input: RegisterUserInput) {
    data: registerUser(input: $input) {
      token
    }
  }
`;
