import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-black text-white fixed left-10  top-2 right-10 z-10 rounded">
      <div className="container mx-auto px-4 py-3">
        <ul className="flex space-x-6 justify-center">
          <li>
            <Link
              to="/"
              className="hover:text-gray-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-gray-400 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-gray-400 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
