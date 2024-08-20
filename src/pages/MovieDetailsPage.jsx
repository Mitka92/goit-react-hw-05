import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { getMovie } from "../services/api";
import MovieDetails from "../components/MovieDetails/MovieDetails";

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
