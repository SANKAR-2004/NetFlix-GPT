import React, { useEffect } from 'react';
import Header from './Header';
import { useState, useRef,useEffect } from 'react';
import { validateData } from '../utils/validateData';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addUserData } from '../ReduxStore/userSlice';

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMsg, setErrMsg] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
  const fullname = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();
  
  function googleSignIn() {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }  


    function handleSubmit() {
        const error = validateData(email.current.value, password.current.value);
        if (error) {
            setErrMsg(error);
            return;
        }
        else { setErrMsg(null); };

        if (!isSignIn) {
            //Sign Up logic
            console.log("INSIDE SIGN UP");
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
              .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
              })
              .catch((error) => {
                const errorCode = error.code;
                  const errorMessage = error.message;
                  setErrMsg(errorMessage);
                  console.log(errorMessage);
                // ..
              });
        } else {
            //Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
              .then((userCredential) => {
                // Signed in
                  const user = userCredential.user;
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                  const errorMessage = error.message;
                  setErrMsg(errorMessage);
              });   
        }
    }

    return (
      <div className=" relative h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg')]">
        <div className="h-screen w-full bg-black/50 absolute"></div>
        <div className="absolute">
          
        </div>

        <div className="absolute z-10 w-full h-full flex items-center justify-center">
          <form
            className="w-96 text-white p-6 shadow-lg bg-black/70"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <h2 className="text-3xl font-bold my-4">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h2>
            {!isSignIn && (
              <input
                ref={fullname}
                className="w-full px-4 py-3 my-4 outline-none border-2 border-gray-500"
                type="text"
                placeholder="Full Name"
              />
            )}
            <input
              ref={email}
              className="w-full px-4 py-3 my-4 outline-none border-2 border-gray-500"
              type="text"
              placeholder="Email"
            />
            <input
              ref={password}
              className="w-full px-4 py-3 my-4 outline-none border-2 border-gray-500"
              type="password"
              placeholder="Password"
            />
            <p className="text-red-500 font-bold text-base">{errorMsg}</p>
            <button
              onClick={handleSubmit}
              className="cursor-pointer bg-red-500 font-bold w-full px-4 py-3 my-4 outline-none"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <button onClick={googleSignIn} className="cursor-pointer bg-green-500 font-bold w-full px-4 py-3 my-4 outline-none">
              Continue with Google
            </button>
            
            <p className="text-gray-400/80 mt-6">
              {isSignIn ? "New to Netflix?" : "Already Have an Account?"}
              <span
                className="cursor-pointer my-4 font-bold text-white"
                onClick={() => {
                  setIsSignIn(!isSignIn);
                }}
              >
                {isSignIn ? "Sign Up " : "Sign In "}now
              </span>
            </p>
          </form>
        </div>
      </div>
    );
}

export default Login;