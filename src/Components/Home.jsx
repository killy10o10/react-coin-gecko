import { NavLink } from "react-router-dom";

const Home = (props) => {
  const { country } = props;
  return (
    <>
      <div className="country-card">
        <div className="img-container">
          <NavLink to="/CountryInfo" state={country}><img src={country.flag} alt={country.name} /></NavLink>
        </div>
        <div className="text-container">
          <h4>{country.name}</h4>
          <p>{country.population}</p>
          <p>{country.capital}</p>
        </div>
      </div>
    </>
  );
};
export default Home;
