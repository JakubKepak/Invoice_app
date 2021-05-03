import { useRef, useState } from 'react';
import * as S from './FilterStyles';
import arrowDown from 'assets/icon-arrow-down.svg';
import FilterOptions from './FilterOptions';
import useOutsideClose from 'hooks/useOutsideClose';

export default function Filter(): React.ReactElement {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const wrappedRef = useRef(null);
  useOutsideClose(wrappedRef, setShowFilter);

  const toggleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <S.FilterContainer ref={wrappedRef}>
      <S.FilterButton onClick={toggleShowFilter}>
        <span>Filter</span>
        <S.ArrowImage src={arrowDown} showFilter={showFilter} />
      </S.FilterButton>
      {showFilter && <FilterOptions />}
    </S.FilterContainer>
  );
}
