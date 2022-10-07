const Search = (props) => {
  const { query, onQuerySearch } = props;
  return (

    <>
      <label htmlFor="search" className="search-label">
        <input
          type="text"
          className="search-bar"
          id="search"
          placeholder="Search Country"
          value={query}
          onChange={onQuerySearch}
        />
        <i className="bi bi-search" />
      </label>
    </>
  );
};

export default Search;
