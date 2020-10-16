import React from 'react';
import { storiesOf } from "@storybook/react";
import Provider from "./Provider";
import MovieTile from "../components/MovieTile";

storiesOf('Information/MovieTile', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('Without Image', () => {
    const movie = {
      Title: "Bird in a Box",
      Year: "2012",
      imdbID: "tt2232344",
      Type: "movie",
      OverallRating: "72"
    };
    return (
      <MovieTile movieInfo={movie}/>
    )
  })
  .add('With Image', () => {
    const movie = {
      Title: "Bird Box",
      Year: "2018",
      imdbID: "tt2737304",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMjAzMTI1MjMyN15BMl5BanBnXkFtZTgwNzU5MTE2NjM@._V1_SX300.jpg",
      OverallRating: "60"
    };
    return (
      <MovieTile movieInfo={movie}/>
    )
  });