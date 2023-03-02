import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Logo from "../Logo";
import Menu from "../IconMenu";
import MenuComponents from "../MenuComponents";
import SearchBar from "../SearchBar";
import IconComponent from "../Icon";
import Link from "next/link";

const Header = ({ requireMovies, isActive, filter_num }) => {
  const [movies, setMovies] = useState([]);
  const [active, setActive] = useState(false);
  const filter = ["Batman", "Lego", ""];
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [defaultScrollY, setDefaultScrollY] = useState(200);
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("user_data")));
    console.log({ user });
  }, []);

  const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=a8fac808";

  async function searchMovies(title) {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search);
    } catch (error) {
      console.log(error);
    }
  }

  // Default onfirstload search
  /* useEffect(() => {
    if (isActive) searchMovies(filter[1]);
    else {
      searchMovies(filter[0]);
    }
  }, []); */

  useEffect(() => {
    searchMovies(filter[filter_num]);
  }, []);

  useEffect(() => {
    requireMovies(movies);
  }, [movies]);

  const controlHeader = () => {
    active ? setDefaultScrollY(9999) : setDefaultScrollY(200);

    if (typeof window !== "undefined") {
      window.scrollY > lastScrollY && window.scrollY > defaultScrollY
        ? // if scroll down hide the navbar
          setShow(false)
        : // if scroll up show the navbar
          setShow(true);

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <header>
      <div
        className={`border-b-2 border-[var(--bg)] backdrop-blur-xl fixed top-0 right-0 left-0 z-20 w-full h-20 flex flex-row items-center justify-between px-10 transition-opacity ${
          show ? "opacity-100 duration-500" : "opacity-0 -z-10"
        }`}
      >
        <div>
          {show ? (
            <Link href={"/"}>
              <Logo className="logo-main" />
            </Link>
          ) : (
            <></>
          )}
        </div>
        <div className={`w-2/3 opacity-60 ${show ? "" : "hidden"}`}>
          <SearchBar
            movies={movies}
            onChange={(name) => {
              if (name !== "") {
                searchMovies(name);
              } else if (name === "") {
                searchMovies(filter[filter_num]);
              }
            }}
          />
        </div>
        <button onClick={() => setActive(!active)}>
          {show ? (
            <Menu className={`${active ? "btnActive" : "btnDis"}`} />
          ) : (
            <></>
          )}
        </button>
        <aside>
          <MenuComponents activeState={active} isActive={isActive} />
        </aside>
      </div>
      {!user && (
        <button
          className="fixed right-10 top-6 z-40"
          onClick={() => {
            router.push("/sign-in");
          }}
        >
          Sign In
        </button>
      )}
    </header>
  );
};

export default Header;
