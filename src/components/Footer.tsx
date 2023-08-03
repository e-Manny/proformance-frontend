import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import portfolio from "../assets/portfolio.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-body-secondary">
              © 2023 Proformance
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <Link
                className="text-body-secondary"
                to="https://www.linkedin.com/in/manny-espinoza-143809115/"
              >
                <img
                  src={linkedin}
                  className="d-block mx-lg-auto img-fluid bg-transparent"
                  alt="Bootstrap Themes"
                  width="30"
                  height="24"
                  loading="lazy"
                ></img>
              </Link>
            </li>
            <li className="ms-3">
              <Link
                className="text-body-secondary"
                to="https://github.com/e-Manny"
              >
                <img
                  src={github}
                  className="d-block mx-lg-auto img-fluid bg-transparent"
                  alt="Bootstrap Themes"
                  width="30"
                  height="24"
                  loading="lazy"
                ></img>
              </Link>
            </li>
            <li className="ms-3">
              <Link
                className="text-body-secondary"
                to="https://espinman.netlify.app/"
              >
                <img
                  src={portfolio}
                  className="d-block mx-lg-auto img-fluid bg-transparent"
                  alt="Bootstrap Themes"
                  width="30"
                  height="24"
                  loading="lazy"
                ></img>
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}
