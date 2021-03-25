import styled from "styled-components";

import logo from "../assets/logo.svg";
import themeIconLight from "../assets/icon-sun.svg";
import profilePicture from "../assets/image-avatar.jpg";

const MainContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100px;
  background-color: ${({ theme }) => theme.colors.menuBackground};
  border-radius: 0 15px 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  position: fixed;

  @media (max-width: 600px) {
    height: 100px;
    width: 100vw;
    border-radius: 0;
    flex-direction: row;
    min-height: 0;
  }
`;

const LogoContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  border-radius: 0 15px 15px 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoContainerShadow = styled.div`
  position: absolute;
  bottom: 0;
  border-radius: 15px 0 15px 0;
  height: 50%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightPurple};
`;

const Logo = styled.img`
  width: 50px;
  z-index: 1000;
`;

const MenuSettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: row;
  }
`;

const ThemeIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const ProfileIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 2rem 0 2rem 0;

  @media (max-width: 600px) {
    margin: 0 2rem 0 2rem;
  }
`;

export default function Menu() {
  return (
    <MainContainer>
      <LogoContainer>
        <Logo src={logo} alt="logo" />
        <LogoContainerShadow />
      </LogoContainer>
      <MenuSettingContainer>
        <ThemeIcon src={themeIconLight} />
        <ProfileIcon src={profilePicture} />
      </MenuSettingContainer>
    </MainContainer>
  );
}
