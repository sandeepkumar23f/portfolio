import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full shadow-md z-50 bg-lime-300">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-blue-600">
          MyPortfolio
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-24 text-2xl font-semibold">
          <Link to="/" className="text-gray-800 hover:text-blue-600">Home</Link>
          <Link to="/about" className="text-gray-800 hover:text-blue-600">About</Link>
          <Link to="/skills" className="text-gray-800 hover:text-blue-600">Skills</Link>
          <a href="#projects" className="text-gray-800 hover:text-blue-600">Projects</a>
          <a href="#contact" className="text-gray-800 hover:text-blue-600">Contact</a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-600 text-3xl focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-lime-200 z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden px-8 pt-24 pb-6 space-y-6 text-xl font-semibold`}
      >
        <Link to="/" onClick={() => setMenuOpen(false)} className="block text-gray-800 hover:text-blue-600">Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)} className="block text-gray-800 hover:text-blue-600">About</Link>
        <Link to="/skills" onClick={() => setMenuOpen(false)} className="block text-gray-800 hover:text-blue-600">Skills</Link>
        <a href="#projects" onClick={() => setMenuOpen(false)} className="block text-gray-800 hover:text-blue-600">Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-gray-800 hover:text-blue-600">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
