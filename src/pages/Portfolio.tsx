import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import testDict from "../components/testDict";
import plusSign from "../assets/plusSign.png";
import hamburgerMenu from "../assets/hamburger.png";
import httpClient from "../httpClient";

const dataObject = testDict;

export default function Portfolio() {
  const [propertyNames, setPropertyNames] = useState([]);
  const [propertyIDs, setPropertyIDs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await httpClient.get("http://127.0.0.1:5000/@me");
        setPropertyNames(resp.data.propertyNames);
        setPropertyIDs(resp.data.propertyIDs);
      } catch (error) {
        console.log("Not authenticated");
      }
    };
    fetchData();
  }, []);

  const userSignout = async () => {
    try {
      await httpClient.post("http://127.0.0.1:5000/logout");
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      window.location.reload();
    }
  };
  return (
    <>
      <header
        className="navbar sticky-top bg-light flex-md-nowrap p-0 shadow"
        data-bs-theme="dark"
      >
        <Link
          className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-dark"
          to="/"
          style={{ textDecoration: "none" }}
        >
          Proformance
        </Link>
        <ul className="navbar-nav flex-row d-md-none">
          <li className="nav-item text-nowrap">
            <button
              className="nav-link px-3 text-white"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <svg className="bi"><use xlink:href="#list"></use></svg> */}
              <img src={hamburgerMenu} height={20} width={20}></img>
            </button>
          </li>
        </ul>
      </header>
      <div className="container-fluid">
        <div className="row">
          <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
            <div
              className="offcanvas-md offcanvas-end bg-body-tertiary"
              tabIndex={-1}
              id="sidebarMenu"
              aria-labelledby="sidebarMenuLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="sidebarMenuLabel">
                  Proformance
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  data-bs-target="#sidebarMenu"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link
                      className="nav-link d-flex align-items-center gap-2 active"
                      aria-current="page"
                      to="/portfolio"
                    >
                      Portfolio
                    </Link>
                  </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                  <span>Properties</span>
                  <Link
                    className="link-secondary"
                    to="/addproperty"
                    aria-label="Add a new report"
                  >
                    <img src={plusSign} height={20} width={20}></img>
                  </Link>
                </h6>
                <ul className="nav flex-column mb-auto">
                  <li className="nav-item">
                    {propertyNames.map((name, i) => (
                      <Link
                        className="nav-link d-flex align-items-center gap-2"
                        to={`/property/${propertyIDs[i]}`}
                      >
                        {name}
                      </Link>
                    ))}
                  </li>
                  <li className="nav-item"></li>
                </ul>

                <hr className="my-3"></hr>

                <ul className="nav flex-column mb-auto">
                  <li className="nav-item">
                    <Link
                      className="nav-link d-flex align-items-center gap-2"
                      onClick={userSignout}
                      to={"#"}
                    >
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Portfolio View</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Export
                  </button>
                </div>
              </div>
            </div>

            <canvas
              className="my-4 w-100"
              id="myChart"
              width="798"
              height="336"
              style={{
                height: "269px",
                width: "638px",
                display: "block",
                boxSizing: "border-box",
              }}
            ></canvas>

            <h2>Portfolio Performance Analysis</h2>
            <div className="table-responsive small">
              <table className="table table-striped table-sm text-center">
                <thead>
                  <tr>
                    <th style={{ textAlign: "right" }}>Month</th>
                    {dataObject.months.map((month) => (
                      <th scope="col" style={{ textAlign: "right" }}>
                        {month.month}
                      </th>
                    ))}
                  </tr>
                  <tr>
                    <th style={{ textAlign: "right" }}>Year</th>
                    {dataObject.months.map((month) => (
                      <th style={{ textAlign: "right" }} scope="col">
                        {month.year}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ textAlign: "right" }}>Rental Income</td>
                    {dataObject.months.map((month) => (
                      <td style={{ textAlign: "right" }}>{month.rent}</td>
                    ))}
                  </tr>
                  <tr>
                    <td style={{ textAlign: "right" }}>Taxes</td>
                    {dataObject.months.map((month) => (
                      <td style={{ textAlign: "right" }}>{month.taxes}</td>
                    ))}
                  </tr>
                  <tr>
                    <td style={{ textAlign: "right" }}>Insurance</td>
                    {dataObject.months.map((month) => (
                      <td style={{ textAlign: "right" }}>{month.insurance}</td>
                    ))}
                  </tr>
                  <tr>
                    <td style={{ textAlign: "right" }}>Maintenance</td>
                    {dataObject.months.map((month) => (
                      <td style={{ textAlign: "right" }}>
                        {month.maintenance}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td style={{ textAlign: "right" }}>Property Management</td>
                    {dataObject.months.map((month) => (
                      <td style={{ textAlign: "right" }}>{month.management}</td>
                    ))}
                  </tr>
                  <tr>
                    <td style={{ textAlign: "right" }}>Other</td>
                    {dataObject.months.map((month) => (
                      <td style={{ textAlign: "right" }}>{month.other}</td>
                    ))}
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bolder", textAlign: "right" }}>
                      Net Operating Income
                    </td>
                    {dataObject.months.map((month) => (
                      <td style={{ textAlign: "right" }}>{month.noi}</td>
                    ))}
                  </tr>
                  <tr>
                    <td style={{ textAlign: "right" }}>Capital Expenditures</td>
                    {dataObject.months.map((month) => (
                      <td style={{ textAlign: "right" }}>{month.capex}</td>
                    ))}
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bolder", textAlign: "right" }}>
                      Cash Flow Before Debt Service
                    </td>
                    {dataObject.months.map((month) => (
                      <td style={{ textAlign: "right" }}>{month.cfbds}</td>
                    ))}
                  </tr>
                  <tr>
                    <td style={{ textAlign: "right" }}>Principal Payments</td>
                    {dataObject.months.map((month) => (
                      <td style={{ textAlign: "right" }}>{month.principal}</td>
                    ))}
                  </tr>
                  <tr>
                    <td style={{ textAlign: "right" }}>Interest Payments</td>
                    {dataObject.months.map((month) => (
                      <td style={{ textAlign: "right" }}>{month.interest}</td>
                    ))}
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bolder", textAlign: "right" }}>
                      Cash Flow After Debt Service
                    </td>
                    {dataObject.months.map((month) => (
                      <td style={{ textAlign: "right" }}>{month.cfads}</td>
                    ))}
                  </tr>
                  <tr>
                    <td style={{ textAlign: "right" }}>Purchase Price</td>
                    {dataObject.months.map((month) => (
                      <td style={{ textAlign: "right" }}>{month.purchase}</td>
                    ))}
                  </tr>
                  <tr>
                    <td style={{ textAlign: "right" }}>Closing Costs</td>
                    {dataObject.months.map((month) => (
                      <td style={{ textAlign: "right" }}>
                        {month.closingCosts}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td style={{ textAlign: "right" }}>Initial Renovations</td>
                    {dataObject.months.map((month) => (
                      <td style={{ textAlign: "right" }}>
                        {month.initialRenovations}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td style={{ textAlign: "right" }}>Sale Proceeds</td>
                    {dataObject.months.map((month) => (
                      <td style={{ textAlign: "right" }}>
                        {month.saleProceeds}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td style={{ textAlign: "right" }}>Costs of Sale</td>
                    {dataObject.months.map((month) => (
                      <td style={{ textAlign: "right" }}>{month.saleCost}</td>
                    ))}
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bolder", textAlign: "right" }}>
                      Total Unlevered Cash Flow
                    </td>
                    {dataObject.months.map((month) => (
                      <td style={{ textAlign: "right" }}>
                        {month.unleveredCF}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td style={{ textAlign: "right" }}>Loan Proceeds</td>
                    {dataObject.months.map((month) => (
                      <td style={{ textAlign: "right" }}>
                        {month.loanProceeds}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td style={{ textAlign: "right" }}>Loan Payoff</td>
                    {dataObject.months.map((month) => (
                      <td style={{ textAlign: "right" }}>{month.loanPayoff}</td>
                    ))}
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bolder", textAlign: "right" }}>
                      Total Levered Cash Flow
                    </td>
                    {dataObject.months.map((month) => (
                      <td style={{ textAlign: "right" }}>
                        {month.totalLeverCF}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
