import { useState } from 'react';
import * as S from './FilterStyles';
import arrowDown from 'assets/icon-arrow-down.svg';

export default function Filter(): React.ReactElement {
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const toggleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <S.FilterContainer>
      <S.FilterButton onClick={toggleShowFilter}>
        <span>Filter</span>
        <S.ArrowImage src={arrowDown} showFilter={showFilter} />
      </S.FilterButton>
      {showFilter && (
        <S.FilterOptionContainer>
          <S.FilterOptionItem>
            <S.FilterCheckboxLabel>
              <S.FilterCheckbox type='checkbox' />
              <S.FilterCheckboxCheckmark></S.FilterCheckboxCheckmark>
              Draft
            </S.FilterCheckboxLabel>
          </S.FilterOptionItem>

          <S.FilterOptionItem>
            <S.FilterCheckboxLabel>
              <S.FilterCheckbox type='checkbox' />
              <S.FilterCheckboxCheckmark></S.FilterCheckboxCheckmark>
              Pending
            </S.FilterCheckboxLabel>
          </S.FilterOptionItem>

          <S.FilterOptionItem>
            <S.FilterCheckboxLabel>
              <S.FilterCheckbox type='checkbox' />
              <S.FilterCheckboxCheckmark></S.FilterCheckboxCheckmark>
              Paid
            </S.FilterCheckboxLabel>
          </S.FilterOptionItem>
        </S.FilterOptionContainer>
      )}
    </S.FilterContainer>
  );
}
