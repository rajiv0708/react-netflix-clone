import React from "react";
import { request } from "../utils/request";
import CardRow from "./CardRow";

const Slider = () => {
  return (
    <>
      <CardRow
        media_type="movie"
        title="Trending Now"
        fetchUrl={request.trending}
      />
      <CardRow
        media_type="movie"
        title="Netflix Original"
        fetchUrl={request.originals}
      />
      <CardRow media_type="tv" title="Top Rated" fetchUrl={request.topRated} />
      <CardRow
        media_type="movie"
        title="Action Movies"
        fetchUrl={request.actionMovies}
      />
      <CardRow
        media_type="movie"
        title="Comedy Movies"
        fetchUrl={request.comedyMovies}
      />
      <CardRow
        media_type="movie"
        title="Romance Movies"
        fetchUrl={request.romanceMovies}
      />
      <CardRow
        media_type="movie"
        title="Documentaries"
        fetchUrl={request.documentaries}
      />
      <CardRow
        media_type="movie"
        title="Animation"
        fetchUrl={request.animation}
      />
    </>
  );
};

export default Slider;
