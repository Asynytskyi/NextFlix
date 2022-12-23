import cls from "classnames";

export default function MenuComponents() {
  const data = [
    { name: "Home", link: "/" },
    { name: "Favorite List", link: "/favorite" },
    { name: "etc." },
  ];
  console.log("ff");

  return (
    <div className="fixed flex align-center border-l-2 border-[var(--bg)] bg-white bg-opacity-30 top-20 right-52 z-30 w-full h-full translate-x-full">
      <ul className="w-1/4 pl-1.063 pt-0.125">
        {data.map((item, i) => (
          <li className="" key={i}>
            <a
              href={item.link}
              className="text-xl text-black font-bold line-clamp-2 pb-2 hover:scale-110 hover:bg-slate-400 py-1 pl-2"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
