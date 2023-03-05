import { useState, useEffect } from "react";
export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log(window.localStorage);
    setUser(JSON.parse(window.localStorage.getItem("user_data")));
  }, []);
  console.log(user);
  return <h1>{user ? `${user.name}, ${user.email}` : "No user found"}</h1>;
}
