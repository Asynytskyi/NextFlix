import { useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Logo from "../components/Logo";

export default function Home() {
  const [allMovies, setAllMovies] = useState([]);
  const [active, setActive] = useState(true);
  const isActive = (e) => {
    setActive(!active);
  };
  {
    isActive ? console.log("active") : console.log("false");
  }
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
