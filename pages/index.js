import { useState, useEffect } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Logo from "../components/Logo";
import userService from "../api/platforms/services/user.js";

export default function Home() {
  const [allMovies, setAllMovies] = useState([]);
  const [active, setActive] = useState(true);
  const [favorite, setFavorite] = useState([]);
  const [user, setUser] = useState(null);

  const isActive = (e) => {
    setActive(!active);
  };

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("user_data")));
  }, []);

  const addFavorite = (movieId) => {
    if (movieId && window) {
      if (!user.favorites.includes(movieId)) {
        const userFavorites = user.favorites;
        userFavorites.push(movieId);
        userService.setUser({ ...user, favorites: userFavorites });
        window.localStorage.setItem(
          "user_data",
          JSON.stringify({ ...user, favorites: userFavorites })
        );
      } else {
        const userFavorites = user.favorites;
        const movieIdIndex = userFavorites.indexOf(movieId);
        userFavorites.splice(movieIdIndex, 1);
        userService.setUser({ ...user, favorites: userFavorites });
        window.localStorage.setItem(
          "user_data",
          JSON.stringify({ ...user, favorites: userFavorites })
        );
      }
    }
  };

  return (
    <div className="mx-auto flex flex-col items-center gap-y-20 pb-40">
      <div>
        <Header
          requireMovies={setAllMovies}
          isActive={isActive}
          filter_num={0}
        />
      </div>

      <div className="pt-44">
        {allMovies?.length > 0 ? (
          <main className="container flex flex-wrap justify-center gap-x-12 gap-y-14">
            {allMovies.map((movie, index) => {
              return (
                <Card
                  addFavorite={(id) => addFavorite(id)}
                  fav={favorite}
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
          <Logo className="logo-loading" />
        )}
      </div>
    </div>
  );
}
