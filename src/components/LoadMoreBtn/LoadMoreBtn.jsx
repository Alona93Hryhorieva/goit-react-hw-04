import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  const handleClick = (event) => {
    event.preventDefault();
    onClick();
  };

  return (
    <button onClick={handleClick} className={css.loadMore}>
      Load more
    </button>
  );
}
