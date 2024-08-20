import { Link, useLocation } from "react-router-dom";
import { Grid } from "../Grid/Grid";
import { GridItem } from "../GridItem/GridItem";
import css from "./MovieList.module.css";
import { Container } from "../Container/Container";
import { Section } from "../Section/Section";

const MoviesList = ({ movies }) => {
  const location = useLocation();
  const defaultPoster =
    "https://img.freepik.com/free-photo/clapperboard-with-popcorn-reels_23-2147807376.jpg?t=st=1724155425~exp=1724159025~hmac=ccafdad840aa85fc5b4bb4098a815ea699ad4f10a9e6df3d6565c762bfc775b6&w=360";
  return (
    <Section>
      <Container>
        <Grid>
          {movies.map(({ id, original_title, poster_path }) => (
            <GridItem key={id}>
              <Link
                className={css.link}
                state={{ from: location }}
                to={`/movies/${id}`}
              >
                {
                  <img
                    className={css.img}
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : defaultPoster
                    }
                    alt={original_title}
                    width={200}
                  />
                }
                <p className={css.movie_title}>{original_title}</p>
              </Link>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default MoviesList;
