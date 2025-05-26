import { FaBell, FaSearch } from "react-icons/fa";
import "../style/mainPage.css";
import Anatomy from "./anatomy";
import { useState } from "react";

export default function Mainpage() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <div className="Mainpage">
        <div className="search">
          {/* we are doing conditional rendering for search icon when the input is focused we remove the icon */}
          {!isFocused && <FaSearch className="search-icon" />}
          <input
            type="text"
            placeholder="Search"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <a href="#">
            <FaBell />
          </a>
        </div>
        <div className="heading">
          <h1>DashBoard</h1>

          {/* this is dropdown for selecting the period */}
          <select name="name" className="dropdown">
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>
        <Anatomy />
      </div>
    </>
  );
}
