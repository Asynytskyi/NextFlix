import { useState, useEffect } from "react";

import Logo from "../Logo";
import Menu from "../IconMenu";
import MenuComponents from "../MenuComponents";
import SearchBar from "../SearchBar";

const Header = ({ requireMovies }) => {
  const [movies, setMovies] = useState([]);
  const [active, setActive] = useState(false);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [defaultScrollY, setDefaultScrollY] = useState(200);

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
  useEffect(() => {
    searchMovies("Batman");
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
        <div>{show ? <Logo /> : <></>}</div>
        <div className={`w-2/3 opacity-60 ${show ? "" : "hidden"}`}>
          <SearchBar
            movies={movies}
            onChange={(name) => {
              searchMovies(name);
            }}
          />
        </div>
        <button
          className="flex items-center justify-center "
          onClick={() => setActive(!active)}
        >
          {show ? (
            <Menu className={`${active ? "btnActive" : "btnDis"}`} />
          ) : (
            <></>
          )}
        </button>
        <nav>
          <MenuComponents
            className={`
            menu-bg-image menu-components align-center border-l-2 border-[var(--bg)] fixed right-0 top-20 duration-1000 ${
              active
                ? "h-screen w-56 rounded-none menu-transition "
                : "w-0 h-0 rounded-bl-full"
            }`}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
