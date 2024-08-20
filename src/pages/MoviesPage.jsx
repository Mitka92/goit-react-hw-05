import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovie } from "../services/api";
import Loader from "../components/Loader/Loader";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";
import MoviesList from "../components/MovieList/MovieList";
import SearchForm from "../components/SearchForm/SearchForm";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("query");

  useEffect(() => {
    if (!search) return;
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const { results, total_pages } = await searchMovie(search, page);
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
  }, [page, search]);
  const loadMore = () => {
    setPage((page) => page + 1);
  };
  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };
  return (
    <>
      {<SearchForm onSubmit={handleSubmit} />}
      {movies.length > 0 && <MoviesList movies={movies} />}
      {isLoading && <Loader />}
      {showBtn && <LoadMoreBtn onClick={loadMore} />}
      {error && <p>error</p>}
    </>
  );
};

export default MoviesPage;
