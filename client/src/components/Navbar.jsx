import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#0F1A24] text-white shadow-sm border-b border-gray-600 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-white">
          GuideSpire
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/games" className="hover:text-gray-300">
            Games
          </Link>
          <Link to="/guides" className="hover:text-gray-300">
            Guides
          </Link>
          <Link to="/news" className="hover:text-gray-300">
            News
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
        </nav>

        {/* Desktop Search */}
        <div className="hidden md:block relative">
          <input
            type="text"
            // placeholder="Search"
            placeholder="WIP"
            disabled
            className="opacity-60 cursor-not-allowed pl-10 pr-4 py-2 rounded-md bg-[#1A232C] text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition-all"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">
            <IoIosSearch />
          </span>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        >
          <HiMenu />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1A232C] z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } overflow-auto`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            className="text-white text-2xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          >
            <HiX />
          </button>
        </div>

        <nav className="flex flex-col px-4 py-6 gap-4 text-white text-sm font-medium">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-300"
          >
            Home
          </Link>
          <Link
            to="/games"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-300"
          >
            Games
          </Link>
          <Link
            to="/guides"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-300"
          >
            Guides
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-300"
          >
            About
          </Link>

          {/* Mobile Search */}
          <div className="relative mt-4">
            <input
              type="text"
              // placeholder="Search"
              placeholder="WIP"
              disabled
              className="opacity-60 cursor-not-allowed pl-10 pr-4 py-2 w-full rounded-md bg-[#0F1A24] text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">
              <IoIosSearch />
            </span>
          </div>
        </nav>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/[0.3] bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
