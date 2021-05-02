import { useState } from 'react';
import * as S from './FilterStyles';
import arrowDown from 'assets/icon-arrow-down.svg';

export default function Filter(): React.ReactElement {
  const [showFilter, setShowFilter] = useState<boolean>(false);

  return (
    <S.FilterContainer>
      <span>Filter</span>
      <S.ArrowImage src={arrowDown} />
      <S.FilterOptionContainer>
        <span>booo</span>
      </S.FilterOptionContainer>
    </S.FilterContainer>
  );
}
