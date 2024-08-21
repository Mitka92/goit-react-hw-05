import { useLocation } from "react-router-dom";
import { GoBackBtn } from "../GoBackBtn/GoBackBtn";
import { useRef } from "react";
import { Container } from "../Container/Container";
import css from "./MovieDetails.module.css";
import MoreInfo from "../MoreInfo/MoreInfo";
const MovieDetails = ({
  genres = [],
  overview,
  title,
  homepage,
  release_date,
  backdrop_path,
}) => {
  const location = useLocation();
  const goBack = useRef(location?.state?.from ?? "/movies");
  const defaultPhoto =
    "https://img.freepik.com/free-photo/clapperboard-with-popcorn-reels_23-2147807376.jpg?t=st=1724155425~exp=1724159025~hmac=ccafdad840aa85fc5b4bb4098a815ea699ad4f10a9e6df3d6565c762bfc775b6&w=360";
  return (
    <>
      <Container>
        <div className={css.wrapper}>
          <GoBackBtn path={goBack.current}>⬅️Go back</GoBackBtn>

          <h2 className={css.title}>{title}</h2>
          <img
            src={
              backdrop_path
                ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
                : defaultPhoto
            }
            alt={title}
          />
          <h3>Genres:</h3>
          <ul className={css.genres_list}>
            {genres.map((genre) => (
              <li className={css.genres_item} key={genre.id}>
                <p className={css.genre}>{genre.name}</p>
              </li>
            ))}
          </ul>
          <p>{overview}</p>
          <a href={homepage} target="_blank" rel="noopener noreferrer">
            {homepage}
          </a>
          <p>{`Release date: ${release_date}`}</p>
        </div>
        <MoreInfo />
      </Container>
    </>
  );
};

export default MovieDetails;
