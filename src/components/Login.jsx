import { useDispatch } from "react-redux";
import { setUser } from "../store/slice/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import Form from "./Form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch(() => alert("Invalid user!"));
  };

  return <Form title="log in" onAuth={handleLogin} showBio={false} />;
}

export default Login;
