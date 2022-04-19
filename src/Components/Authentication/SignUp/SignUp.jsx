import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Facebook from "../../../Assets/Icons/fb.png";
import Google from "../../../Assets/Icons/google.png";
import auth from "../../../Firebase/Firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import "./SignUp.css";
import toast from "react-hot-toast";
import HelmetTitle from "../../HelmetTitle/HelmetTitle";

const SignUp = () => {
  const location = useLocation()
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

  const [updateProfile] = useUpdateProfile(auth);
  let spinner;

  let from = location.state?.from?.pathname || "/";


  useEffect(() => {
    if (user) {
      toast.success("Verification Mail Sent", { id: "test" });
      navigate(from);
    }
  }, [user, navigate, from]);

  // Function: Submit Form
  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password didn't match")
      return
    }
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ name });
    }
    console.log(user);
  };
  return (
    <div>
      <HelmetTitle title="Sign Up - Travel Guru" />
      {spinner ? (
        spinner
      ) : (
        <div>
          <div className="border rounded p-6 form-container">
            <h3 className="text-3xl font-semibold mt-3 mb-5 text-white">
              Sign Up
            </h3>
            <form onSubmit={onSubmitForm}>
              <input
                onChange={(e) => setName(e.target.value)}
                className="block outline-none w-full bg-transparent border-b mb-4 py-3 pl-4 text-lg text-white"
                type="text"
                name="name"
                placeholder="Name"
              />
              <input
                onBlur={(e) => setEmail(e.target.value)}
                className="block outline-none w-full bg-transparent border-b mb-4 py-3 pl-4 text-lg text-white"
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                onBlur={(e) => setPassword(e.target.value)}
                className="block outline-none w-full bg-transparent border-b mb-4 py-3 pl-4 text-lg text-white"
                type="password"
                name="password"
                placeholder="Password"
              />
              <input
                onBlur={(e) => setConfirmPassword(e.target.value)}
                className="block outline-none w-full bg-transparent border-b mb-4 py-3 pl-4 text-lg text-white"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
              />

              <input
                type="submit"
                value="Sign Up"
                className="block bg-yellow-500 w-full py-3 rounded text-xl mt-16"
              />
              <p className="text-white text-center mt-5 text-lg ">
                Already have an account?{" "}
                <Link className="text-yellow-500" to={"/login"}>
                  Log In
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
              <span className="text-lg ml-4 text-white">
                Continue with Google
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
