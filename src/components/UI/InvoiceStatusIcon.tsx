import styled from "styled-components";

const StatusContainer = styled.div<{ status: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  width: 6rem;
  font-size: 0.6rem;
  font-weight: 700;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.textColorLight};
  text-transform: capitalize;

  & span:nth-of-type(1) {
    display: block;
    border-radius: 50%;
    width: 7px;
    height: 7px;
    margin-right: 0.4rem;
  }

  ${(props) =>
    props.status.toLowerCase() === "paid" &&
    `
    background-color: ${props.theme.colors.statusPaidBackground};
    color: ${props.theme.colors.statusPaid};

    & span:nth-of-type(1) {
    background-color: ${props.theme.colors.statusPaid};
  }
  `};
  ${(props) =>
    props.status.toLowerCase() === "pending" &&
    `
    background-color: ${props.theme.colors.statusPendingBackground};
    color: ${props.theme.colors.statusPending};

    & span:nth-of-type(1) {
    background-color: ${props.theme.colors.statusPending};
  }
  `};
  ${(props) =>
    props.status.toLowerCase() === "draft" &&
    `
    background-color: ${props.theme.colors.statusDraftBackground};
    color: ${props.theme.colors.statusDraft};

    & span:nth-of-type(1) {
    background-color: ${props.theme.colors.statusDraft};
  }
  `};
`;

interface Props {
  status: string;
  children: string;
}

export default function InvoiceStatusIcon({ status, children }: Props) {
  return (
    <StatusContainer status={status}>
      <span></span>
      <span>{children}</span>
    </StatusContainer>
  );
}
