import css from './ErrorMessage.module.css';

export default function ErrorMessage({ errorMes }) {
  return (
    <div className={css.error}>
      <p>Something wrong 😢 please reload page</p>
      <p>{errorMes}</p>
    </div>
  );
}