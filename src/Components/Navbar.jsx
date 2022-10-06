import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <NavLink to="/">
      <div className="logo">
        <i className="bi bi-arrow-left-circle-fill" />
        <h1>Home</h1>
      </div>
    </NavLink>
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
