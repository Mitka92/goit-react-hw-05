import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";
import css from "./SearchForm.module.css";

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      return toast.error("Please, enter text");
    }
    onSubmit(query);
    setQuery("");
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <Toaster />
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={handleChange}
        className={css.input}
      />
      <button type="submit" className={css.button}>
        <FiSearch size="16px" />
      </button>
    </form>
  );
};

export default SearchForm;
