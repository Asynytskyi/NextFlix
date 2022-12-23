import { useState, useEffect, use } from "react";

import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import Logo from "../components/Logo";
import Hamburger from "../components/IconHamburger";
import Close from "../components/IconClose";
import MenuComponents from "../components/MenuComponents";
import Navbar from "../components/Navbar";

export default function Home() {
  const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=a8fac808";

  const [movies, setMovies] = useState([]);
  const [active, setActive] = useState(false);

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

  return (
    <div className="mx-auto flex flex-col items-center gap-y-20 pb-40">
      <Navbar>
        <Logo />
        <div className="w-2/3 opacity-60">
          <SearchBar
            movies={movies}
            onChange={(name) => {
              searchMovies(name);
            }}
          />
        </div>
        <button
          className="flex items-center justify-center w-6.4375"
          onClick={() => setActive(!active)}
        >
          {active ? <Close /> : <Hamburger />}
        </button>
      </Navbar>
      <nav>{active ? <MenuComponents /> : <></>}</nav>
      <div>
        {movies?.length > 0 ? (
          <main className="container flex flex-wrap justify-center gap-x-12 gap-y-14">
            {movies.map((movie, index) => {
              return (
                <Card
                  title={movie.Title}
                  year={movie.Year}
                  imgURL={movie.Poster}
                  type={movie.Type}
                  movieId={movie.imdbID}
                  movieGenre={movie.Genre}
                  key={index}
                />
              );
            })}
          </main>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </div>
  );
}
