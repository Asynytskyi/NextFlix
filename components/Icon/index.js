import Envelope from "../../svg/envelope.svg";
import Favorite from "../../svg/favorite.svg";
import Google from "../../svg/google.svg";
import Loading from "../../svg/loading.svg";
import Lock from "../../svg/lock.svg";
import Login from "../../svg/login.svg";
import Search from "../../svg/search.svg";
import SignOut from "../../svg/signOut.svg";

const iconTypes = {
  envelope: Envelope,
  favorite: Favorite,
  google: Google,
  loading: Loading,
  lock: Lock,
  login: Login,
  search: Search,
  signOut: SignOut,
};

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
