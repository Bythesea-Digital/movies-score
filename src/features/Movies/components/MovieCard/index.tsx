import React from "react";
import {Movie} from "../../../../store/movies/duck";
import {Card} from "./styles";
import Skeleton from 'react-loading-skeleton';
import {motion} from 'framer-motion';
import {childrenVariants} from "../../Movies";

type Props = {
    loading?: boolean;
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

    return (
       <motion.div variants={childrenVariants}>
           <Card>
               <h2>{loading ? <Skeleton width={180} /> : title}</h2>
               <p>{loading ? <Skeleton width={60} /> : year}</p>
               {loading ? <Skeleton width={300} height={400} /> : <img src={poster} alt={title}/>}
           </Card>
       </motion.div>
    );
}
