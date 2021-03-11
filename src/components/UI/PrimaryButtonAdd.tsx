import styled from "styled-components";

const MainContainer = styled.button`
  /* padding: 0.8rem 1.5rem; */
  border: none;
  padding: 0.8rem 1rem 0.8rem 3rem;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  color: #fff;
  font-family: inherit;
  cursor: pointer;
  position: relative;
  height: 2.7rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }
`;

const AddContainer = styled.div`
  position: absolute;
  left: 2px;
  top: 1px;
  background-color: #fff;
  border-radius: 50%;
  margin: 0.4rem;
  width: 1.8rem;
  height: 1.8rem;
  color: ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;

  & span {
    margin-top: 0.2rem;
  }
`;

export default function PrimaryButtonAdd({ children }: any) {
  return (
    <MainContainer>
      <AddContainer>
        <span>+</span>
      </AddContainer>
      {children}
    </MainContainer>
  );
}
