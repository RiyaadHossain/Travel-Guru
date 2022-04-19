
import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Facebook from "../../../Assets/Icons/fb.png";
import Google from "../../../Assets/Icons/google.png";
import auth from "../../../Firebase/Firebase.init";
import HelmetTitle from "../../HelmetTitle/HelmetTitle";

const LogIn = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);
  
    useEffect(() => {
      if (user) {
        toast.success("Signed In", { id: "test" });
        navigate("/");
      }
    }, [user, navigate]);
  
  // Function: Sign in
  const onFormSubmit = async(e) => {
    e.preventDefault()
    await signInWithEmailAndPassword(email, password)

    // Not working the following code :(
    if (user) {
      navigate('/')
      toast.success("Signed In")
    }
  }
  return (
    <div>
      <HelmetTitle title="Log In - Travel Guru"/>
      <div className="border rounded p-6 form-container">
        <h3 className="text-3xl font-semibold mt-3 mb-5 text-white">Login</h3>
        <form onSubmit={onFormSubmit}>
          <input
            onBlur={(e) => setEmail(e.target.value)}
            className="block outline-none w-full bg-transparent border-b mb-4 py-3 pl-4 text-lg"
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            onBlur={(e) => setPassword(e.target.value)}
            className="block outline-none w-full bg-transparent border-b mb-4 py-3 pl-4 text-lg"
            type="password"
            name="password"
            placeholder="Password"
          />
          <input type="checkbox" className="mt-3" id="scales" />
          <label for="scales" className="text-white ml-2 ">
            Remember Me
          </label>
          <input
            type="submit"
            value="Login"
            className="block bg-yellow-500 w-full py-3 rounded text-xl mt-16"
          />
          <p className="text-white text-center mt-5 text-lg ">
            Don't have an account?{" "}
            <Link className="text-yellow-500" to={"/signup"}>
              Create an account
            </Link>
          </p>
        </form>
      </div>
      <div className="flex items-center justify-center my-5">
        <div className="h-[2px] bg-slate-400 w-52"></div>
        <div>
          <span className="mx-3 text-white">Or</span>
        </div>
        <div className="h-[2px] bg-slate-400 w-52"></div>
      </div>
      <div className=" w-full">
        <button className="flex items-center border w-1/3 px-[6px] mb-3 py-1 rounded-full mx-auto">
          <img className="w-10" src={Facebook} alt="" />
          <span className="text-lg ml-4 text-white">
            Continue with Facebook
          </span>
        </button>
        <button className="flex items-center border w-1/3 px-[6px] py-1 rounded-full mx-auto">
          <img className="w-10" src={Google} alt="" />
          <span className="text-lg ml-4 text-white">Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default LogIn;
