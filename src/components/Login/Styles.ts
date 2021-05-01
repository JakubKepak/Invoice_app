import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.mainBackground};
  z-index: 2000;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.invoiceItemBackground};
  border-radius: var(--borderRadius);
  color: ${({ theme }) => theme.colors.mainFontColor};
  box-shadow: var(--boxShadow);
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const ErrorMessageContainer = styled.div`
  font-size: var(--fontSizeSmall);
  color: ${({ theme }) => theme.colors.warnButton};
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

export const SignUpCTAContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  font-size: var(--fontSizeXS);
  color: ${({ theme }) => theme.colors.textColorLight};

  span {
    font-weight: 700;
    margin-left: 0.2rem;
    color: ${({ theme }) => theme.colors.darkPurple};
  }
`;
