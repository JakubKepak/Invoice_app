import styled from 'styled-components';
import { device } from 'breakpoints';

export const MainContainer = styled.div`
  width: 70%;

  @media ${device.sm} {
    width: 95%;
  }

  @media ${device.sm} {
    margin-top: 5rem;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PageTitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  & h1 {
    color: ${({ theme }) => theme.colors.mainFontColor};
  }

  & span {
    color: ${({ theme }) => theme.colors.textColorLight};
    font-size: 0.8rem;
    margin-top: 0.4rem;
  }
`;

export const OptionItemsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  color: ${({ theme }) => theme.colors.mainFontColor};

  & span {
    font-weight: 700;
  }
`;

export const ArrowImage = styled.img`
  margin-left: 0.5rem;
`;

export const ContentContainer = styled.div`
  width: 100%;
  /* min-height: 100%; */
  margin-top: 3rem;
  display: grid;
  grid-gap: 1rem;
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20vh;
  color: ${({ theme }) => theme.colors.mainFontColor};
`;

export const EmptyImage = styled.img``;

export const GetStartedContainer = styled.div`
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
