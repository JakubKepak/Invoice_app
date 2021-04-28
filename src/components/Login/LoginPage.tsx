import { Formik, Form } from "formik";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import * as S from "./Styles";
import { SignupSchema, LoginSchema } from "helpers/FormValidationSchemas";

import { CustomTextField } from "components/UI/CustomInputFields";
import Button from "components/UI/Button";
import { LOGIN, REGISTER } from "queries/queries";

import Modal from "components/Modal";

interface Props {
  variant: "LOGIN" | "SIGNUP";
}

export default function LoginPage({ variant }: Props) {
  const query = variant === "LOGIN" ? LOGIN : REGISTER;

  const [handleUser, { loading, error }] = useMutation(query);

  const history = useHistory();

  return (
    <Modal>
      <S.MainContainer>
        <S.ModalContainer>
          <Formik
            initialValues={{
              username: "",
              password: "",
              passwordConfirm: "",
            }}
            validationSchema={variant === "SIGNUP" ? SignupSchema : LoginSchema}
            onSubmit={(values, actions) => {
              (async () => {
                try {
                  const token = await handleUser({
                    variables: {
                      input: {
                        username: values.username,
                        password: values.password,
                      },
                    },
                  });
                  localStorage.setItem("token", token.data?.data?.token);
                  history.push("/");
                } catch (err) {}
              })();

              actions.setSubmitting(false);
            }}
          >
            {(props) => (
              <Form>
                <CustomTextField
                  id="username"
                  name="username"
                  type="text"
                  label="username"
                  value={props.values.username}
                  data-test="component-login-username"
                />
                <CustomTextField
                  id="password"
                  name="password"
                  type="password"
                  label="password"
                  value={props.values.password}
                  data-test="component-login-password"
                />
                {variant === "SIGNUP" && (
                  <CustomTextField
                    id="passwordConfirm"
                    name="passwordConfirm"
                    type="password"
                    label="confirm password"
                    value={props.values.passwordConfirm}
                  />
                )}
                <S.ButtonContainer data-test="component-loginButton">
                  {variant === "SIGNUP" && (
                    <Button type="submit" variant="primary" disabled={loading}>
                      {loading ? (
                        <span>Signing up ...</span>
                      ) : (
                        <span>Sign up</span>
                      )}
                    </Button>
                  )}
                  {variant === "LOGIN" && (
                    <Button type="submit" variant="primary" disabled={loading}>
                      {loading ? (
                        <span>Logging in ...</span>
                      ) : (
                        <span>Login</span>
                      )}
                    </Button>
                  )}
                </S.ButtonContainer>
              </Form>
            )}
          </Formik>
          {variant === "LOGIN" && (
            <S.SignUpCTAContainer>
              Don't have an account?
              <Link to="/signup">
                <span>Sign up.</span>
              </Link>
            </S.SignUpCTAContainer>
          )}
          {variant === "SIGNUP" && (
            <S.SignUpCTAContainer>
              Already have an account?
              <Link to="/login">
                <span>Log in.</span>
              </Link>
            </S.SignUpCTAContainer>
          )}
          {error && (
            <S.ErrorMessageContainer data-test="component-login-error-message">
              {error.message}
            </S.ErrorMessageContainer>
          )}
        </S.ModalContainer>
      </S.MainContainer>
    </Modal>
  );
}
