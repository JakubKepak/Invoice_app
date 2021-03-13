import styled from "styled-components";

export const MainContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
`;

export const InvisibleContainer = styled.div`
  height: 100%;
  width: 50%;
`;

export const InputAreaContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: white;
  border-radius: 0 15px 15px 0;
  padding: 2rem 2rem 2rem 8rem;
`;

export const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputField = styled.input`
  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.borderColorLight};
  border-radius: 5px;
  width: 100%;
  margin-bottom: 0.5rem;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.mainFontColor};
  font-weight: 700;
  font-size: var(--fontSizeSmall);
`;

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.colors.textColorLight};
  font-size: var(--fontSizeSmall);
  margin-bottom: 0.3rem;
`;

export const SectionName = styled.p`
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.darkPurple};
  font-weight: 700;
  font-size: var(--fontSizeSmall);
`;

export const FormSectionBillFrom = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);

  & ${InputFieldContainer}:nth-of-type(1) {
    grid-column: span 3;
  }
`;

export const FormSectionBillTo = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);

  & ${InputFieldContainer}:nth-last-of-type(n + 4) {
    grid-column: span 3;
  }
`;

export const FormSectionInvoiceInfo = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  & ${InputFieldContainer}:nth-last-of-type(1) {
    grid-column: span 2;
  }
`;

export const FormSectionInvoiceItems = styled.div``;

export const InvoiceItemContainer = styled.div`
  display: grid;
  grid-template-columns: 45% 2fr 5fr 5fr 1fr;
  grid-gap: 0.8rem;
`;

export const InvoiceItemLabel = styled.span`
  color: ${({ theme }) => theme.colors.textColorLight};
  font-size: var(--fontSizeSmall);
`;

export const InvoiceItemTotalContainer = styled.div`
  font-weight: 700;
  font-size: var(--fontSizeSmall);
  color: ${({ theme }) => theme.colors.textColorLight};
  display: flex;
  align-items: center;
`;

export const DeleteInvoiceItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeleteInvoiceItemIcon = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

export const AddNewInvoiceItemButton = styled.button``;
