export interface InvoiceType {
  createdAt: string;
  id: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: 'PAID' | 'PENDING' | 'DRAFT';
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  items: [InvoiceItemType];
  total: number;
}

export interface DataInvoices {
  data: [InvoiceType];
}

export interface InvoiceItemType {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export type FilterType = 'DRAFT' | 'PENDING' | 'PAID';
