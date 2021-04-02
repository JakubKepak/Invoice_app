import { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import { fromatDate, addCommaSeparator } from "../helpers/helpers";

import EditInvoice from "./EditInvoice/EditInvoice";

import InvoiceStatusIcon from "./UI/InvoiceStatusIcon";
import Button from "./UI/Button";

import leftArrowIcon from "../assets/icon-arrow-left.svg";

const MainContainer = styled.div`
  width: 70%;
`;

const GoBackContainer = styled.div`
  margin-bottom: 2rem;
  font-weight: 700;
  font-size: var(--fontSizeSmall);
`;

const LeftArrowIcon = styled.img`
  margin-right: 1rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.invoiceItemBackground};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};

  & span:nth-of-type(1) {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.textColorLight};
    margin-right: 1rem;
  }
`;

const ButtonsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  margin-left: auto;
`;

const ContentContainer = styled.div`
  margin-top: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.invoiceItemBackground};
  padding: 2rem;
  display: grid;
  grid-gap: 2rem;
`;

const InvoiceHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IdContainer = styled.div`
  & p:nth-of-type(1) {
    color: ${({ theme }) => theme.colors.mainFontColor};
    font-weight: 700;
    margin-bottom: 0.4rem;
  }

  & p:nth-of-type(1) span {
    color: ${({ theme }) => theme.colors.textColorLight2};
    font-weight: 500;
  }

  & p:nth-of-type(2) {
    color: ${({ theme }) => theme.colors.textColorLight};
    font-size: var(--fontSizeSmall);
  }
`;

const AddressContainer = styled.div`
  color: ${({ theme }) => theme.colors.textColorLight};
  font-size: var(--fontSizeSmall);
  line-height: 1.3rem;
  text-align: right;
`;

const InvoiceDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DatesContainer = styled.div`
  & p:nth-of-type(3) {
    margin-top: 2rem;
  }
`;

const BillToContainer = styled.div`
  & p:nth-of-type(n + 3) {
    color: ${({ theme }) => theme.colors.textColorLight};
    font-size: var(--fontSizeSmall);
    line-height: 1.2rem;
  }
`;

const SentToContainer = styled.div``;

const ItemLabel = styled.p`
  color: ${({ theme }) => theme.colors.textColorLight};
  font-size: var(--fontSizeSmall);
  margin-bottom: 0.5rem;
`;

const ItemImportant = styled.p`
  color: ${({ theme }) => theme.colors.mainFontColor};
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const InvoiceItemsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundColorLight};
  border-radius: var(--borderRadius);
`;

const ItemsListContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  padding: 2rem;
  font-size: var(--fontSizeSmall);
`;
const ItemContainerHeader = styled.div`
  display: grid;
  grid-template-columns: 55% 15% 15% 15%;
  color: ${({ theme }) => theme.colors.textColorLight};

  & span:nth-of-type(2) {
    display: flex;
    justify-content: center;
  }

  & span:nth-of-type(n + 3) {
    margin-left: auto;
  }
`;

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 55% 15% 15% 15%;

  & span:nth-of-type(1) {
    font-weight: 700;
  }

  & span:nth-of-type(2) {
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.colors.textColorLight};
  }

  & span:nth-of-type(3) {
    color: ${({ theme }) => theme.colors.textColorLight};
    margin-left: auto;
  }

  & span:nth-of-type(4) {
    font-weight: 700;
    margin-left: auto;
  }
`;

const TotalAmountContainer = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.menuBackground};
  border-radius: 0 0 5px 5px;
`;

const TotalAmount = styled.span`
  font-size: var(--fontSizeXXL);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.invoiceItemBackground};
`;

