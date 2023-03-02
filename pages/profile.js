import { useState, useEffect } from "react";
export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("user_data")));
  }, []);
  return <h1>{user ? user.name : "No user found"}</h1>;
}
