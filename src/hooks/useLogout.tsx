import { useHistory } from "react-router-dom";

export default function useLogout() {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return { logout };
}
