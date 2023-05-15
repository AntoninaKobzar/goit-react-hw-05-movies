import { useState } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';

const SearchForm = ({ onSearch }) => {
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

    onSearch(query);

    resetForm();
  };

  
  const resetForm = () => setQuery('');

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit" title="Go">
          <span>Search</span>
        </button>

        <input
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
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;