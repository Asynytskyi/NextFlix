import { useState, useEffect, use } from "react";

import Card from "../components/Card";
import Header from "../components/Header";

export default function Home() {
  const [allMovies, setAllMovies] = useState([]);

  return (
    <div className="mx-auto flex flex-col items-center gap-y-20 pb-40">
      <Header requireMovies={setAllMovies} />
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
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </div>
  );
}
