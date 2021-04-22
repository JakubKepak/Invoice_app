import styled from "styled-components";
import { device } from "breakpoints";

export const MainContainer = styled.div`
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

  @media ${device.sm} {
    height: 100px;
    min-width: 100vw;
    width: 100%;
    border-radius: 0;
    flex-direction: row;
    min-height: 0;
  }
`;

export const LogoContainer = styled.div`
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

export const LogoContainerShadow = styled.div`
  position: absolute;
  bottom: 0;
  border-radius: 15px 0 15px 0;
  height: 50%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightPurple};
`;

export const Logo = styled.img`
  width: 50px;
  z-index: 1000;
`;

export const MenuSettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.sm} {
    flex-direction: row;
  }
`;

export const ThemeIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const ProfileIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 2rem 0 2rem 0;

  @media ${device.sm} {
    margin: 0 2rem 0 2rem;
  }
`;
