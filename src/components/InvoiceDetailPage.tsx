import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

import { fromatDate, addCommaSeparator } from "../helpers/helpers";

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

export default function InvoiceDetailPage({ data }: any) {
  const [currentInvoice, setCurrentInvoice] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);

  const { id } = useParams<Record<string, string | undefined>>();

  useEffect(() => {
    if (data !== undefined) {
      setCurrentInvoice(() => {
        setLoading(false);
        return data.filter((item: any) => item.id === id)[0];
      });
    }

    console.log(currentInvoice);
  });

  return (
    <>
      {!loading && (
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
            <InvoiceStatusIcon status={`${currentInvoice.status}`}>
              {currentInvoice.status}
            </InvoiceStatusIcon>
            <ButtonsContainer>
              <Button variant="secondary">Edit</Button>
              <Button variant="warn">Delete</Button>
              <Button variant="primary">Mark as Paid</Button>
            </ButtonsContainer>
          </HeaderContainer>
          <ContentContainer>
            <InvoiceHeaderContainer>
              <IdContainer>
                <p>
                  <span>#</span>
                  {currentInvoice.id}
                </p>
                <p>{currentInvoice.description}</p>
              </IdContainer>
              <AddressContainer>
                <p>{currentInvoice.senderAddress.street}</p>
                <p>{currentInvoice.senderAddress.city}</p>
                <p>{currentInvoice.senderAddress.postCode}</p>
                <p>{currentInvoice.senderAddress.country}</p>
              </AddressContainer>
            </InvoiceHeaderContainer>
            <InvoiceDetailsContainer>
              <DatesContainer>
                <ItemLabel>Invoice Date</ItemLabel>
                <ItemImportant>
                  {fromatDate(currentInvoice.createdAt)}
                </ItemImportant>
                <ItemLabel>Payment Due</ItemLabel>
                <ItemImportant>
                  {fromatDate(currentInvoice.paymentDue)}
                </ItemImportant>
              </DatesContainer>
              <BillToContainer>
                <ItemLabel>Bill To</ItemLabel>
                <ItemImportant>{currentInvoice.clientName}</ItemImportant>
                <p>{currentInvoice.clientAddress.street}</p>
                <p>{currentInvoice.clientAddress.city}</p>
                <p>{currentInvoice.clientAddress.postCode}</p>
                <p>{currentInvoice.clientAddress.country}</p>
              </BillToContainer>
              <SentToContainer>
                <ItemLabel>Sent To</ItemLabel>
                <ItemImportant>{currentInvoice.clientEmail}</ItemImportant>
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
                {currentInvoice.items.map((item: any) => {
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
                  {`£ ${addCommaSeparator(currentInvoice.total)}`}
                </TotalAmount>
              </TotalAmountContainer>
            </InvoiceItemsContainer>
          </ContentContainer>
        </MainContainer>
      )}
    </>
  );
}
