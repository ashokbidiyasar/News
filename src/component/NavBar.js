// import React, { Component } from "react";
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

  const handleOnChange = (e)=>{
      setSearchValue(e.target.value);
  }

  return (
    <div className="flex bg-black py-2 fixed-top justify-between items-center">
      <ul className="flex text-lg text-white ml-8 space-x-7 py-2 items-center justify-center">
        <div className="flex text-md space-x-3 items-center mr-5 justify-between items-center justify-center">
          <span className="text-2xl font-semibold">NewsMonkey</span>
          <li>
            <i className="fa-regular fa-newspaper  text-white color-white mt-2 text-3xl"></i>
          </li>
        </div>

        <li>
          <Link
            className="hover:border hover:border-white px-1 py-2"
            to="/general"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            className="hover:border hover:border-white px-1 py-2"
            to="/business"
          >
            Business
          </Link>
        </li>
        <li>
          <Link
            className="hover:border hover:border-white px-1 py-2"
            to="/entertainment"
          >
            Entertainment
          </Link>
        </li>
        <li>
          <Link
            className="hover:border hover:border-white px-1 py-2"
            to="/general"
          >
            General
          </Link>
        </li>

        <li>
          <Link
            className="hover:border hover:border-white px-1 py-2"
            to="/science"
          >
            Science
          </Link>
        </li>
        <li>
          <Link
            className="hover:border hover:border-white px-1 py-2"
            to="/sports"
          >
            Sports
          </Link>
        </li>
        <li>
          <Link
            className="hover:border hover:border-white px-1 py-2"
            to="/technology"
          >
            Technology
          </Link>
        </li>
        <li>
          <Link
            className="hover:border hover:border-white px-1 py-2"
            to="/health"
          >
            Health
          </Link>
        </li>
      </ul>

      <div className="flex ">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchValue}
            onChange={handleOnChange}
            className="text-black border border-white px-1 py-1 text-xl font-semibold rounded-md"
            placeholder="Search here"
          />
          <button
            type="submit" 
            className="text-green-500 px-3 ml-1 mr-8 py-[3px] rounded-md font-semibold text-2xl hover:border hover:border-white"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default NavBar;
