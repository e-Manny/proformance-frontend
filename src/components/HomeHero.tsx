import buildingsPhoto from "../assets/bldgs.jpg";
export default function HomeHero() {
  return (
    <div className="container col-xxl-8 px-4">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          {/* Photo by <a href="https://unsplash.com/@jdent?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason Dent</a> on <a href="https://unsplash.com/photos/w3eFhqXjkZE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
          <img
            src={buildingsPhoto}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="100"
            loading="lazy"
          ></img>
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Unlock Your Real Estate Investment Potential with Pro-Formance
          </h1>
          <p className="lead">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Primary
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
