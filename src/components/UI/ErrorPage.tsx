import styled from "styled-components";
import illustrationError from "assets/error.svg";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20vh;
  color: ${({ theme }) => theme.colors.mainFontColor};
`;

const ErrorImage = styled.img`
  width: 50vw;
`;

const MessageContainer = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

export default function ErrorPage({ error }: any) {
  console.log(error);

  return (
    <MainContainer>
      <ErrorImage src={illustrationError} />
      <MessageContainer>oh no! Something is broken.</MessageContainer>
    </MainContainer>
  );
}
