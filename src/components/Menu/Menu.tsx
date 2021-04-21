import logo from "assets/logo.svg";
import themeIconLight from "assets/icon-sun.svg";
import profilePicture from "assets/image-avatar.jpg";
import * as S from "./Styles";

export default function Menu({ themeToggle }: any) {
  return (
    <S.MainContainer>
      <S.LogoContainer>
        <S.Logo src={logo} alt="logo" />
        <S.LogoContainerShadow />
      </S.LogoContainer>
      <S.MenuSettingContainer>
        <S.ThemeIcon src={themeIconLight} onClick={themeToggle} />
        <S.ProfileIcon src={profilePicture} />
      </S.MenuSettingContainer>
    </S.MainContainer>
  );
}
