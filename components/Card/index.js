import cls from "classnames";

import { useState } from "react";
export default function Card(props) {
  const { imgURL, title, year, type, movieId, movieGenre } = props;

  const [isHover, setIsHover] = useState(false);

  const [id, setId] = useState(null);
  const [movie, setMovie] = useState({});
  const [genre, setGenre] = useState(null);

  const API_URL = `https://www.omdbapi.com/?i=${id}&apikey=a8fac808`;

  async function search() {
    setGenre(movieGenre);
    setId(movieId);
    try {
      const response = await fetch(`${API_URL}`);
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <figure
      onMouseOver={() => {
        search();
        setIsHover(true);
      }}
      onMouseLeave={() => setIsHover(false)}
      className={cls("relative w-80 h-auto transition-all duration-200", {
        "scale-105": isHover,
      })}
    >
      <div className="object-cover">
        <img
          className={cls("w-full h-full rounded-lg", {
            "opacity-40": isHover,
          })}
          src={imgURL}
        />
      </div>
      <figcaption
        className={cls(
          "absolute right-0 bottom-0 left-0 h-28 rounded-b-lg px-6 py-4",
          {
            onyx: !isHover,
            "bg-transparent": isHover,
          }
        )}
      >
        <h4 className=" text-sm tracking-widest font-light font-sans-serif">
          {type.toUpperCase()}
        </h4>
        <h3 className="beis text-xl font-bold font-sans line-clamp-2">
          {title}
        </h3>
      </figcaption>
      <p
        className={cls(
          "beis text-base tracking-wide font-semibold font-sans opacity-80",
          {
            hidden: !isHover,
            "absolute top-4 left-6": isHover,
          }
        )}
      >
        {year}
      </p>
      <p
        className={cls(
          "beis text-base tracking-wide font-semibold font-sans opacity-80",
          {
            hidden: !isHover,
            "absolute top-4 right-6": isHover,
          }
        )}
      >
        {movie.imdbRating && <>{`${movie.imdbRating} / 10`}</>}
        {/* {movie.Genre} */}
      </p>
    </figure>
  );
}
