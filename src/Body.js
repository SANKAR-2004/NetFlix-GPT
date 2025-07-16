import Header from "./Header";
import Login from "./Login";
import { Outlet,useNavigate } from "react-router";
import { Provider } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { addUserData } from "../ReduxStore/userSlice";
import useOnline from "../Custom-Hooks/useOnline";

const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isOnline = useOnline();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { displayName, email, uid } = user;
        dispatch(
          addUserData({ displayName: displayName, email: email, uid: uid })
        );
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(addUserData(null));
        navigate("/");
      }
    });
  }, []);

  if (!isOnline) return <h1 className="text-2xl text-center">No Internet🚨</h1>;
    return (
      <div className="">
        <div className="absolute z-50 w-full">
          <Header />
        </div>
        <Outlet />
      </div>
    );
}
export default Body;