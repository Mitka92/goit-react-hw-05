import { useId } from "react";
import { Container } from "../Container/Container";
import css from "./TrendSwitcher.module.css";

const TrendSwitcher = ({ value, onSelect }) => {
  const selectId = useId();
  return (
    <Container>
      <div className={css.wrapper}>
        <form className={css.form}>
          <label className={css.label} htmlFor={selectId}>
            Trending to:{" "}
          </label>
          <select
            aria-label="select"
            id={selectId}
            value={value}
            onChange={(evt) => onSelect(evt.target.value)}
            className={css.select}
          >
            <option value="day">day</option>
            <option value="week">week</option>
          </select>
        </form>
      </div>
    </Container>
  );
};

export default TrendSwitcher;
