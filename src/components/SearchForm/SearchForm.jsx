import { useState } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import css from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSearchInput = e => {
    const { value } = e.currentTarget;

    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!query.trim()) {
      Notiflix.Notify.info('Please write your request', {
        autoClose: 2000,
      });
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.btn} type="submit" title="Go">
          <span>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          name="query"
          value={query}
          onChange={handleSearchInput}
          autoComplete="off"
          placeholder="Search movies"
          required
        />
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
