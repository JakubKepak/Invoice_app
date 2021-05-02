import styled from 'styled-components';

export const FilterContainer = styled.div`
  position: relative;
`;

export const FilterButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  color: ${({ theme }) => theme.colors.mainFontColor};
  cursor: pointer;

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
  width: 10rem;
  left: -50%;
  display: grid;
  grid-gap: 0.3rem;
  position: absolute;
  top: 200%;
  background-color: ${({ theme }) => theme.colors.backgroundColorLight};
  padding: 1rem;
  border-radius: var(--borderRadius);
  box-shadow: var(--boxShadow);
`;

export const FilterOptionItem = styled.div``;

export const FilterCheckbox = styled.input``;

export const FilterCheckboxLabel = styled.label`
  color: ${({ theme }) => theme.colors.mainFontColor};
  font-weight: 700;
  margin-left: 0.3rem;
`;
