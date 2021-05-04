import React, { useContext } from 'react';
import { InvoicesContext } from 'contexts/InvoicesContext';
import * as S from './FilterOptionsStyles';

export default function FilterOptions(): React.ReactElement {
  const { addFilter, removeFilter } = useContext(InvoicesContext);

  const checkboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.parentElement !== null) {
      const payload = e.target.parentElement.innerText.toUpperCase();
      e.target.checked ? addFilter(payload) : removeFilter(payload);
    }
  };

  return (
    <S.FilterOptionContainer>
      <S.FilterOptionItem>
        <S.FilterCheckboxLabel>
          <S.FilterCheckbox
            type='checkbox'
            defaultChecked={true}
            onChange={(e) => checkboxHandler(e)}
          />
          <S.FilterCheckboxCheckmark></S.FilterCheckboxCheckmark>
          Draft
        </S.FilterCheckboxLabel>
      </S.FilterOptionItem>

      <S.FilterOptionItem>
        <S.FilterCheckboxLabel>
          <S.FilterCheckbox
            type='checkbox'
            defaultChecked={true}
            onChange={(e) => checkboxHandler(e)}
          />
          <S.FilterCheckboxCheckmark></S.FilterCheckboxCheckmark>
          Pending
        </S.FilterCheckboxLabel>
      </S.FilterOptionItem>

      <S.FilterOptionItem>
        <S.FilterCheckboxLabel>
          <S.FilterCheckbox
            type='checkbox'
            defaultChecked={true}
            onChange={(e) => checkboxHandler(e)}
          />
          <S.FilterCheckboxCheckmark></S.FilterCheckboxCheckmark>
          Paid
        </S.FilterCheckboxLabel>
      </S.FilterOptionItem>
    </S.FilterOptionContainer>
  );
}
