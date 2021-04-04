import { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "../UI/Button";
import {useMutation} from "@apollo/client"


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.invoiceItemBackground};
  border-radius: var(--borderRadius);
  color: ${({ theme }) => theme.colors.mainFontColor};
`;

const Header = styled.h1`
  font-size: 1.5rem;
`;

const ContentContainer = styled.div`
  margin: 1rem 0;
  color: ${({ theme }) => theme.colors.textColorLight};
`;

const ButtonsContainer = styled.div`
  margin-left: auto;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.5rem;
`;

interface Props {
  closeModal: any;
  children: any;
}

export default function DeleteModal({ closeModal, children }: Props) {


  return (
    <MainContainer onClick={closeModal}>
      <ModalContainer
        key={"deleteModal"}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <Header>Confirm Deletion</Header>
        <ContentContainer>{children}</ContentContainer>
        <ButtonsContainer>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="warn">Delete</Button>
        </ButtonsContainer>
      </ModalContainer>
    </MainContainer>
  );
}
