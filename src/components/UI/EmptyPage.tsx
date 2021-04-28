import styled from "styled-components";
import illustrationEmpty from "assets/empty.svg";
import UtilityPageWrapper from "components/UI/UtilityPageWrapper";

const EmptyMessage = styled.div`
  & p:nth-of-type(1) {
    font-weight: 700;
    font-size: var(--fontSizeXXL);
    margin-bottom: 2rem;
  }

  & p:nth-of-type(n + 2) {
    color: ${({ theme }) => theme.colors.textColorLight};
  }
`;

export default function EmptyPage() {
  return (
    <UtilityPageWrapper image={illustrationEmpty}>
      <EmptyMessage>
        <p>There is nothing here</p>
        <p>Create an invoice by clicking the</p>
        <p>
          <strong>New Invoice</strong> button and get started
        </p>
      </EmptyMessage>
    </UtilityPageWrapper>
  );
}
