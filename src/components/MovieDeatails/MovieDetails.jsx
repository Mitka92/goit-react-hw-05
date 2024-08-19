import { useLocation } from "react-router-dom";
import { GoBackBtn } from "../GoBackBtn/GoBackBtn";
import { useRef } from "react";

const MovieDetails = ({
  genres = [],
  overview,
  title,
  homepage,
  release_date,
  backdrop_path,
}) => {
  const location = useLocation();

  const goBack = useRef(location?.state ?? "/");

  return (
    <div>
      <GoBackBtn path={goBack.current}>Go back</GoBackBtn>
      <h2>{title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        alt={title}
      />
      <h3>Genres:</h3>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>
            <p>{genre.name}</p>
          </li>
        ))}
      </ul>
      <p>{overview}</p>
      <a href={homepage} target="_blank" rel="noopener noreferrer">
        {homepage}
      </a>
      <p>{`Release date: ${release_date}`}</p>
    </div>
  );
};

export default MovieDetails;
