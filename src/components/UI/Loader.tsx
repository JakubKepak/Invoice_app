import styled, { keyframes } from 'styled-components';

const MainContainer = styled.div`
  height: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
`;

const SpinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 5px solid transparent;
  border-top: 5px solid ${({ theme }) => theme.colors.darkPurple};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${SpinAnimation} 0.5s linear infinite;
`;

export default function Loader() {
  return (
    <MainContainer>
      <Spinner />
    </MainContainer>
  );
}
