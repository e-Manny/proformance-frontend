import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="py-2 bg-body-tertiary border-bottom ">
      <div className="container d-flex flex-wrap">
        <ul className="nav me-auto">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link link-body-emphasis px-2 active"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link link-body-emphasis px-2">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link link-body-emphasis px-2">
              About
            </a>
          </li>
        </ul>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/signin" className="nav-link link-body-emphasis px-2">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link link-body-emphasis px-2">
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
