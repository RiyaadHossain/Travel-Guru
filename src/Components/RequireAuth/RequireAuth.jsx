import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  let location = useLocation();
  const [sendEmailVerification] = useSendEmailVerification(auth);

  if (loading) {
    return <p className="text-5xl text-white text-center pt-40">Loading...</p>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user.emailVerified) {
    return (
      <div className="flex justify-center items-center h-[62vh] ">
        <div className="text-center">
          <p className="text-red-400 font-bold text-4xl">
            Your Email isn't verified.
          </p>
          <button
            onClick={async () => {
              await sendEmailVerification();
              alert("Sent email");
            }}
            className="bg-lime-500 mt-5  py-1 px-5 rounded text-white font-semibold"
          >
            Sent Verification Mail
          </button>
        </div>
      </div>
    );
  }

  return children;
};

export default RequireAuth;
