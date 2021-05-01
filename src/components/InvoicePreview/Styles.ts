import styled from 'styled-components';
import { device } from 'breakpoints';

export const MainContainer = styled.div`
  border: 1px solid transparent;
  /* display: flex; */
  display: grid;
  grid-template-columns: 15% 19% 19% 29% 15% 3%;
  justify-items: start;
  align-items: center;
  padding: 0.7rem 1rem 0.7rem 2rem;
  border-radius: 5px;
  box-shadow: 10px 10px 10px -10px rgba(72, 84, 159, 0.1);
  background-color: ${({ theme }) => theme.colors.invoiceItemBackground};
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;
  flex-wrap: wrap;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.darkPurple};
  }

  @media ${device.xs} {
    padding: 1rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 2rem 1rem 1rem;
    grid-row-gap: 0.5rem;
    grid-template-areas:
      'id name'
      'date status'
      'total status';
  }
`;

export const IdContainer = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.mainFontColor};

  & span {
    font-weight: 500;
  }

  @media ${device.xs} {
    grid-area: id;
    padding-bottom: 1.5rem;
  }
`;

export const DueDateContainer = styled.span`
  color: ${({ theme }) => theme.colors.textColorLight};
  font-size: 0.8rem;

  @media ${device.xs} {
    grid-area: date;
  }
`;

export const ClientNameContainer = styled.span`
  color: ${({ theme }) => theme.colors.textColorLight};
  font-size: 0.8rem;

  @media ${device.xs} {
    grid-area: name;
    justify-self: right;
    padding-bottom: 1.5rem;
  }
`;

export const TotalContainer = styled.span`
  color: ${({ theme }) => theme.colors.mainFontColor};
  font-weight: 700;
  margin-left: auto;

  @media ${device.xs} {
    grid-area: total;
    margin-left: 0;
  }
`;

export const InvoiceStatusIconContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-self: center;

  @media ${device.xs} {
    grid-area: status;
    justify-self: right;
  }
`;

export const ArrowIconRight = styled.img`
  width: 0.5rem;
  height: 0.6rem;
  margin-left: 1rem;

  @media ${device.xs} {
    display: none;
  }
`;
