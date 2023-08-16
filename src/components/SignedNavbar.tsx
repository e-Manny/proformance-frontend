import { Link } from "react-router-dom";
import httpClient from "../httpClient";
import { useNavigate } from "react-router-dom";
export default function SignedNavbar() {
  const navigate = useNavigate();
  const userSignout = async () => {
    try {
      await httpClient.post("http://127.0.0.1:5000/logout");
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };
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
            <Link
              to="/"
              className="nav-link link-body-emphasis px-2"
              onClick={userSignout}
            >
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
