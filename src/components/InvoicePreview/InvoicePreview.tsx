// import styled from "styled-components";
import { Link } from 'react-router-dom';
import * as S from './Styles';

// components
import InvoiceStatusIcon from 'components/UI/InvoiceStatusIcon';

// helpers
import { fromatDate, addCommaSeparator } from 'helpers/helpers';

// assets
import iconRight from 'assets/icon-arrow-right.svg';

interface Props {
  id: string;
  paymentDue: string;
  clientName: string;
  total: number;
  status: string;
}

export default function InvoicePreview({
  id,
  paymentDue,
  clientName,
  total,
  status,
}: Props): React.ReactElement {
  return (
    <Link to={`/${id}`} key={id}>
      <S.MainContainer>
        <S.IdContainer>
          <span>#</span>
          {id}
        </S.IdContainer>
        <S.DueDateContainer>Due {fromatDate(paymentDue)}</S.DueDateContainer>
        <S.ClientNameContainer>{clientName}</S.ClientNameContainer>
        <S.TotalContainer>{`£ ${addCommaSeparator(total)}`}</S.TotalContainer>
        <S.InvoiceStatusIconContainer>
          <InvoiceStatusIcon status={status}>{status}</InvoiceStatusIcon>
        </S.InvoiceStatusIconContainer>
        <S.ArrowIconRight src={iconRight} />
      </S.MainContainer>
    </Link>
  );
}
