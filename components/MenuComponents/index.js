import cls from "classnames";

export default function MenuComponents(props) {
  const data = [
    { name: "Home", link: "/" },
    { name: "Best Rated", link: "/bestrated" },
    { name: "Favorite List", link: "/favorite" },
    { name: "etc." },
  ];
  const { className } = props;
  console.log("ff");

  return (
    <div className={cls(className)}>
      <ul className="px-6 pt-0.125">
        {data.map((item, i) => (
          <li className="" key={i}>
            <a
              href={item.link}
              className="w-full text-xl font-bold line-clamp-2 hover:scale-110 hover:bg-slate-100 hover:-mx-0.95 hover:px-8 py-5"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
