import { useSelector } from "react-redux";

function useAuth() {
  const { email, token, id } = useSelector((store) => store.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}

export { useAuth };
