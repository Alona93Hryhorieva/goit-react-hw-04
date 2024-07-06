import css from "./ErrorMessage.module.css";
export default function errorMessage() {
  return (
    <p className={css.error}>
      Opps! There was an error, please reload this page!
    </p>
  );
}
