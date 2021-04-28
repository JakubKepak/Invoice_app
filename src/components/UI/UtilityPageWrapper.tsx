import styled from "styled-components";
import { device } from "breakpoints";

const MainContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
  color: ${({ theme }) => theme.colors.mainFontColor};
`;

const DisplayImage = styled.img`
  width: 40vw;
  max-width: 400px;

  @media ${device.xs} {
    width: 50vw;
  }
`;

const MessageContainer = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

export default function UtilityPageWrapper({ image, children }: any) {
  return (
    <MainContainer>
      <DisplayImage src={image} />
      <MessageContainer>{children}</MessageContainer>
    </MainContainer>
  );
}
