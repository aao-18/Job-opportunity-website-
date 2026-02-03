import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const RecruterLogin = () => {
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [image, setImage] = useState(false);

  const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);

  const { setShowRecruterLogin } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (state == "Signup" && !isTextDataSubmitted) {
      setIsTextDataSubmitted(true);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className=" absolute top-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center vertical-center w-full h-full">
      <form
        onSubmit={onSubmitHandler}
        className=" relative bg-white p-10 rounded-xl text-slate-500"
      >
        <h1 className=" text-center text-2xl to-neutral-700 font-medium">
          Recruter {state}
        </h1>
        <p className=" text-sm">Welcome Back! Sign in to Continue</p>

        {state === "Signup" && isTextDataSubmitted ? (
          <>
            <div className="flex items-center gap-4 my-10">
              <label htmlFor="image">
                <img
                  className=" w-16 rounded-full"
                  src={image ? URL.createObjectURL(image) : assets.upload_area}
                  alt=""
                />
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  hidden
                  id="image"
                  accept="image/png, image/jpeg, image/webp"
                />
              </label>
              <p>
                Upload Company <br /> logo
              </p>
            </div>
          </>
        ) : (
          <>
            {state !== "Login" && (
              <div className="  border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
                <img src={assets.person_icon} alt="" />
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Company name"
                  required
                  className=" outline-none text-sm"
                />
              </div>
            )}
            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
              <img src={assets.email_icon} alt="" />
              <input
                className=" outline-none text-sm"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Company email"
                required
              />
            </div>
            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
              <img src={assets.lock_icon} alt="" />
              <input
                className=" outline-none text-sm"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                required
              />
            </div>
          </>
        )}
        {state === "Login" && (
          <p className=" text-blue-400 mt-4 ">
            <span className=" cursor-pointer">Forgot password?</span>
          </p>
        )}

        <button
          type="submit"
          className=" bg-blue-600 text-white py-2 rounded-full px-6 mt-4 cursor-pointer w-full"
        >
          {state === "Login"
            ? "login"
            : isTextDataSubmitted
              ? "create account"
              : "Next"}
        </button>
        {state === "Login" ? (
          <p className="mt-5 text-center ">
            Don't have an account?{" "}
            <span
              className=" text-blue-400 cursor-pointer"
              onClick={() => setState("Signup")}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center cursor-pointer">
            Already have an account?{" "}
            <span
              className=" text-blue-400 cursor-pointer"
              onClick={() => setState("Login")}
            >
              Login
            </span>
          </p>
        )}
        <img
          onClick={(e) => setShowRecruterLogin(false)}
          className=" absolute top-5 right-5 cursor-pointer"
          src={assets.cross_icon}
          alt=""
        />
      </form>
    </div>
  );
};

export default RecruterLogin;
