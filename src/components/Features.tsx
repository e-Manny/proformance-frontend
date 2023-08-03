import balance from "../assets/balance.png";
import calculator from "../assets/calculator.png";
import presentation from "../assets/presentation.png";
import { Link } from "react-router-dom";
export default function Features() {
  return (
    <div className="container px-4" id="featured-3">
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
            <img
              src={balance}
              className="d-block mx-lg-auto img-fluid bg-transparent"
              alt="Bootstrap Themes"
              width="50"
              height="50"
              loading="lazy"
            ></img>
          </div>
          <h3 className="fs-2 text-body-emphasis">
            Empower Your Investment Strategy
          </h3>
          <p>
            Unleash the power of scenario modeling to find your ideal real
            estate deals. With Pro-Formance's modeling tool, you can
            effortlessly explore different scenarios, crunch the numbers, and
            discover how to make the deal work best for you.
          </p>
          <Link to="/signup" className="icon-link">
            Balance Deals!
          </Link>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
            <img
              src={calculator}
              className="d-block mx-lg-auto img-fluid bg-transparent"
              alt="Bootstrap Themes"
              width="50"
              height="50"
              loading="lazy"
            ></img>
          </div>
          <h3 className="fs-2 text-body-emphasis">
            Effortless Pro Forma Analysis
          </h3>
          <p>
            Our Pro-Formance analysis tool streamlines the process, making
            property evaluation quick and intuitive. Save time and make
            confident investment decisions with just a few clicks before having
            to fully underwrite the property.
          </p>
          <Link to="/signup" className="icon-link">
            Save Time!
          </Link>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
            <img
              src={presentation}
              className="d-block mx-lg-auto img-fluid bg-transparent"
              alt="Bootstrap Themes"
              width="50"
              height="50"
              loading="lazy"
            ></img>
          </div>
          <h3 className="fs-2 text-body-emphasis">
            Data-Driven Decisions Made Simple{" "}
          </h3>
          <p>
            Make informed decisions with data visualization and actionable
            metrics. Pro-Formance provides deal-specific analytics and trends,
            allowing you to visualize key performance indicators and gain
            valuable insights for smarter investment choices.
          </p>
          <Link to="/signup" className="icon-link">
            Build a Portfolio!
          </Link>
        </div>
      </div>
    </div>
  );
}
