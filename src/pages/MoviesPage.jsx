import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";
import MoviesList from "../components/MoviesList/MoviesList";
import { searchMovie } from "../services/api";
import SearchForm from "../components/SearchForm/SearchForm";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const { results, total_pages } = await searchMovie(query, page);
        if (page > 1) {
          const uniqueResults = results.filter(
            (movie, index, self) =>
              index === self.findIndex((m) => m.id === movie.id)
          );
          setMovies((prevMovies) => [...prevMovies, ...uniqueResults]);
        } else {
          setMovies(results);
        }
        setShowBtn(page !== total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page, query]);

  const loadMore = () => {
    setPage((page) => page + 1);
  };
  const handleSubmit = (value) => {
    setQuery(value);
    setPage(1);
    setMovies([]);
    setError(false);
  };
  return (
    <>
      {<SearchForm onSubmit={handleSubmit} />}
      {movies.length > 0 && <MoviesList movies={movies} />}
      {showBtn && <LoadMoreBtn onClick={loadMore} />}
      {isLoading && <Loader />}
      {error && <p>error</p>}
    </>
  );
};

export default MoviesPage;
