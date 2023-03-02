import { use, useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "../components/Logo";
import IconComponent from "../components/Icon";
import authService from "../api/platforms/services/auth";

export default function SignIn() {
  const [isFocusEmail, setFocusEmail] = useState(false);
  const [isFocusPass1, setFocusPass1] = useState(false);
  const [isFocusPass2, setFocusPass2] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const envelope = useRef(null);
  const lock = useRef(null);

  function emailIsValid() {
    return email && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  }

  function handleSignUp(email, password) {
    authService
      .signUpWithEmailAndPassword(email, password)
      .then((res) => {
        console.log("User signed up successfully");
      })
      .catch((err) => {
        console.log({ err });
        if (err.code.includes("already-in-use")) {
          // this.error = "Oops, email already in use. Try again.";
        }
      });
  }

  function handleSignInWithGoogle() {
    authService
      .signInWithGoogle()
      .then((res) => {
        console.log("User signed in with google");
        console.log({ res });
        router.push("/");
      })
      .catch((err) => {
        console.log({ err });
      });
  }

  return (
    <div className="flex h-screen">
      <div className="login-left flex justify-center w-full">
        <div className="flex flex-col w-2/5 h-auto px-10 pt-6 pb-6 mt-12 mb-10 bg-PSea bg-opacity-75 border-4 border-PSea rounded-2xl">
          <Logo className="top-80 logo-sign-in mb-6 mt-2" />
          <h1 className="text-2xl tracking-wider font-bold mb-4">
            Create account
          </h1>
          <h2 className="text-slate-400 mb-8">Please sign in to continue.</h2>
          <div className="flex flex-col justify-center gap-6">
            <div className="relative">
              <input
                id="email"
                type="email"
                ref={envelope}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onFocus={() => {
                  setFocusEmail("email");
                }}
                onBlur={() => {
                  setFocusEmail(false);
                }}
                required={true}
                className={`w-full placeholder-gray-500 rounded-2xl bg-opacity-50 pl-4 h-14 duration-500 ${
                  emailIsValid() === true && isFocusEmail === false
                    ? "bg-ww bg-opacity-20"
                    : isFocusEmail
                    ? "bg-PBg"
                    : "bg-gray-700"
                }`}
                placeholder={isFocusEmail ? "" : "Insert Email"}
              />
              <IconComponent
                onClick={() => {
                  envelope.current.focus();
                }}
                className={`absolute duration-500 delay-100 ${
                  email.length > 0
                    ? emailIsValid() === true
                      ? "right-4 top-4 fill-green-300 "
                      : "right-4 top-4 fill-red-300"
                    : isFocusEmail
                    ? "right-4 top-4 fill-gray-300"
                    : "right-56 w-10 h-8 top-3"
                }`}
                name="envelope"
              />
              {/* <p>{error === "" ? "" : error}</p> */}
            </div>
            <div className="relative">
              <input
                id="password1"
                type="password"
                ref={lock}
                value={password1}
                onChange={(e) => {
                  setPassword1(e.target.value);
                }}
                onFocus={() => {
                  setFocusPass1("password");
                }}
                onBlur={() => setFocusPass1(false)}
                required={true}
                className={`w-full placeholder-gray-500 rounded-2xl bg-opacity-50 pl-4 h-14 duration-500 ${
                  password1.length >= 6 && isFocusPass1 === false
                    ? "bg-ww bg-opacity-20"
                    : isFocusPass1
                    ? "bg-PBg"
                    : "bg-gray-700"
                }`}
                placeholder={isFocusPass1 ? "" : "Insert Password"}
              />
              <IconComponent
                onClick={() => {
                  lock.current.focus();
                }}
                className={`absolute duration-500 delay-100 ${
                  password1.length > 0
                    ? password1.length >= 6
                      ? "right-4 top-4 fill-green-300"
                      : "right-4 top-4 fill-red-300"
                    : isFocusPass1
                    ? "right-4 top-4 fill-gray-300"
                    : "right-56 w-10 h-8 top-3"
                }`}
                name="lock"
              />
            </div>
            <div className="relative">
              <input
                id="password2"
                type="password"
                ref={lock}
                value={password2}
                onChange={(e) => {
                  setPassword2(e.target.value);
                }}
                onFocus={() => {
                  setFocusPass2("password");
                }}
                onBlur={() => setFocusPass2(false)}
                required={true}
                className={`w-full placeholder-gray-500 rounded-2xl bg-opacity-50 pl-4 h-14 duration-500 ${
                  password2.length >= 6 && isFocusPass2 === false
                    ? "bg-ww bg-opacity-20"
                    : isFocusPass2
                    ? "bg-PBg"
                    : "bg-gray-700"
                }`}
                placeholder={isFocusPass2 ? "" : "Insert Password"}
              />
              <IconComponent
                onClick={() => {
                  lock.current.focus();
                }}
                className={`absolute duration-500 delay-100 ${
                  password2.length > 0
                    ? password2.length >= 6 && password2 === password1
                      ? "right-4 top-4 fill-green-300"
                      : "right-4 top-4 fill-red-300"
                    : isFocusPass2
                    ? "right-4 top-4 fill-gray-300"
                    : "right-56 w-10 h-8 top-3"
                }`}
                name="lock"
              />
            </div>
          </div>
          <div className="relative h-full">
            <div className="flex flex-col items-center gap-4 mb-2 mt-12 ">
              <button
                onClick={() => {
                  handleSignUp;
                }}
                className={`text-lg delay-100 duration-300 w-72 h-12 rounded-full tracking-wide font-bold py-2 ${
                  password2.length >= 6 && emailIsValid() === true
                    ? "bg-Birus text-PBg"
                    : "text-gray-400 border-2 border-gray-500 cursor-not-allowed"
                }`}
              >
                SIGN UP
              </button>
              <button
                onClick={handleSignInWithGoogle}
                className="flex justify-center items-center font-bold tracking-wider gap-3 text-PBg bg-Birus h-12 w-72 rounded-3xl"
              >
                Continue with Google
                <IconComponent name="google" />
              </button>
            </div>
            <div className="absolute left-0 bottom-0 flex gap-1">
              <h3 className="text-slate-400">Already have an account?</h3>{" "}
              <Link
                href={"/sign-in"}
                className="text-Birus font-bold underline"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
