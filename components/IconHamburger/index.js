import cls from "classnames";
export default function Hamburger(props) {
  const { className } = props;
  return (
    <svg
      className={cls(className)}
      viewBox="0 0 90 60"
      width="30"
      height="30"
      fill="#fff"
    >
      <rect width="90" height="10" rx="6"></rect>
      <rect y="25" width="90" height="10" rx="6"></rect>
      <rect y="50" width="90" height="10" rx="6"></rect>
    </svg>
  );
}
