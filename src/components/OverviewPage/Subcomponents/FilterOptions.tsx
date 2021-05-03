import * as S from './FilterOptionsStyles';

export default function FilterOptions(): React.ReactElement {
  return (
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
  );
}
