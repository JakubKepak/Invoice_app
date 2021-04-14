import styled from "styled-components";
import { Formik, Form } from "formik";

import { CustomTextField } from "components/UI/CustomInputFields";

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

export default function LoginPage() {
  return (
    <Modal>
      <MainContainer>
        <ModalContainer>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={(values, actions) => {
              console.log(values);
              actions.setSubmitting(false);
            }}
          >
            {(props) => (
              <Form>
                <CustomTextField
                  id="username"
                  name="username"
                  type="text"
                  label="Username"
                  value={props.values.username}
                />
                <CustomTextField
                  id="password"
                  name="password"
                  type="password"
                  label="password"
                  value={props.values.password}
                />
              </Form>
            )}
          </Formik>
        </ModalContainer>
      </MainContainer>
    </Modal>
  );
}
