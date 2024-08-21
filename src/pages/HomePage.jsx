import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import { getPopularMovies } from "../services/api";
import MoviesList from "../components/MovieList/MovieList";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";
// import TrendSwitcher from "../components/TrendSwitcher/TrendSwitcher";

const HomePage = () => {
  const maxPage = 500;
  // {
  //     "success": false,
  //     "status_code": 22,
  //     "status_message": "Invalid page: Pages start at 1 and max at 500. They are expected to be an integer."
  // }
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  // const [trend, setTrend] = useState("day");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const { results } = await getPopularMovies(page); //+trend
        if (page > 1) {
          const uniqueResults = results.filter(
            (movie, index, self) =>
              index === self.findIndex((m) => m.id === movie.id)
          );
          setMovies((prevMovies) => [...prevMovies, ...uniqueResults]);
        } else {
          setMovies(results);
        }
        setShowBtn(page !== maxPage);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page]); //+trend
  const loadMore = () => {
    setPage((page) => page + 1);
  };
  return (
    <>
      {/* {      <TrendSwitcher value={trend} onSelect={setTrend} />} */}
      <h1>Trending today</h1>
      {movies.length > 0 && <MoviesList movies={movies} />}
      {showBtn && <LoadMoreBtn onClick={loadMore} />}
      {isLoading && <Loader />}
      {error && <p>error</p>}
    </>
  );
};

export default HomePage;
