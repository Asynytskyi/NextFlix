import { useRef } from "react";
import IconComponent from "../Icon";

export default function SearchBar(props) {
  const { onChange, movies } = props;

  const ref = useRef(null);
  const searchIconClick = () => {
    ref.current.focus();
  };

  const onChangeInput = (value) => {
    onChange(value);
  };
  return (
    <div className="flex items-center bg-obsidian rounded-full h-10 w-auto">
      <input
        ref={ref}
        className="px-4 bg-transparent rounded-full w-full h-auto font-base text-base font-sans tracking-wider text-white placeholder:text-beton"
        placeholder="Search for movies"
        onChange={(e) => onChangeInput(e.target.value)}
      />
      {movies?.length > 0 ? (
        <button onClick={searchIconClick}>
          <IconComponent
            className={"stroke-orange-600 w-6 h-6 mr-3"}
            name={"search"}
          />
        </button>
      ) : (
        <IconComponent className="w-10 h-10 mr-1" name={"loading"} />
      )}
    </div>
  );
}
