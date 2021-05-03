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
  left: -50%;
  display: grid;
  grid-gap: 0.3rem;
  position: absolute;
  top: 200%;
  background-color: ${({ theme }) => theme.colors.invoiceItemBackground};
  padding: 1rem;
  border-radius: var(--borderRadius);
  box-shadow: var(--boxShadow);
`;

export const FilterOptionItem = styled.div``;

export const FilterCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const FilterCheckboxCheckmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: ${({ theme }) => theme.colors.optionCheckboxBackground};
  border-radius: var(--borderRadius);

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;

export const FilterCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  height: 24px;
  padding-left: 30px;
  color: ${({ theme }) => theme.colors.mainFontColor};
  font-weight: 700;
  cursor: pointer;
  user-select: none;

  & ${FilterCheckbox} ~ ${FilterCheckboxCheckmark} {
    border: 2px solid transparent;
  }

  &:hover ${FilterCheckbox} ~ ${FilterCheckboxCheckmark} {
    border: 2px solid ${({ theme }) => theme.colors.darkPurple};
  }

  & ${FilterCheckbox}:checked ~ ${FilterCheckboxCheckmark} {
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }

  & ${FilterCheckboxCheckmark}:after {
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  & ${FilterCheckbox}:checked ~ ${FilterCheckboxCheckmark}:after {
    display: block;
  }
`;
