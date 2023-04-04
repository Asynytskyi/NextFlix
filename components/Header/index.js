import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Logo from "../Logo";
import Menu from "../IconMenu";
import MenuComponents from "../MenuComponents";
import SearchBar from "../SearchBar";
import Link from "next/link";

const Header = ({ requireMovies, requireBestMovies, isActive, filter_num }) => {
  const [movies, setMovies] = useState([]);
  const [active, setActive] = useState(false);
  const filter = ["Batman", "Lego", ""];
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [defaultScrollY, setDefaultScrollY] = useState(200);
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("user_data")));
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

  const getMovieRating = async (id) => {
    const API_URL = `https://www.omdbapi.com/?i=${id}&apikey=a8fac808`;
    const response = await fetch(`${API_URL}`);
    const movie = await response.json();
    return movie.imdbRating;
  };

  useEffect(() => {
    searchMovies(filter[filter_num]);
  }, []);

  useEffect(() => {
    requireMovies(movies);
  }, [movies]);

  useEffect(() => {
    requireBestMovies(movies);
  }, [movies]);

  useEffect(() => {
    let newMovies = [];
    (async () => {
      for (const movie of movies) {
        newMovies.push({
          ...movie,
          rating: await getMovieRating(movie.imdbID),
        });
      }
    })()
      .then((res) => {
        newMovies.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
        newMovies = newMovies.filter((movie) => parseFloat(movie.rating) > 8.0);
        requireBestMovies(newMovies);
      })
      .catch((err) => console.error(err));
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
        className={`border-b-2 border-[var(--bg)] backdrop-blur-xl fixed top-0 right-0 left-0 z-20 w-full h-20 flex flex-row items-center justify-between px-2 md:px-10 transition-opacity ${
          show ? "opacity-100 duration-500" : "opacity-0 -z-10"
        }`}
      >
        <div>
          {show ? (
            <Link href={"/"}>
              <Logo className="hidden md:block logo-main" />
            </Link>
          ) : (
            <></>
          )}
        </div>
        <div
          className={`border rounded-full border-gray-600 w-full md:w-2/3 opacity-60 ${
            show ? "" : "hidden"
          }`}
        >
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
        <div className="flex justify-around lg:gap-4">
          <button className="mx-2" onClick={() => setActive(!active)}>
            {show ? (
              <Menu className={`${active ? "btnActive" : "btnDis"}`} />
            ) : (
              <></>
            )}
          </button>
          {!user && (
            <button
              // className="fixed right-10 top-6 z-40 hidden lg:block"
              className="hidden lg:block"
              onClick={() => {
                router.push("/sign-in");
              }}
            >
              Sign In
            </button>
          )}
        </div>
        <aside>
          <MenuComponents activeState={active} isActive={isActive} />
        </aside>
      </div>
    </header>
  );
};

export default Header;
