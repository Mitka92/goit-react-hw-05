import { useEffect, useState } from "react";
import { getCast } from "../../services/api";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import Cast from "../Cast/Cast";

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const { cast } = await getCast(movieId);
        setCast(cast);
        if (!cast.length) {
          setIsEmpty(true);
        }
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
      {isEmpty ? <p>Not found</p> : <Cast cast={cast} />}
      {isLoading && <Loader />}
      {error && <p>Error</p>}
    </>
  );
};

export default MovieCast;
