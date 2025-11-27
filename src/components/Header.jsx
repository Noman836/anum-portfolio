import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import "../../src/App.css";

const Header = () => {
  const [animate, setAnimate] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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

  const closeDrawer = () => setIsDrawerOpen(false);
  const openDrawer = () => setIsDrawerOpen(true);

  return (
    <>
      <div
        className={`w-full h-[60px] flex justify-between px-5 md:px-10 lg:px-20 items-center py-5 top-0 fixed transition-colors duration-300 z-50
        ${
          isActive("/")
            ? isScrolled
              ? "bg-black"
              : "bg-transparent"
            : "bg-black"
        }`}
      >
        {/* Logo */}
        <div className="w-[40px] md:w-[50px] rounded-full flex justify-center items-center">
          <img
            className="rounded-full"
            src="images/logo.jpg"
            alt="logo"
            style={{
              animation: animate ? "spin 3s linear" : "none",
            }}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-auto h-[30px] gap-6 items-center justify-end">
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

        {/* Mobile: Hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 text-white"
          aria-label="Open menu"
          onClick={openDrawer}
        >
          <HiOutlineMenu size={28} />
        </button>
      </div>

      {/* Side Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isDrawerOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isDrawerOpen}
        onClick={closeDrawer}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-72 sm:w-80 bg-black text-white shadow-xl transform transition-transform duration-300 ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <img src="images/logo.jpg" alt="logo" className="w-8 h-8 rounded-full" />
              <span className="font-semibold">Menu</span>
            </div>
            <button aria-label="Close menu" onClick={closeDrawer} className="p-2">
              <HiOutlineX size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-2 p-4">
            <button
              onClick={() => {
                homeMeHandler();
                closeDrawer();
              }}
              className={`text-left px-3 py-2 rounded-md font-medium ${
                isActive("/") ? "bg-white/10 text-yellow-400" : "hover:bg-white/10"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                AboutMeHandler();
                closeDrawer();
              }}
              className={`text-left px-3 py-2 rounded-md font-medium ${
                isActive("/about") ? "bg-white/10 text-yellow-400" : "hover:bg-white/10"
              }`}
            >
              About
            </button>
            <button
              onClick={() => {
                resumeMeHandler();
                closeDrawer();
              }}
              className={`text-left px-3 py-2 rounded-md font-medium ${
                isActive("/resume") ? "bg-white/10 text-yellow-400" : "hover:bg-white/10"
              }`}
            >
              Resume
            </button>
            <button
              onClick={() => {
                skillMeHandler();
                closeDrawer();
              }}
              className={`text-left px-3 py-2 rounded-md font-medium ${
                isActive("/skill") ? "bg-white/10 text-yellow-400" : "hover:bg-white/10"
              }`}
            >
              Skill
            </button>
            <button
              onClick={() => {
                contactusHandler();
                closeDrawer();
              }}
              className={`mt-2 text-left px-3 py-2 rounded-md font-semibold ${
                isActive("/contact")
                  ? "bg-yellow-500 text-black"
                  : "bg-amber-50 text-black hover:bg-yellow-500"
              }`}
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
