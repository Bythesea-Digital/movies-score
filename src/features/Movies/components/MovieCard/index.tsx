import React from "react";
import { Movie } from "../../../../store/movies/duck";
import { Card } from "./styles";

type Props = {};

export default function MovieCard({
  type,
  rating,
  poster,
  imdbId,
  title,
  year
}: Movie): JSX.Element {
  const hasImage = poster !== "N/A";
  return (
    <Card>
      <h2>{title}</h2>
      <p>{year}</p>
      {hasImage ? (
        <img src={poster} alt={title} />
      ) : (
        <img
          src="https://via.placeholder.com/300x380?text=Image+not+found"
          alt={title}
        />
      )}
    </Card>
  );
}
