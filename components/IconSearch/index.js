import cls from "classnames";
export default function IconSearch(props) {
  const { className } = props;
  return (
    <div className="my-0 mx-auto text-center">
      <a>
        <svg
          className={cls(className)}
          aria-labelledby="title desc"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.9 19.7"
        >
          <g fill="none">
            <path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4" />
            <circle cx="8" cy="8" r="7" />
          </g>
        </svg>
      </a>
    </div>
  );
}
