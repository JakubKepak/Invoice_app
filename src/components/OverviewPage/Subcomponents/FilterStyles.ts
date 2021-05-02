import styled from 'styled-components';

export const FilterContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 1rem;
  color: ${({ theme }) => theme.colors.mainFontColor};

  & span {
    font-weight: 700;
  }
`;

export const ArrowImage = styled.img<{ showFilter: boolean }>`
  margin-left: 0.5rem;
  transition: all 0.5s;

  ${(props) =>
    props.showFilter &&
    `
        transform: rotate(180deg);
      `}
`;

export const FilterOptionContainer = styled.div`
  position: absolute;
  top: 200%;
  background-color: ${({ theme }) => theme.colors.backgroundColorLight};
  padding: 0.5rem;
  border-radius: var(--borderRadius);
  box-shadow: var(--boxShadow);
`;
