import React, { use } from "react";
import { getMovies } from "@/utils/getMovies";
import { getMovieImage } from "@/utils/getMovieImage";
import HomeMovieItem from "@/app/components/homeMovieItem";

type Props = {};

const Upcoming: React.FC<Props> = ({}) => {
  return <div className={"flex flex-wrap gap-10 justify-center p-10"}></div>;
};

export default Upcoming;
