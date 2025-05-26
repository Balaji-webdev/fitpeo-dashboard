import {
  FaHistory,
  FaCalendarAlt,
  FaChartLine,
  FaPhoneAlt,
  FaBars,
} from "react-icons/fa";
import { RiBarChartBoxLine, RiStarSmileLine } from "react-icons/ri";
import { BsChatDotsFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import "../style/header.css";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // for the hamburger button when it reach the exact pixel it will appear
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
      if (window.innerWidth > 767) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      {isMobile && (
        <div className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </div>
      )}
      {/* this conditional rendering is for the hamburger when should appear by using state */}
      <div className={`header ${isMobile ? (isMenuOpen ? "active" : "") : ""}`}>
        <div className="header-logo">
          <h1>
            <span className="logo-1">Health</span>
            <span className="logo-2">Care</span>
          </h1>
        </div>
        {/*here we displaying the navbar for the header*/}
        <div className="navBar-1">
          <h3>General</h3>
          <nav>
            <a href="#">
              <RiBarChartBoxLine className="icon1" />
              <span>DashBoard</span>
            </a>
            <a href="#">
              <FaHistory className="icon1" />
              <span>History</span>
            </a>
            <a href="#">
              <FaCalendarAlt className="icon1" />
              <span>Calendar</span>
            </a>
            <a href="#">
              <RiStarSmileLine className="icon1" />
              <span>Appointments</span>
            </a>
            <a href="#">
              <FaChartLine className="icon1" />
              <span>Statistics</span>
            </a>
          </nav>
        </div>

        <div className="navBar-2">
          <h3>Tools</h3>
          <nav>
            <a href="#">
              <BsChatDotsFill className="icon1" />
              <span>Chat</span>
            </a>
            <a href="#">
              <FaPhoneAlt className="icon1" />
              <span>Support</span>
            </a>
          </nav>
        </div>

        <div className="setting">
          <a href="#">
            <IoSettings className="icon1" />
            <span>Settings</span>
          </a>
        </div>
      </div>
    </>
  );
}
