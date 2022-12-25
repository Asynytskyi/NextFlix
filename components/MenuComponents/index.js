import cls from "classnames";

export default function MenuComponents() {
  const data = [
    { name: "Home", link: "/" },
    { name: "Best Rated", link: "/bestrated" },
    { name: "Favorite List", link: "/favorite" },
    { name: "etc." },
  ];
  console.log("ff");

  return (
    <div className="align-center border-l-2 border-[var(--bg)] menu-components absolute text-center right-full top-20 z-30 w-full min-h-screen translate-x-full">
      <ul className="w-full pt-0.125">
        {data.map((item, i) => (
          <li key={i}>
            <a
              href={item.link}
              className="text-xl font-bold line-clamp-2 hover:scale-110 hover:bg-slate-400 py-10"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
