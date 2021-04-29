import { useField } from "formik";
import * as S from "components/EditInvoice/Styles";

export const CustomTextField = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <S.InputFieldContainer>
      <S.InputLabel htmlFor={props.id || props.name}>{label}</S.InputLabel>
      <S.InputField error={meta.error} {...field} {...props} />
      {meta.touched && meta.error ? (
        <S.FormErrorMessage data-test="form-input-filed-error-message">
          {meta.error}
        </S.FormErrorMessage>
      ) : null}
    </S.InputFieldContainer>
  );
};

export const CustomFropDownField = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <S.InputFieldContainer>
      <S.InputLabel htmlFor={props.id || props.name}>{label}</S.InputLabel>
      <S.DropdownField error={meta.error} {...field} {...props}>
        <option value={1}>Net 1 Day</option>
        <option value={7}>Net 7 Days</option>
        <option value={14}>Net 14 Days</option>
        <option value={30}>Net 30 Days</option>
      </S.DropdownField>
      {meta.touched && meta.error ? (
        <S.FormErrorMessage>{meta.error}</S.FormErrorMessage>
      ) : null}
    </S.InputFieldContainer>
  );
};

export const CustomDatePickerField = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <S.InputFieldContainer>
      <S.InputLabel htmlFor={props.id || props.name}>{label}</S.InputLabel>
      <S.InputField error={meta.error} {...field} {...props} />
      {meta.touched && meta.error ? (
        <S.FormErrorMessage>{meta.error}</S.FormErrorMessage>
      ) : null}
    </S.InputFieldContainer>
  );
};
