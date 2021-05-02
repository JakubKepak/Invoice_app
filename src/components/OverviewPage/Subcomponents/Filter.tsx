import { useState } from 'react';
import * as S from './FilterStyles';
import arrowDown from 'assets/icon-arrow-down.svg';

export default function Filter(): React.ReactElement {
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const toggleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <S.FilterContainer onClick={toggleShowFilter}>
      <span>Filter</span>
      <S.ArrowImage src={arrowDown} showFilter={showFilter} />
      <S.FilterOptionContainer>
        <span>booo</span>
      </S.FilterOptionContainer>
    </S.FilterContainer>
  );
}
