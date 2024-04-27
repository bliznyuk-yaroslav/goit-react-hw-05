import css from './SearchBox.module.css';
export default function SearchBox({ onSubmit }) {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const searchText = form.elements.search.value;
    if (searchText.trim() === '') {
      console.log('Please enter a search query');
      return;
    }
    onSubmit(searchText);
    form.reset();
  };
  return (
    <div className={css.cont}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.inputForm}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="search"
        />
        <button type="submit" className={css.btn}>
          {' '}
          Search
        </button>
      </form>
    </div>
  );
}
