import { NavLink } from "react-router-dom";

const Home = () => (
  <>
    <h1>Home Page</h1>
    <div className="country-card">
      <div className="img-container">
        <NavLink to="/CoinInfo"><img src="https://flagcdn.com/gh.svg" alt="gh" /></NavLink>
      </div>
      <div className="text-container">
        <h4>Country Name</h4>
        <p>population</p>
        <p>capital</p>
      </div>
    </div>
  </>
);
export default Home;
