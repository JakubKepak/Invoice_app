import { useRef } from 'react';
import * as S from './FilterOptionsStyles';

import useOutsideClose from 'hooks/useOutsideClose';

export default function FilterOptions({ setClose }: any): React.ReactElement {
  const wrappedRef = useRef(null);
  useOutsideClose(wrappedRef, setClose);

  return (
    <S.FilterOptionContainer ref={wrappedRef}>
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
  );
}
