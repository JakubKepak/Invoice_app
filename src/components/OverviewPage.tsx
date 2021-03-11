import styled from "styled-components";
import { useQuery } from "react-query";

import PrimaryButtonAdd from "./UI/PrimaryButtonAdd";

import arrowDown from "../assets/icon-arrow-down.svg";

// components
import InvoicePreview from "./InvoicePreview";

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
  min-height: 100%;
  margin-top: 3rem;
  display: grid;
  grid-gap: 1rem;
`;

interface Props {
  isLoading: boolean;
  data: any;
}

export default function OverviewPage({ isLoading, data }: Props) {
  return (
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
          <PrimaryButtonAdd>New Invoice</PrimaryButtonAdd>
        </OptionItemsContainer>
      </HeaderContainer>

      <ContentContainer>
        {/* TODO: make more strict type for invoice */}
        {!isLoading &&
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
          })}
      </ContentContainer>
    </MainContainer>
  );
}
