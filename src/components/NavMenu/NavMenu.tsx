import { Link } from "react-router-dom";

import "./NavMenu.css";
import Button from "../Button/Button";

const MENU = [
  {
    link: "/",
    title: "Главная",
  },
  {
    link: "/posts",
    title: "Посты",
  },
];

const NavMenu = () => {
  return (
    <nav className={"nav-root"}>
      {MENU.map(({ link, title }, index) => (
        <Link key={index} to={link}>
          <Button>{title}</Button>
        </Link>
      ))}
    </nav>
  );
};

export default NavMenu;
