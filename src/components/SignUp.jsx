import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setUser } from "../store/slice/userSlice";
import { db } from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import Form from "./Form";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignup = (email, password, firstName, lastName) => {
    const auth = getAuth();
    try {
      createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
            firstName: firstName,
            lastName: lastName,
          })
        );
        setDoc(doc(db, "Users", user.uid), {
          firstName: firstName,
          lastName: lastName,
        });
        navigate("/");
      });
    } catch (error) {
      console.error("Error adding document");
    }
  };

  return <Form title="sign up" onAuth={handleSignup} showBio={true} />;
}

export default SignUp;
