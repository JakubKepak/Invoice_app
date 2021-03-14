import styled from "styled-components";

const MainContainer = styled.button<{ variant?: string }>`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  color: #fff;
  font-family: inherit;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }

  ${(props) =>
    props.variant === "primary" &&
    `
    background-color: ${props.theme.colors.darkPurple};
    color: ${props.theme.colors.invoiceItemBackground};

    &:hover {
    background-color: ${props.theme.colors.lightPurple};
  }
  `};

  ${(props) =>
    props.variant === "warn" &&
    `
    background-color: ${props.theme.colors.warnButton};
    color: ${props.theme.colors.invoiceItemBackground};

    &:hover {
    background-color: ${props.theme.colors.warnButtonHover};
  }
  `};

  ${(props) =>
    props.variant === "secondary" &&
    `
    background-color: ${props.theme.colors.secondaryButtonBackground};
    color: ${props.theme.colors.secondaryButton};

    &:hover {
    background-color: ${props.theme.colors.secondaryButtonHover};
  }
  `};

  ${(props) =>
    props.variant === "dark" &&
    `
    background-color: ${props.theme.colors.mainFontColor};
    color: ${props.theme.colors.textColorLight};

    &:hover {
    background-color: ${props.theme.colors.secondaryButtonHover};
  }
  `};
`;

interface Props {
  variant: "primary" | "secondary" | "warn" | "dark";
  children?: any;
  setEditActive?: any;
}

export default function Button({ variant, children, setEditActive }: Props) {
  return (
    <MainContainer onClick={() => setEditActive(true)} variant={variant}>
      {children}
    </MainContainer>
  );
}
