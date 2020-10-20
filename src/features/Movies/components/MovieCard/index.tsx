import React from "react";
import { Movie } from "../../../../store/movies/duck";
import { Card } from "./styles";
import Skeleton from "react-loading-skeleton";
import {motion} from "framer-motion"
import {childrenVariants} from "../../Movies";

type Props = {
  loading?: boolean
};

export default function MovieCard({
  type,
  rating,
  poster,
  imdbId,
  title,
  year,
    loading


}: Movie & Props): JSX.Element {
  const hasImage = poster !== "N/A";
  const renderImage = () => {
    if(hasImage){
      return <img src={poster} alt={title} />
    }
    else{
      return  <img
          src="https://via.placeholder.com/300x380?text=Image+not+found"
          alt={title}
      />
    }
  }
  return (
    <motion.div key={imdbId} variants={childrenVariants} exit="exit">
      <Card>
        <h2>{loading ? <Skeleton width={180} /> : title}</h2>
        <p>{loading ? <Skeleton width={48} /> : year}</p>
        {loading ? <Skeleton width={300} height={400} /> : renderImage()}
      </Card>
    </motion.div>
  );
}
