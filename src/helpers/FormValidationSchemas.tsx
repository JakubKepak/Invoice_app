import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
  passwordConfirm: Yup.string().test(
    "match",
    "passwords has to match",
    function (passwordConfirm) {
      return passwordConfirm === this.parent.password;
    }
  ),
});

export const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Passwor is required"),
});
