export interface Invoice {
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
  items: [
    {
      name: string;
      quantity: number;
      price: number;
      total: number;
    }
  ];
  total: number;
}
