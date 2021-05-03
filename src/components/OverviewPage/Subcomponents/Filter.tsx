import { useState } from 'react';
import * as S from './FilterStyles';
import arrowDown from 'assets/icon-arrow-down.svg';
import FilterOptions from './FilterOptions';

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
      {showFilter && <FilterOptions setClose={setShowFilter} />}
    </S.FilterContainer>
  );
}
