import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCountries } from "../Redux/home/home";
import Home from "./Home";
import Search from "./Search";

const HomeList = () => {
  const [query, setQuery] = useState('');

  const onQuerySearch = (event) => {
    setQuery(event.target.value);
  };
  const countriesArray = useSelector((state) => state.country);
  const filterCountries = countriesArray.data.filter((country) => (
    country.name.toLowerCase().includes(query.toLowerCase())
  ));
  const dispatch = useDispatch();
  useEffect(() => {
    if (countriesArray.data.length === 0) {
      dispatch(showCountries());
    }
  }, []);

  return (
    <section className="country-section-container">
      <Search
        query={query}
        onQuerySearch={onQuerySearch}
      />
      <section className="country-section">
        {filterCountries.map((data) => (
          <Home
            key={data.name}
            country={data}
          />
        ))}
      </section>
    </section>

  );
};

export default HomeList;
