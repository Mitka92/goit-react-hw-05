import { Link } from "react-router-dom";
import { Grid } from "../Grid/Grid";
import { GridItem } from "../GridItem/GridItem";
import css from "./MoviesList.module.css";

const MoviesList = ({ movies }) => {
  return (
    <>
      <Grid>
        {movies.map(({ id, original_title, poster_path }) => (
          <GridItem key={id}>
            <Link to={`/movies/${id}`}>
              {
                <img
                  className={css.img}
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={original_title}
                />
              }
              <p>{original_title}</p>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default MoviesList;
