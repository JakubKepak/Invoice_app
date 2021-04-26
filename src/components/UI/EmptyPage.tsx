import styled from "styled-components";
import illustrationEmpty from "assets/empty.svg";
import { device } from "breakpoints";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.mainFontColor};
`;

const EmptyImage = styled.img`
  width: 40vw;

  @media ${device.xs} {
    width: 50vw;
  }
`;

const EmptyMessage = styled.div`
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

export default function EmptyPage() {
  return (
    <MainContainer>
      <EmptyImage src={illustrationEmpty} />
      <EmptyMessage>
        <p>There is nothing here</p>
        <p>Create an invoice by clicking the</p>
        <p>
          <strong>New Invoice</strong> button and get started
        </p>
      </EmptyMessage>
    </MainContainer>
  );
}
