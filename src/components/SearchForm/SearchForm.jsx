import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";
import css from "./SearchForm.module.css";
import { useSearchParams } from "react-router-dom";

const SearchForm = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  // При першому рендері витягуємо query з URL
  useEffect(() => {
    const queryParam = searchParams.get("query");
    if (queryParam) {
      setQuery(queryParam);
      // Підставляємо значення з URL в input
    }
  }, [searchParams]);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      return toast.error("Please, enter text");
    }
    onSubmit(query);

    setSearchParams({ query });
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <Toaster />
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handleChange}
        className={css.input}
        value={query || ""}
      />
      <button type="submit" className={css.button}>
        <FiSearch className={css.search_image} size="32px" />
      </button>
    </form>
  );
};

export default SearchForm;
