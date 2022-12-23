import { useRef } from "react";
import IconLoading from "../IconLoading";
import IconSearch from "../IconSearch";

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
    <div className="flex items-center bg-search rounded-full h-10 w-auto">
      <input
        ref={ref}
        className="px-4 bg-transparent rounded-full w-full h-auto font-base text-base font-sans tracking-wider search"
        placeholder="Search for movies"
        onChange={(e) => onChangeInput(e.target.value)}
      />
      {movies?.length > 0 ? (
        <button onClick={searchIconClick}>
          <IconSearch className="search-svg w-6 h-6 mr-3" />
        </button>
      ) : (
        <IconLoading className="w-10 h-10 mr-1" />
      )}
    </div>
  );
}
