import { useState } from "react";
import logo from "assets/logo.svg";
import themeIconLight from "assets/icon-sun.svg";
import profilePicture from "assets/image-avatar.jpg";
import * as S from "./Styles";

export default function Menu({ themeToggle }: any) {
  const [userOptionActive, setUserOptionActive] = useState<boolean>(false);

  const toggleUserOptionModal = () => {
    setUserOptionActive(!userOptionActive);
  };

  return (
    <S.MainContainer>
      <S.LogoContainer>
        <S.Logo src={logo} alt="logo" />
        <S.LogoContainerShadow />
      </S.LogoContainer>
      <S.MenuSettingContainer>
        {userOptionActive && (
          <S.UserOptionContainer>
            <S.UserOptionItem>Logout</S.UserOptionItem>
          </S.UserOptionContainer>
        )}
        <S.ThemeIcon src={themeIconLight} onClick={themeToggle} />
        <S.ProfileIcon
          src={profilePicture}
          onClick={() => toggleUserOptionModal()}
        />
      </S.MenuSettingContainer>
    </S.MainContainer>
  );
}
