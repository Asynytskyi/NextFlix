import { useState, useEffect } from "react";
import IconComponent from "../Icon";
import cls from "classnames";

export default function FavButton({ movie, addFavorite }) {
  function isFavorite(movie) {
    const user = window && JSON.parse(window.localStorage.getItem("user_data"));
    return user && user.favorites.includes(JSON.stringify(movie));
  }

  return (
    movie && (
      <button
        onClick={() => {
          {
            addFavorite(movie);
          }
        }}
      >
        <IconComponent
          className={cls({
            "text-beis stroke-current fill-transparent": !isFavorite(movie),
            "text-beis fill-current stroke-current": isFavorite(movie),
          })}
          name={"favorite"}
        />
      </button>
    )
  );
}
