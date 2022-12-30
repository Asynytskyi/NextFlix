export default function MenuComponents({ activeState }) {
  const data = [
    { name: "Home", link: "/", delay: "delay-1" },
    {
      name: "Best Rated",
      link: "/bestrated",
      delay: "delay-2",
    },
    {
      name: "Favorite List",
      link: "/favorite",
      delay: "delay-3",
    },
    { name: "etc.", delay: "delay-4" },
  ];

  return (
    <div
      className={`
      menu-bg-image-bef align-center border-l-2 border-[var(--bg)] fixed right-0 top-20 duration-1000 ${
        activeState
          ? "h-screen w-52 menu-bg-image-aft text-white"
          : "w-0 h-0 rounded-bl-full text-green-500"
      }`}
    >
      <ul className="pt-0.125">
        {data.map((item, i) => (
          <li
            className={` ${
              activeState
                ? `${item.delay} duration-700 visible translate-x-0`
                : "translate-x-20 invisible"
            }`}
            key={i}
          >
            <a
              href={item.link}
              className="duration-300 relative w-full text-xl font-bold line-clamp-2 hover:scale-110 hover:text-white hover:-mx-0.95x hover:px-8 px-6 py-4 hover:before:scale-90 hover:before:left-0.453 hover:before:h-1/2 hover:before:w-0.313 hover:before:text-transparent hover:before:bg-lPurple hover:before:absolute "
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
