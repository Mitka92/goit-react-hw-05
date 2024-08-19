import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { getMovie } from "../services/api";
import MovieDetails from "../components/MovieDeatails/MovieDetails";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getMovie(movieId);
        setMovie(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);
  return (
    <>
      {movie && <MovieDetails {...movie} />}
      {isLoading && <Loader />}
      {error && <p>error</p>}
    </>
  );
};

export default MovieDetailsPage;
