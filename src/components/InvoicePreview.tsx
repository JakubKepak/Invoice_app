import styled from "styled-components";
import { Link } from "react-router-dom";

// components
import InvoiceStatusIcon from "./UI/InvoiceStatusIcon";

// helpers
import { fromatDate, addCommaSeparator } from "../helpers/helpers";

// assets
import iconRight from "../assets/icon-arrow-right.svg";

const MainContainer = styled.div`
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  padding: 0.7rem 1rem 0.7rem 2rem;
  border-radius: 5px;
  box-shadow: 10px 10px 10px -10px rgba(72, 84, 159, 0.1);
  background-color: ${({ theme }) => theme.colors.invoiceItemBackground};
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.darkPurple};
  }
`;

const IdContainer = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.mainFontColor};

  & span {
    font-weight: 500;
  }
`;

const DueDateContainer = styled.span`
  color: ${({ theme }) => theme.colors.textColorLight};
  margin-left: 3rem;
  font-size: 0.8rem;
`;

const ClientNameContainer = styled.span`
  color: ${({ theme }) => theme.colors.textColorLight};
  margin-left: 3rem;
  font-size: 0.8rem;
`;

const TotalContainer = styled.span`
  color: ${({ theme }) => theme.colors.mainFontColor};
  font-weight: 700;
  margin-left: auto;
`;

const InvoiceStatusIconContainer = styled.div`
  height: 100%;
  margin-left: 3rem;
  display: flex;
  align-items: center;
`;

const ArrowIconRight = styled.img`
  width: 0.5rem;
  height: 0.6rem;
  margin-left: 1rem;
`;

interface Props {
  invoice: any;
  id: string;
  paymentDue: string;
  clientName: string;
  total: number;
  status: string;
}

export default function InvoicePreview({
  invoice,
  id,
  paymentDue,
  clientName,
  total,
  status,
}: Props) {
  return (
    <Link to={{ pathname: `/${id}`, state: invoice }} key={id}>
      <MainContainer>
        <IdContainer>
          <span>#</span>
          {id}
        </IdContainer>
        <DueDateContainer>Due {fromatDate(paymentDue)}</DueDateContainer>
        <ClientNameContainer>{clientName}</ClientNameContainer>
        <TotalContainer>{`£ ${addCommaSeparator(total)}`}</TotalContainer>
        <InvoiceStatusIconContainer>
          <InvoiceStatusIcon status={status}>{status}</InvoiceStatusIcon>
        </InvoiceStatusIconContainer>
        <ArrowIconRight src={iconRight} />
      </MainContainer>
    </Link>
  );
}
