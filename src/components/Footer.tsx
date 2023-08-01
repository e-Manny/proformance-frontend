import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import portfolio from "../assets/portfolio.png";
export default function Footer() {
  return (
    <>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-body-secondary">
              © 2023 Manuel Espinoza
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <img
                  src={linkedin}
                  className="d-block mx-lg-auto img-fluid bg-transparent"
                  alt="Bootstrap Themes"
                  width="30"
                  height="24"
                  loading="lazy"
                ></img>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <img
                  src={github}
                  className="d-block mx-lg-auto img-fluid bg-transparent"
                  alt="Bootstrap Themes"
                  width="30"
                  height="24"
                  loading="lazy"
                ></img>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <img
                  src={portfolio}
                  className="d-block mx-lg-auto img-fluid bg-transparent"
                  alt="Bootstrap Themes"
                  width="30"
                  height="24"
                  loading="lazy"
                ></img>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}
