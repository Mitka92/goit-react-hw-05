import { useEffect, useState } from "react";
import { getReviews } from "../../services/api";
import { useParams } from "react-router-dom";
// import css from "./MovieReviews.module.css";
import Reviews from "../Reviews/Reviews";
import Loader from "../Loader/Loader";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const { results } = await getReviews(movieId);
        setReviews(results);
        if (!results.length) {
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
      {isEmpty ? <p>Not found</p> : <Reviews reviews={reviews} />}
      {isLoading && <Loader />}
      {error && <p>Error</p>}
    </>
  );
};

export default MovieReviews;
