import { useState } from 'react';
import styles from './SearchBar.module.css';
import toast from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter a search query');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={styles.SearchBar}>
      <form onSubmit={handleSubmit} className={styles.SearchForm}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className={styles.SearchFormInput}
          placeholder="Search images and photos"
        />
        <button type="submit" className={styles.SearchFormButton}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
