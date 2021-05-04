import * as S from './FilterOptionsStyles';

export default function FilterOptions(): React.ReactElement {
  const checkboxHandler = (e: any) => {
    console.log(e.target.checked);
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
          <S.FilterCheckbox type='checkbox' defaultChecked={true} />
          <S.FilterCheckboxCheckmark></S.FilterCheckboxCheckmark>
          Pending
        </S.FilterCheckboxLabel>
      </S.FilterOptionItem>

      <S.FilterOptionItem>
        <S.FilterCheckboxLabel>
          <S.FilterCheckbox type='checkbox' defaultChecked={true} />
          <S.FilterCheckboxCheckmark></S.FilterCheckboxCheckmark>
          Paid
        </S.FilterCheckboxLabel>
      </S.FilterOptionItem>
    </S.FilterOptionContainer>
  );
}
