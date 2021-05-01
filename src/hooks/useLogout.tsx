import { useHistory } from 'react-router-dom';
import client from 'client';

export default function useLogout() {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('token');
    client.clearStore();
    history.push('/login');
  };

  return { logout };
}
