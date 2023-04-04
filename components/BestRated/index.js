import cls from "classnames";
import { use, useState, useEffect } from "react";
import FavButton from "../FavoriteButton";

export default function BestRated(props) {
  const { imgURL, title, year, type, movieId, movieGenre, addFavorite } = props;
  const [favorite, setFavorite] = useState([]);
  const [isHover, setIsHover] = useState(false);
  const [id, setId] = useState(null);
  const [movie, setMovie] = useState({});
  const [genre, setGenre] = useState(null);
  const [user, setUser] = useState(null);
  const API_URL = `https://www.omdbapi.com/?i=${id}&apikey=a8fac808`;

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("user_data")));
  }, []);

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
            "bg-onyx": !isHover,
            "bg-transparent": isHover,
          }
        )}
      >
        <h4 className="text-sm tracking-widest font-light font-sans-serif">
          {type.toUpperCase()}
        </h4>
        <h3 className="text-beis text-xl font-bold font-sans line-clamp-2">
          {title}
        </h3>
      </figcaption>
      <div className="flex justify-center">
        <p
          className={cls(
            "text-beis text-base tracking-wide font-semibold font-sans opacity-80",
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
            "text-beis text-xl tracking-wide font-semibold font-sans opacity-80",
            {
              hidden: !isHover,
              "absolute top-52": isHover,
            }
          )}
        >
          {movie.imdbRating && <>{`${movie.imdbRating} / 10`}</>}
        </p>
      </div>
      <div
        className={cls("text-beis font-sans ", {
          hidden: !isHover,
          "absolute top-4 right-4": isHover,
        })}
      >
        {user && movie.imdbRating && (
          <FavButton
            key={movie.movieId}
            movie={movie}
            addFavorite={(movie) => addFavorite(movie)}
          />
        )}
      </div>
    </figure>
  );
}
