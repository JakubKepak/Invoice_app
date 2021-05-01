import styled from 'styled-components';
import { device } from 'breakpoints';

export const MainContainer = styled.div`
  width: 70%;

  @media ${device.sm} {
    width: 95%;
    margin: 5rem 0;
  }
`;

export const GoBackContainer = styled.div`
  margin-bottom: 2rem;
  font-weight: 700;
  font-size: var(--fontSizeSmall);

  span {
    color: ${({ theme }) => theme.colors.mainFontColor};
  }
`;

export const LeftArrowIcon = styled.img`
  margin-right: 1rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.invoiceDetailBackground};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};

  & span:nth-of-type(1) {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.textColorLight};
    margin-right: 1rem;
  }

  @media ${device.xs} {
    justify-content: space-between;
  }
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  margin-left: auto;

  @media ${device.xs} {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.invoiceItemBackground};
  }
`;

export const ContentContainer = styled.div`
  margin-top: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.invoiceDetailBackground};
  padding: 2rem;
  display: grid;
  grid-gap: 2rem;
`;

export const InvoiceHeaderContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;

  @media ${device.xs} {
    grid-auto-flow: row;
    grid-gap: 2rem;
  }
`;

export const IdContainer = styled.div`
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

export const AddressContainer = styled.div`
  color: ${({ theme }) => theme.colors.textColorLight};
  font-size: var(--fontSizeSmall);
  line-height: 1.3rem;
  text-align: right;

  @media ${device.xs} {
    text-align: left;
  }
`;

export const InvoiceDetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const DatesContainer = styled.div`
  margin-bottom: 2rem;

  & p:nth-of-type(3) {
    margin-top: 2rem;
  }
`;

export const BillToContainer = styled.div`
  & p:nth-of-type(n + 3) {
    color: ${({ theme }) => theme.colors.textColorLight};
    font-size: var(--fontSizeSmall);
    line-height: 1.2rem;
  }
`;

export const SentToContainer = styled.div``;

export const ItemLabel = styled.p`
  color: ${({ theme }) => theme.colors.textColorLight};
  font-size: var(--fontSizeSmall);
  margin-bottom: 0.5rem;
`;

export const ItemImportant = styled.p`
  color: ${({ theme }) => theme.colors.mainFontColor};
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const InvoiceItemsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.invoiceItemBackground};
  border-radius: var(--borderRadius);
`;

export const ItemsListContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  padding: 2rem;
  font-size: var(--fontSizeSmall);
`;
export const ItemContainerHeader = styled.div`
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

  @media ${device.xs} {
    display: none;
  }
`;

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 55% 15% 15% 15%;
  color: ${({ theme }) => theme.colors.mainFontColor};

  @media ${device.xs} {
    grid-template-columns: 5% 5% 35% 50%;
    grid-template-rows: repeat(2 1fr);
    grid-row-gap: 0.5rem;
    grid-template-areas:
      'name name name total'
      'qty multiplier price total';
  }

  & span:nth-of-type(1) {
    font-weight: 700;

    @media ${device.xs} {
      grid-area: name;
    }
  }

  & span:nth-of-type(2) {
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.colors.textColorLight};

    @media ${device.xs} {
      grid-area: qty;
      justify-content: flex-start;
    }
  }

  & span:nth-of-type(3) {
    color: ${({ theme }) => theme.colors.textColorLight};
    display: none;
    grid-area: multiplier;

    @media ${device.xs} {
      display: block;
    }
  }

  & span:nth-of-type(4) {
    color: ${({ theme }) => theme.colors.textColorLight};
    margin-left: auto;

    @media ${device.xs} {
      grid-area: price;
      margin-left: 0;
    }
  }

  & span:nth-of-type(5) {
    font-weight: 700;
    margin-left: auto;

    @media ${device.xs} {
      grid-area: total;
      align-self: center;
    }
  }
`;

export const TotalAmountContainer = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.invoiceTotalBackground};
  border-radius: 0 0 5px 5px;
  /* grid-area: total; */
`;

export const TotalAmount = styled.span`
  font-size: var(--fontSizeXXL);
  font-weight: 700;
  color: #fff;
`;
