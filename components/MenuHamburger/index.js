import Menu from "../IconMenu";
import MenuComponents from "../MenuComponents";

export default function MenuMenu() {
  return (
    <div>
      <button className="flex items-center justify-center w-6.4375">
        <Menu />
      </button>
      <div>{active === true ? <MenuComponents /> : <></>}</div>
    </div>
  );
}
