import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../src/App.css";

const Header = () => {
  const [animate, setAnimate] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    setAnimate(true);

    // Scroll listener sirf home page ke liye
    if (isActive("/")) {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [location]);

  const navigate = useNavigate();

  const contactusHandler = () => navigate("/contact");
  const AboutMeHandler = () => navigate("/about");
  const skillMeHandler = () => navigate("/skill");
  const resumeMeHandler = () => navigate("/resume");
  const homeMeHandler = () => navigate("/");

  return (
    <>
      <div
        className={`w-full h-[60px] flex justify-between px-20 items-center py-5 top-0 fixed transition-colors duration-300 z-50
        ${
          isActive("/")
            ? isScrolled
              ? "bg-black"
              : "bg-transparent"
            : "bg-black"
        }`}
      >
        {/* Logo */}
        <div className="w-[50px] rounded-full flex justify-center items-center">
          <img
            className="rounded-full"
            src="images/logo.jpg"
            alt="logo"
            style={{
              animation: animate ? "spin 3s linear" : "none",
            }}
          />
        </div>

        {/* Navigation */}
        <div className="w-[40%] h-[30px] flex gap-15 items-center justify-end">
          <button
            onClick={homeMeHandler}
            className={`relative font-bold ${
              isActive("/")
                ? "text-yellow-400 after:w-full"
                : "text-white after:w-0"
            } hover:text-yellow-400 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full`}
          >
            Home
          </button>

          <button
            onClick={AboutMeHandler}
            className={`relative font-bold ${
              isActive("/about")
                ? "text-yellow-400 after:w-full"
                : "text-white after:w-0"
            } hover:text-yellow-400 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full`}
          >
            About
          </button>

          <button
            onClick={resumeMeHandler}
            className={`relative font-bold ${
              isActive("/resume")
                ? "text-yellow-400 after:w-full"
                : "text-white after:w-0"
            } hover:text-yellow-400 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full`}
          >
            Resume
          </button>

          <button
            onClick={skillMeHandler}
            className={`relative font-bold ${
              isActive("/skill")
                ? "text-yellow-400 after:w-full"
                : "text-white after:w-0"
            } hover:text-yellow-400 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full`}
          >
            Skill
          </button>

          <button
            onClick={contactusHandler}
            className={`flex items-center justify-center px-4 py-1 rounded-[15px] text-[14px] font-bold transition-colors duration-300 cursor-pointer 
              ${
                isActive("/contact")
                  ? "bg-yellow-500 text-black"
                  : "bg-amber-50 hover:bg-yellow-500"
              }`}
          >
            Contact
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
