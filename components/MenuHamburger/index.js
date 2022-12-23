import { useState } from "react";

import Hamburger from "../IconHamburger";
import Close from "../IconClose";
import MenuComponents from "../MenuComponents";

export default function MenuHamburger() {
  const [active, setActive] = useState(false);

  return (
    <div>
      <button
        className="flex items-center justify-center w-6.4375"
        onClick={() => setActive(!active)}
      >
        {active === true ? <Close /> : <Hamburger />}
      </button>
      <div>{active === true ? <MenuComponents /> : <></>}</div>
    </div>
  );
}
