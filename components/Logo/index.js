import cls from "classnames";
export default function Logo(props) {
  const { className } = props;
  return (
    <div className={cls(className)}>
      <div className="wrapper">
        <div className="logo-top">N E X T F L I X</div>
        <div className="logo-bottom" aria-hidden="true">
          N E X T F L I X
        </div>
      </div>
    </div>
  );
}