export default function InvoiceDetailPage() {
  const [editActive, setEditActive] = useState<boolean>(false);

  const location = useLocation();
  const invoice: any = location.state;

  console.log(invoice);

  return (
    <>
      <MainContainer>
        <GoBackContainer>
          <Link to="/">
            <span>
              <LeftArrowIcon src={leftArrowIcon} />
              Go Back
            </span>
          </Link>
        </GoBackContainer>
        <HeaderContainer>
          <span>Status</span>
          <InvoiceStatusIcon status={`${invoice.status}`}>
            {invoice.status}
          </InvoiceStatusIcon>
          <ButtonsContainer>
            <Button variant="secondary" onClick={() => setEditActive(true)}>
              Edit
            </Button>
            <Button variant="warn">Delete</Button>
            <Button variant="primary">Mark as Paid</Button>
          </ButtonsContainer>
        </HeaderContainer>
        <ContentContainer>
          <InvoiceHeaderContainer>
            <IdContainer>
              <p>
                <span>#</span>
                {invoice.id}
              </p>
              <p>{invoice.description}</p>
            </IdContainer>
            <AddressContainer>
              <p>{invoice.senderAddress.street}</p>
              <p>{invoice.senderAddress.city}</p>
              <p>{invoice.senderAddress.postCode}</p>
              <p>{invoice.senderAddress.country}</p>
            </AddressContainer>
          </InvoiceHeaderContainer>
          <InvoiceDetailsContainer>
            <DatesContainer>
              <ItemLabel>Invoice Date</ItemLabel>
              <ItemImportant>{fromatDate(invoice.createdAt)}</ItemImportant>
              <ItemLabel>Payment Due</ItemLabel>
              <ItemImportant>{fromatDate(invoice.paymentDue)}</ItemImportant>
            </DatesContainer>
            <BillToContainer>
              <ItemLabel>Bill To</ItemLabel>
              <ItemImportant>{invoice.clientName}</ItemImportant>
              <p>{invoice.clientAddress.street}</p>
              <p>{invoice.clientAddress.city}</p>
              <p>{invoice.clientAddress.postCode}</p>
              <p>{invoice.clientAddress.country}</p>
            </BillToContainer>
            <SentToContainer>
              <ItemLabel>Sent To</ItemLabel>
              <ItemImportant>{invoice.clientEmail}</ItemImportant>
            </SentToContainer>
          </InvoiceDetailsContainer>
          <InvoiceItemsContainer>
            <ItemsListContainer>
              <ItemContainerHeader>
                <span>Item Name</span>
                <span>QTY.</span>
                <span>Price</span>
                <span>Total</span>
              </ItemContainerHeader>
              {invoice.items.map((item: any) => {
                return (
                  <ItemContainer>
                    <span>{item.name}</span>
                    <span>{item.quantity}</span>
                    <span>{`£ ${addCommaSeparator(item.price)}`}</span>
                    <span>{`£ ${addCommaSeparator(item.total)}`}</span>
                  </ItemContainer>
                );
              })}
            </ItemsListContainer>
            <TotalAmountContainer>
              <ItemLabel>Amount Due</ItemLabel>
              <TotalAmount>
                {`£ ${addCommaSeparator(invoice.total)}`}
              </TotalAmount>
            </TotalAmountContainer>
          </InvoiceItemsContainer>
        </ContentContainer>
      </MainContainer>
      {editActive && (
        <EditInvoice
          setEditActive={setEditActive}
          variant="edit"
          invoiceId={invoice.id}
          providerStreetAddress={invoice.senderAddress.street}
          providerCity={invoice.senderAddress.city}
          providerPostalCode={invoice.senderAddress.postCode}
          providerCountry={invoice.senderAddress.country}
          clientsName={invoice.clientName}
          clientsEmail={invoice.clientEmail}
          clientsStreetAddress={invoice.clientAddress.street}
          clientCity={invoice.clientAddress.city}
          clientPostalCode={invoice.clientAddress.postCode}
          clientCountry={invoice.clientAddress.country}
          invoiceDate={invoice.createdAt}
          paymentTerms={invoice.paymentTerms}
          description={invoice.description}
          invoiceItems={invoice.items}
        />
      )}
    </>
  );
}
