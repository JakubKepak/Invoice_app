import { useHistory } from 'react-router-dom';
import client from 'client';

export default function useLogout() {
  const history = useHistory();

  const logout = async () => {
    await client.clearStore();
    history.push('/login');
    localStorage.removeItem('token');
  };

  return { logout };
}
