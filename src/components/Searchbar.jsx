import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    const { value } = e.currentTarget;
    setQuery(value);
  };
  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(query);
    setQuery('');
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', gap: '20px', marginLeft: '20px' }}
    >
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search movies..."
      />
      <button type="submit" style={{ width: '60px', height: '20px' }}>
        Search
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
