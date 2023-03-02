import { useState } from "react";
import IconComponent from "../Icon";
import cls from "classnames";

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
      <IconComponent
        className={cls({
          "text-beis stroke-current fill-transparent": !active,
          "text-beis fill-current stroke-current": active,
        })}
        name={"favorite"}
      />
    </button>
  );
}
