import { useState } from "react";
import IconFullFavorite from "../IconFullFavorite";
import IconEmptyFavorite from "../IconEmptyFavorite";

export default function FavButton() {
  const [active, setActive] = useState(false);
  const [favorite, setFavorite] = useState([]);
  console.log(favorite.length);
  const addFavorite = () => {
    setFavorite((arr) => [...arr, `${arr.length}`]);
  };
  const setAct = () => {
    setActive(!active);
  };

  return (
    <button
      onClick={() => {
        addFavorite();
        setAct();
      }}
    >
      {active ? <IconFullFavorite /> : <IconEmptyFavorite />}
    </button>
  );
}
