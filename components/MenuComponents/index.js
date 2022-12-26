export default function MenuComponents() {
  const data = [
    { name: "Home", link: "/" },
    { name: "Best Rated", link: "/bestrated" },
    { name: "Favorite List", link: "/favorite" },
    { name: "etc." },
  ];
  console.log("ff");

  return (
    <div className="menu-bg-image menu-components align-center border-l-2 border-[var(--bg)] absolute right-52 top-20 z-30 w-full min-h-screen translate-x-full duration-1000 menu-transition">
      <ul className="px-6 pt-0.125">
        {data.map((item, i) => (
          <li className="" key={i}>
            <a
              href={item.link}
              className="text-xl font-bold line-clamp-2 hover:scale-110 hover:bg-slate-100 hover:mx-2.588 hover:px-8 py-5"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
