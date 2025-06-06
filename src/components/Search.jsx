import React from 'react';

function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="search">
      <label htmlFor="movie-search" className="sr-only">Search Movies</label>

      <div className="search-input-wrapper">
        <img src="search.svg" alt="Search icon" className="search-icon" />

        <input
          id="movie-search"
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
    </div>
  );
}

export default Search;
