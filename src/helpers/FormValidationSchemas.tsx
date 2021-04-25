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

export const EditSchema = Yup.object().shape({
  // providerStreetAddress: Yup.string().required("Required"),
  // providerCity: Yup.string().required("Required"),
  // providerPostalCode: Yup.string().required("Required"),
  // providerCountry: Yup.string().required("Required"),
  // clientsName: Yup.string().required("Required").min(2, "Too Short!"),
  // clientsEmail: Yup.string().required("Required"),
  // clientsStreetAddress: Yup.string().required("Required"),
  // clientCity: Yup.string().required("Required"),
  // clientPostalCode: Yup.string().required("Required"),
  // clientCountry: Yup.string().required("Required"),
  // invoiceDate: Yup.string().required("Required"),
  // paymentTerms: Yup.string().required("Required"),
  // description: Yup.string().required("Required"),
});
