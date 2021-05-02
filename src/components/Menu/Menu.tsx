import { useState } from 'react';
import logo from 'assets/logo.svg';
import themeIconLight from 'assets/icon-sun.svg';
import profilePicture from 'assets/image-avatar.jpg';
import * as S from './Styles';
import useLogout from 'hooks/useLogout';

export default function Menu({ themeToggle }: any): React.ReactElement {
  const [userOptionActive, setUserOptionActive] = useState<boolean>(false);
  const { logout } = useLogout();

  const toggleUserOptionModal = () => {
    setUserOptionActive(!userOptionActive);
  };

  return (
    <S.MainContainer data-test='component-menu'>
      <S.LogoContainer>
        <S.Logo src={logo} alt='logo' />
        <S.LogoContainerShadow />
      </S.LogoContainer>
      <S.MenuSettingContainer>
        {userOptionActive && (
          <S.UserOptionContainer>
            <S.UserOptionItem onClick={logout}>Logout</S.UserOptionItem>
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
