import cls from "classnames";
export default function Close(props) {
  const { className } = props;
  return (
    <svg
      id="svgClose"
      className={cls(className)}
      width="14"
      height="14"
      viewBox="00 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="path1"
        d="M14 14L34 34"
        stroke="#fff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        id="path2"
        d="M14 34L34 14"
        stroke="#fff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
