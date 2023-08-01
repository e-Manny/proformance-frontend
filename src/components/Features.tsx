import balance from "../assets/balance.png";
import calculator from "../assets/calculator.png";
import presentation from "../assets/presentation.png";
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
          <h3 className="fs-2 text-body-emphasis">Featured title</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
          <a href="#" className="icon-link">
            Call to action
          </a>
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
          <h3 className="fs-2 text-body-emphasis">Featured title</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
          <a href="#" className="icon-link">
            Call to action
          </a>
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
          <h3 className="fs-2 text-body-emphasis">Featured title</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
          <a href="#" className="icon-link">
            Call to action
          </a>
        </div>
      </div>
    </div>
  );
}
