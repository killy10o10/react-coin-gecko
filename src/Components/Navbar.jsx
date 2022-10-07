import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <NavLink to="/">
        <i className="bi bi-arrow-left-circle-fill" />
      </NavLink>
      <h1>Home</h1>
    </div>
    <div className="page-title">
      <h1>React Coin Gecko </h1>
    </div>
    <div className="nav-icons">
      <i className="bi bi-mic-fill" />
      <i className="bi bi-gear-fill" />
    </div>
  </nav>
);

export default Navbar;
