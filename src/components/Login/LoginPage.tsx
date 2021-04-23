import styled from "styled-components";
import { Formik, Form } from "formik";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import { CustomTextField } from "components/UI/CustomInputFields";
import Button from "components/UI/Button";
import { LOGIN, REGISTER } from "queries/queries";

import Modal from "components/Modal";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.mainBackground};
  z-index: 2000;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.invoiceItemBackground};
  border-radius: var(--borderRadius);
  color: ${({ theme }) => theme.colors.mainFontColor};
  box-shadow: var(--boxShadow);
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const ErrorMessageContainer = styled.div`
  font-size: var(--fontSizeSmall);
  color: ${({ theme }) => theme.colors.warnButton};
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

const SignUpCTAContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  font-size: var(--fontSizeXS);
  color: ${({ theme }) => theme.colors.textColorLight};

  span {
    font-weight: 700;
    margin-left: 0.2rem;
    color: ${({ theme }) => theme.colors.darkPurple};
  }
`;

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("required"),
  password: Yup.string().required("required"),
  passwordConfirm: Yup.string().test(
    "match",
    "passwords has to match",
    function (passwordConfirm) {
      return passwordConfirm === this.parent.password;
    }
  ),
});

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("login required"),
});

interface Props {
  variant: "LOGIN" | "SIGNUP";
}

export default function LoginPage({ variant }: Props) {
  const query = variant === "LOGIN" ? LOGIN : REGISTER;

  const [handleUser, { loading, error }] = useMutation(query);

  const history = useHistory();

  return (
    <Modal>
      <MainContainer>
        <ModalContainer>
          <Formik
            initialValues={{
              username: "",
              password: "",
              passwordConfirm: "",
            }}
            validationSchema={variant === "SIGNUP" ? SignupSchema : LoginSchema}
            onSubmit={(values, actions) => {
              if (variant === "LOGIN") {
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
                    localStorage.setItem("token", token.data?.loginUser?.token);
                    history.push("/");
                  } catch (err) {}
                })();
              }

              if (variant === "SIGNUP") {
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
                    localStorage.setItem(
                      "token",
                      token.data?.registerUser?.token
                    );
                    history.push("/");
                  } catch (err) {
                    console.log(err);
                  }
                })();
              }

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
                />
                <CustomTextField
                  id="password"
                  name="password"
                  type="password"
                  label="password"
                  value={props.values.password}
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
                <ButtonContainer>
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
                </ButtonContainer>
              </Form>
            )}
          </Formik>
          {variant === "LOGIN" && (
            <SignUpCTAContainer>
              Don't have an account?
              <Link to="/signup">
                <span>Sign up.</span>
              </Link>
            </SignUpCTAContainer>
          )}
          {variant === "SIGNUP" && (
            <SignUpCTAContainer>
              Already have an account?
              <Link to="/login">
                <span>Log in.</span>
              </Link>
            </SignUpCTAContainer>
          )}
          {error && (
            <ErrorMessageContainer>{error.message}</ErrorMessageContainer>
          )}
        </ModalContainer>
      </MainContainer>
    </Modal>
  );
}
