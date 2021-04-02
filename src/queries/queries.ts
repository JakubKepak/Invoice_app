import { gql } from "@apollo/client";

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
