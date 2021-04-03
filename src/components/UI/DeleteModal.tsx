import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalContainer = styled.div``;

export default function DeleteModal({ closeModal, children }: any) {
  return (
    <MainContainer>
      <ModalContainer>{children}</ModalContainer>
    </MainContainer>
  );
}
