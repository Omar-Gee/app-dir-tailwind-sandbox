import React from "react";
import NavLink from "@/app/nav-link";

type Props = {};

const Header: React.FC<Props> = ({}) => {
  return (
    <header className={"border-b p-4"}>
      <nav className={"space-x-4"}>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/sort/now">Now Playing</NavLink>
        <NavLink href="/sort/upcoming">Upcoming</NavLink>
        <NavLink href="/sort/popular">Popular</NavLink>
        <NavLink href="/sort/top-rated">Top Rated</NavLink>
        <NavLink href="/movies">Movies</NavLink>
      </nav>
    </header>
  );
};

export default Header;
