import { useState, useEffect, use } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import IconComponent from "../Icon";
import authService from "../../api/platforms/services/auth.js";

export default function MenuComponents({ activeState, isActive }) {
  const [active, setActive] = useState("home");
  const { pathname } = useRouter();
  const router = useRouter();

  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("user_data")));
  }, []);
  // console.log({ user });

  function handleSignOut() {
    authService
      .signOut()
      .then(() => {
        window.localStorage.removeItem("user_data");
        router.push("/");
        window.location.reload();
      })
      .catch((err) => {
        console.log({ err });
        if (err.code.includes("OOps, something went wrong...")) {
          // this.error = "Oops, email already in use. Try again.";
        }
      });
  }

  const data = [
    { id: "", href: "/", name: "Home", delay: "delay-1" },
    {
      id: "bestRated",
      href: "/bestRated",
      name: "Best Rated",

      delay: "delay-2",
    },
    { id: "etc", href: "", name: "etc.", delay: "delay-3" },
  ];

  useEffect(() => {
    setActive(pathname.split("/")[1]);
  }, []);
  return (
    <div
      className={`
    menu-bg-image-bef align-center border-l-2 border-[var(--bg)] fixed -right-20 top-20 duration-1000 ${
      activeState
        ? "h-screen w-72 menu-bg-image-aft text-white"
        : "w-0 h-0 rounded-bl-full"
    }`}
    >
      <ul className="pt-0.125">
        {data.map((item, i) => (
          <li
            className={`duration-700 cursor-pointer ${
              activeState
                ? `${item.delay} visible translate-x-0`
                : "translate-x-28 invisible"
            }`}
            key={i}
          >
            <Link href={item.href} legacyBehavior>
              <a
                onClick={() => {
                  isActive();
                  setActive(item.id);
                }}
                href={item.link}
                className={`delay-100 duration-300 relative w-full text-xl font-bold line-clamp-2 hover:scale-110 hover:text-white hover:px-8 px-6 mt-6 hover:before:left-0.688 hover:before:h-full hover:before:w-0.313 hover:before:text-transparent hover:before:bg-lPurple before:absolute ${
                  active === item.id
                    ? "text-white before:h-full before:w-0.313 before:left-0.688 px-8 scale-110 before:bg-lPurple before:border-lPurple before:border-r-1 before:shadow-slugActive"
                    : "text-beton"
                }`}
              >
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div
        className={`duration-500 cursor-pointer ${
          activeState ? "delay-1000 translate-x-0" : "translate-x-80"
        }`}
      >
        {user && (
          <button
            onClick={handleSignOut}
            className={`w-48 flex justify-center gap-2 items-center duration-300 text-xl font-bold hover:scale-110 text-beton hover:text-white absolute top-30 ${
              activeState ? "right-20" : "hidden"
            }`}
          >
            Sign Out
            <IconComponent className="" name="signOut" />
          </button>
        )}
      </div>
    </div>
  );
}
