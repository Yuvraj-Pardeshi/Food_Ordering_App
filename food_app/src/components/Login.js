import { useState, useRef } from "react";
import { checkValidate } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleClick = () => {
    const nameValue = name.current ? name.current.value : "";
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const message = checkValidate(nameValue, emailValue, passwordValue);
  
    if (message) {
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
  
    if (!isSignIn) {
      // Signup Logic
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/", { state: { message: "Sign up successful!" } });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(`${errorCode}: ${errorMessage}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/", { state: { message: "Sign in successful!" } });
        })
        .catch((error) => {
          toast.error("User not found - Invalid User Credential", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        });
    }
  };
  
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="w-3/12 p-10 m-2 bg-orange-500 mx-auto right-0 left-0 rounded-3xl text-center">
        <h2 className="font-bold text-white text-2xl p-2">{isSignIn ? "Sign In" : "Sign Up"}</h2>
        {!isSignIn && <input ref={name} type="text" placeholder="Full Name" className="w-full p-2 m-2 rounded-md border-none"></input>}
        <input ref={email} type="text" placeholder="Email Address" className="w-full p-2 m-2 rounded-md border-none"></input>
        <input ref={password} type="password" placeholder="Password" className="w-full p-2 m-2 rounded-md border-none"></input>
        <div className="pt-3">
          <button className="p-3 m-2 bg-yellow-300 rounded-lg" onClick={handleClick}>{isSignIn ? "Sign In" : "Sign Up"}</button>
        </div>
        <p className="mt-3 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn ? "New to Swiggy? Sign Up Now" : "Already registered? Sign In Now"}
        </p>
      </form>
      <ToastContainer />
    </>
  );
};

export default Login;
