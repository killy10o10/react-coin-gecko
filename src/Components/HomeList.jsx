import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCountries } from "../Redux/home/home";
import Home from "./Home";

const HomeList = () => {
  const countriesArray = useSelector((state) => state.country);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showCountries());
  }, []);

  return (
    <section className="country-section">
      {countriesArray.data.map((data) => (
        <Home
          key={data.name}
          country={data}
        />
      ))}
    </section>

  );
};

export default HomeList;
