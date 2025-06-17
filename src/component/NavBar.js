import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = ({ onSearchSubmit }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      onSearchSubmit(searchValue);
    }
    setSearchValue("");
  };

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black py-2 fixed-top">
      <div className="container-fluid">
        <div className="d-flex align-items-center me-5">
          <span className="navbar-brand fs-3 fw-semibold">NewsMonkey</span>
          <i className="fa-regular fa-newspaper text-white fs-3 mt-1"></i>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto px-2">
            <li className="nav-item">
              <Link className="nav-link px-3 py-2" to="/general">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 py-2" to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 py-2" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 py-2" to="/general">
                General
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 py-2" to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 py-2" to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 py-2" to="/technology">
                Technology
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 py-2" to="/health">
                Health
              </Link>
            </li>
          </ul>

          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              type="text"
              value={searchValue}
              onChange={handleOnChange}
              className="form-control me-2"
              placeholder="Search here"
            />
            <button type="submit" className="btn btn-outline-success">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
