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
      <rect id="rect1" x="50" width="40" height="10" rx="6"></rect>
      <rect id="rect2" x="10" y="25" width="75" height="10" rx="6"></rect>
      <rect y="50" width="40" height="10" rx="6"></rect>
    </svg>
  );
}
