import cls from "classnames";
export default function Close(props) {
  const { className } = props;
  return (
    <svg
      className={cls(className)}
      width="38"
      height="38"
      viewBox="00 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 14L34 34"
        stroke="#fff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="white"
      ></path>
      <path
        d="M14 34L34 14"
        stroke="#fff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="white"
      ></path>
    </svg>
  );
}
