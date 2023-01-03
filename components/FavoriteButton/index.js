import { useState } from "react";
import IconFullFavorite from "../IconFullFavorite";
import IconEmptyFavorite from "../IconEmptyFavorite";

export default function FavButton({ movie, addFavorite }) {
  const [active, setActive] = useState(false);
  //const [favorite, setFavorite] = useState([]);

  const setAct = () => {
    setActive(!active);
  };

  return (
    <button
      onClick={() => {
        addFavorite(movie);
        setAct();
      }}
    >
      {active ? <IconFullFavorite /> : <IconEmptyFavorite />}
    </button>
  );
}
