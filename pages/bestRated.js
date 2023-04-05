import { useState, useEffect } from "react";
import BestRated from "../components/BestRated";
import Header from "../components/Header";
import Logo from "../components/Logo";
import userService from "../api/platforms/services/user.js";

export default function Home() {
  const [allMovies, setAllMovies] = useState([]);
  const [allBestMovies, setAllBestMovies] = useState([]);
  const [active, setActive] = useState(true);
  const [favorite, setFavorite] = useState([]);
  const [user, setUser] = useState(null);

  const isActive = (e) => {
    setActive(!active);
  };

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("user_data")));
  }, []);

  const addFavorite = (movie) => {
    if (movie && window) {
      if (!user.favorites.includes(JSON.stringify(movie))) {
        const userFavorites = user.favorites;
        userFavorites.push(JSON.stringify(movie));
        window.localStorage.setItem(
          "user_data",
          JSON.stringify({ ...user, favorites: userFavorites })
        );
        userFavorites.map((u) => JSON.parse(u));
        userService.setUser({ ...user, favorites: userFavorites });
      } else {
        const userFavorites = user.favorites;
        const movieIndex = userFavorites.indexOf(JSON.stringify(movie));
        userFavorites.splice(movieIndex, 1);
        window.localStorage.setItem(
          "user_data",
          JSON.stringify({ ...user, favorites: userFavorites })
        );
        userFavorites.map((u) => JSON.parse(u));
        userService.setUser({ ...user, favorites: userFavorites });
      }
    }
  };

  return (
    <div className="mx-auto flex flex-col items-center gap-y-20 pb-40">
      <div>
        <Header
          requireMovies={setAllMovies}
          requireBestMovies={setAllBestMovies}
          isActive={isActive}
          filter_num={1}
        />
      </div>

      <div className="pt-44">
        {allBestMovies?.length > 0 ? (
          <main className="container flex flex-wrap justify-center gap-x-12 gap-y-14">
            {allBestMovies.map((movie, index) => {
              return (
                <BestRated
                  addFavorite={(movie) => addFavorite(movie)}
                  favorite={favorite}
                  setFavorite={setFavorite}
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
          <Logo className="logo-loading-sm sm:logo-loading" />
        )}
      </div>
    </div>
  );
}
