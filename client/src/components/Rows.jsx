import React from "react";
import CardRow from "./CardRow";

const Rows = ({ data, media_type }) => {
  let dataArray = [];
  if (media_type === "movie") {
    const movieGenre = [
      "Action",
      "Comedy",
      "Mystery",
      "Science Fiction",
      "Horror",
      "Fantasy",
      "Family",
      "Animation",
      "Romance",
    ];
    dataArray = movieGenre;
  }
  if (media_type === "tv") {
    const tvGenre = [
      "Comedy",
      "Mystery",
      "Family",
      "Animation",
      "Western",
      "Documentary",
    ];
    dataArray = tvGenre;
  }
  const renderByGenres = (genre) => {
    return data
      ?.filter(({ genres }) => genres?.find((ele) => ele === genre))
      .slice(0, 20);
  };
  return (
    <>
      {dataArray.map((genre, index) => {
        return (
          <CardRow key={index} title={genre} movieTv={renderByGenres(genre)} />
        );
      })}
    </>
  );
};

export default Rows;
