"use client";
import React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

type Props = { href: string; children: any };

const NavLink: React.FC<Props> = ({ href, children }) => {
  let segment = useSelectedLayoutSegment();
  const isActive = (href === "/" && segment === null) || href === `/${segment}`;

  return (
    <Link href={href} className={isActive ? "underline" : ""}>
      {children}
    </Link>
  );
};

export default NavLink;
