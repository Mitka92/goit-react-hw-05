import css from "./Reviews.module.css";
const Reviews = ({ reviews }) => {
  const defaultAvatar =
    "https://camo.githubusercontent.com/85ec39098ca039870696ac5fc0cf4762d58e1357c2237a75c46831da1b272018/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f323639323831302f323130343036312f34643839316563302d386637362d313165332d393230322d6637333934306431306632302e706e67";
  return (
    <div>
      <ul>
        {reviews.map(
          ({
            author,
            content,
            created_at,
            id,
            author_details: { avatar_path },
          }) => (
            <li key={id} className={css.item}>
              <div className={css.wrapper}>
                <div className={css.author}>
                  <h4>{author}</h4>
                  <img
                    src={
                      avatar_path
                        ? `https://image.tmdb.org/t/p/w200${avatar_path}`
                        : defaultAvatar
                    }
                    alt={author}
                    width={50}
                  />
                </div>
                <p className={css.content}>{content}</p>
              </div>
              <p>Date: {created_at}</p>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Reviews;
