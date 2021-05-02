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
            <S.FilterCheckbox id='filter-paid' type='checkbox' />
            <S.FilterCheckboxLabel htmlFor='filter-paid'>
              Paid
            </S.FilterCheckboxLabel>
          </S.FilterOptionItem>
          <S.FilterOptionItem>
            <S.FilterCheckbox id='filter-pending' type='checkbox' />
            <S.FilterCheckboxLabel htmlFor='filter-pending'>
              Pending
            </S.FilterCheckboxLabel>
          </S.FilterOptionItem>
          <S.FilterOptionItem>
            <S.FilterCheckbox id='filter-draft' type='checkbox' />
            <S.FilterCheckboxLabel htmlFor='filter-draft'>
              Draft
            </S.FilterCheckboxLabel>
          </S.FilterOptionItem>
        </S.FilterOptionContainer>
      )}
    </S.FilterContainer>
  );
}
