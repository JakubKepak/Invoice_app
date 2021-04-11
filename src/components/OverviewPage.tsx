import { useState } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { device } from "breakpoints";

import PrimaryButtonAdd from "components/UI/PrimaryButtonAdd";

import arrowDown from "assets/icon-arrow-down.svg";
import illustrationEmpty from "assets/illustration-empty.svg";

// components
import InvoicePreview from "components/InvoicePreview/InvoicePreview";
import EditInvoice from "components/EditInvoice/EditInvoice";

const MainContainer = styled.div`
  width: 70%;

  @media ${device.xs} {
    width: 95%;
    margin-top: 5rem;
  }
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
  data: any;
}

export default function OverviewPage({ data }: Props) {
  const [editActive, setEditActive] = useState<boolean>(false);

  return (
    <>
      <MainContainer>
        <HeaderContainer>
          <PageTitleContainer>
            <h1>Invoices</h1>
            <span>
              {data.length > 0 ? `${data.length} invoices` : "No Invoices"}
            </span>
          </PageTitleContainer>
          <OptionItemsContainer>
            <FilterContainer>
              <span>Filter</span>
              <ArrowImage src={arrowDown} />
            </FilterContainer>
            <PrimaryButtonAdd setEditActive={setEditActive}>
              New
            </PrimaryButtonAdd>
          </OptionItemsContainer>
        </HeaderContainer>

        <ContentContainer>
          {/* TODO: make more strict type for invoice */}
          {data.length > 0 ? (
            data.map((invoice: any) => {
              return (
                <InvoicePreview
                  invoice={invoice}
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
      <AnimatePresence>
        {editActive && (
          <EditInvoice variant="new" setEditActive={setEditActive} />
        )}
      </AnimatePresence>
    </>
  );
}
