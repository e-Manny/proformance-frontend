import { Link } from "react-router-dom";
export default function SignedNavbar() {
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
            <a href="/portfolio" className="nav-link link-body-emphasis px-2">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a href="/addProperty" className="nav-link link-body-emphasis px-2">
              Add Property
            </a>
          </li>
        </ul>
        <ul className="nav">
          <li className="nav-item">
            <Link to="#" className="nav-link link-body-emphasis px-2">
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
