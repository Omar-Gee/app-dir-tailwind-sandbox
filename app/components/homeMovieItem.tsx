"use client";
import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import Link from "next/link";
import Image from "next/image";

type Props = {
  id: string;
  posterPath: string;
};

const HomeMovieItem: React.FC<Props> = ({ posterPath, id }) => {
  useEffect(() => {
    const element = document.querySelector(".js-tilt");
    // @ts-ignore
    element && VanillaTilt.init(element);
  }, []);
  return (
    <div
      data-tilt
      data-tilt-scale="1.1"
      data-tilt-reverse="true"
      key={id}
      className={
        "transition-all relative min-w-fit cursor-pointer hover:shadow-[1px_38px_46px_-28px_rgba(239,240,247,1)] js-tilt"
      }
    >
      <Link href={`/movies/${id}`}>
        <Image
          src={posterPath}
          alt={"movie"}
          height={400}
          width={200}
          style={{ objectFit: "contain" }}
        />
      </Link>
    </div>
  );
};

export default HomeMovieItem;
