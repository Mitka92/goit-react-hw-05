import css from "./Cast.module.css";
const Cast = ({ cast }) => {
  const defaultAvatar =
    "https://camo.githubusercontent.com/85ec39098ca039870696ac5fc0cf4762d58e1357c2237a75c46831da1b272018/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f323639323831302f323130343036312f34643839316563302d386637362d313165332d393230322d6637333934306431306632302e706e67";
  return (
    <div>
      <ul className={css.list}>
        {cast.map(({ name, cast_id, profile_path }) => (
          <li key={cast_id} className={css.item}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200${profile_path}`
                  : defaultAvatar
              }
              alt={name}
              width={50}
            />
            <h4 className={css.name}>{name}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
