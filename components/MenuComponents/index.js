import { useState } from "react";

export default function MenuComponents({ activeState }) {
  const [active, setActive] = useState("home");

  const data = [
    { id: "home", name: "Home", delay: "delay-1" },
    {
      id: "bestRated",
      name: "Best Rated",

      delay: "delay-2",
    },
    {
      id: "favList",
      name: "Favorite List",

      delay: "delay-3",
    },
    { id: "etc", name: "etc.", delay: "delay-4" },
  ];

  return (
    <div
      className={`
    menu-bg-image-bef align-center border-l-2 border-[var(--bg)] fixed -right-20 top-20 duration-1000 ${
      activeState
        ? "h-screen w-72 menu-bg-image-aft text-white"
        : "w-0 h-0 rounded-bl-full"
    }`}
    >
      <ul className="pt-0.125">
        {data.map((item, i) => (
          <li
            className={`duration-700 ${
              activeState
                ? `${item.delay} visible translate-x-0`
                : "translate-x-28 invisible"
            }`}
            key={i}
          >
            <a
              onClick={() => {
                setActive(item.id);
              }}
              href={item.link}
              className={`delay-100 duration-500 relative w-full text-xl font-bold line-clamp-2 hover:scale-110 hover:text-white hover:px-8 px-6 mt-6 hover:before:left-0.688 hover:before:h-full hover:before:w-0.313 hover:before:text-transparent hover:before:bg-lPurple before:absolute ${
                active === item.id
                  ? "text-white before:h-full before:w-0.313 before:left-0.688 px-8 scale-110 before:bg-lPurple before:border-lPurple before:border-r-1 before:shadow-slugActive"
                  : "text-beton"
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
