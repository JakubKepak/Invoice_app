import { useState } from "react";
import styled from "styled-components";

import PrimaryButtonAdd from "./UI/PrimaryButtonAdd";

import arrowDown from "../assets/icon-arrow-down.svg";
import illustrationEmpty from "../assets/illustration-empty.svg";

// components
import InvoicePreview from "./InvoicePreview";
import EditInvoice from "./EditInvoice/EditInvoice";

const MainContainer = styled.div`
  width: 70%;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PageTitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  & h1 {
    color: ${({ theme }) => theme.colors.mainFontColor};
  }

  & span {
    color: ${({ theme }) => theme.colors.textColorLight};
    font-size: 0.8rem;
    margin-top: 0.4rem;
  }
`;

const OptionItemsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;

  & span {
    font-weight: 700;
  }
`;

const ArrowImage = styled.img`
  margin-left: 0.5rem;
`;

const ContentContainer = styled.div`
  width: 100%;
  /* min-height: 100%; */
  margin-top: 3rem;
  display: grid;
  grid-gap: 1rem;
`;

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20vh;
`;

const EmptyImage = styled.img``;

const GetStartedContainer = styled.div`
  margin-top: 3rem;
  text-align: center;

  & p:nth-of-type(1) {
    font-weight: 700;
    font-size: var(--fontSizeXXL);
    margin-bottom: 2rem;
  }

  & p:nth-of-type(n + 2) {
    color: ${({ theme }) => theme.colors.textColorLight};
  }
`;

interface Props {
  isLoading: boolean;
  data: any;
}

export default function OverviewPage({ isLoading, data }: Props) {
  const [editActive, setEditActive] = useState<boolean>(false);

  return (
    <>
      <MainContainer>
        <HeaderContainer>
          <PageTitleContainer>
            <h1>Invoices</h1>
            <span>
              {!isLoading
                ? `There are ${data.length} total invoices`
                : "No Invoices"}
            </span>
          </PageTitleContainer>
          <OptionItemsContainer>
            <FilterContainer>
              <span>Filter by status</span>
              <ArrowImage src={arrowDown} />
            </FilterContainer>
            <PrimaryButtonAdd setEditActive={setEditActive}>
              New Invoice
            </PrimaryButtonAdd>
          </OptionItemsContainer>
        </HeaderContainer>

        <ContentContainer>
          {/* TODO: make more strict type for invoice */}
          {!isLoading && data.length > 0 ? (
            data.map((invoice: any) => {
              return (
                <InvoicePreview
                  key={invoice.id}
                  id={invoice.id}
                  paymentDue={invoice.paymentDue}
                  clientName={invoice.clientName}
                  total={invoice.total}
                  status={invoice.status}
                />
              );
            })
          ) : (
            <EmptyContainer>
              <EmptyImage src={illustrationEmpty} />
              <GetStartedContainer>
                <p>There is nothing here</p>
                <p>Create an invoice by clicking the</p>
                <p>
                  <strong>New Invoice</strong> button and get started
                </p>
              </GetStartedContainer>
            </EmptyContainer>
          )}
        </ContentContainer>
      </MainContainer>
      {editActive && (
        <EditInvoice variant="new" setEditActive={setEditActive} />
      )}
    </>
  );
}
