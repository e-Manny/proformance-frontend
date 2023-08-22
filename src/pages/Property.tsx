import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import httpClient from "../httpClient";
import plusSign from "../assets/plusSign.png";

export default function Property() {
  const { id } = useParams();
  const [propertyCashFlow, setPropertyCashFlow] = useState({});
  const [propertyNames, setPropertyNames] = useState([]);
  const [propertyIDs, setPropertyIDs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await httpClient.post("http://127.0.0.1:5000/property", {
          id,
        });
        setPropertyCashFlow(resp.data.cashflow);
        console.log(propertyCashFlow);
      } catch (error) {
        console.log("Not authenticated");
      }
      try {
        const resp = await httpClient.get("http://127.0.0.1:5000/@me");
        setPropertyNames(resp.data.propertyNames);
        setPropertyIDs(resp.data.propertyIDs);
      } catch (error) {
        console.log("Not authenticated");
      }
    };
    fetchData();
  }, [id]);

  const deleteProperty = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this property?"
    );
    if (confirmed) {
      try {
        await httpClient.post("http://127.0.0.1:5000/deleteproperty", {
          id,
        });
        navigate("/portfolio");
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const userSignout = async () => {
    try {
      await httpClient.post("http://127.0.0.1:5000/logout");
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      window.location.reload();
    }
  };

  if (Object.keys(propertyCashFlow).length != 0) {
    return (
      <>
        <header
          className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow"
          data-bs-theme="dark"
        >
          <Link
            className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white"
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
                Expand
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
                <h1 className="h2">{(propertyCashFlow as any).propertyName}</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group me-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => navigate(`/editproperty/${id}`)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={deleteProperty}
                    >
                      Delete
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

              {/* <h2>{dataObject.totalMonths}-Month Hold Period Analysis</h2> */}
              <h2>
                {(propertyCashFlow as any).totalMonths}-Month Hold Period
                Analysis
              </h2>
              <div className="table-responsive small">
                <table className="table table-striped table-sm text-center">
                  <thead>
                    <tr>
                      <th
                        className="bg-primary text-light"
                        style={{ textAlign: "right" }}
                      >
                        Month
                      </th>
                      {(propertyCashFlow as any).months.map((month: any) => (
                        <th scope="col" className="bg-primary text-light px-3">
                          {month.month}
                        </th>
                      ))}
                    </tr>
                    <tr>
                      <th
                        style={{ textAlign: "right" }}
                        className="bg-primary text-light"
                      >
                        Year
                      </th>
                      {(propertyCashFlow as any).months.map((month: any) => (
                        <th scope="col" className="bg-primary text-light px-3">
                          {month.year}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        style={{ textAlign: "right" }}
                        className="bg-secondary text-light"
                      >
                        Rental Income
                      </td>
                      {(propertyCashFlow as any).months.map((month: any) => (
                        <td className="bg-light px-3">{month.rent}</td>
                      ))}
                    </tr>
                    <tr>
                      <td
                        style={{ textAlign: "right" }}
                        className="bg-secondary text-light"
                      >
                        Taxes
                      </td>
                      {(propertyCashFlow as any).months.map((month: any) => (
                        <td className="bg-light px-3">{month.taxes}</td>
                      ))}
                    </tr>
                    <tr>
                      <td
                        style={{ textAlign: "right" }}
                        className="bg-secondary text-light"
                      >
                        Insurance
                      </td>
                      {(propertyCashFlow as any).months.map((month: any) => (
                        <td className="bg-light px-3">{month.insurance}</td>
                      ))}
                    </tr>
                    <tr>
                      <td
                        style={{ textAlign: "right" }}
                        className="bg-secondary text-light"
                      >
                        Maintenance
                      </td>
                      {(propertyCashFlow as any).months.map((month: any) => (
                        <td className="bg-light px-3">{month.maintenance}</td>
                      ))}
                    </tr>
                    <tr>
                      <td
                        style={{ textAlign: "right" }}
                        className="bg-secondary text-light"
                      >
                        Property Management
                      </td>
                      {(propertyCashFlow as any).months.map((month: any) => (
                        <td className="bg-light px-3">{month.management}</td>
                      ))}
                    </tr>

                    <tr style={{ borderBottom: "1pt solid black" }}>
                      <td
                        style={{ textAlign: "right" }}
                        className="bg-secondary text-light"
                      >
                        Other
                      </td>
                      {(propertyCashFlow as any).months.map((month: any) => (
                        <td className="bg-light px-3">{month.other}</td>
                      ))}
                    </tr>
                    <tr
                      style={{ borderBottom: "1pt solid black" }}
                      className="fw-bold"
                    >
                      <td
                        style={{ fontWeight: "bolder", textAlign: "right" }}
                        className="bg-secondary text-light"
                      >
                        Net Operating Income
                      </td>
                      {(propertyCashFlow as any).months.map((month: any) => (
                        <td className="bg-light px-3">{month.noi}</td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: "1pt solid black" }}>
                      <td
                        style={{ textAlign: "right" }}
                        className="bg-secondary text-light"
                      >
                        Capital Expenditures
                      </td>
                      {(propertyCashFlow as any).months.map((month: any) => (
                        <td className="bg-light px-3">{month.capEx}</td>
                      ))}
                    </tr>
                    <tr
                      style={{ borderBottom: "1pt solid black" }}
                      className="fw-bold"
                    >
                      <td
                        style={{ fontWeight: "bolder", textAlign: "right" }}
                        className="bg-secondary text-light"
                      >
                        Cash Flow Before Debt Service
                      </td>
                      {(propertyCashFlow as any).months.map((month: any) => (
                        <td className="bg-light px-3">{month.cfbds}</td>
                      ))}
                    </tr>
                    <tr>
                      <td
                        style={{ textAlign: "right" }}
                        className="bg-secondary text-light"
                      >
                        Principal Payments
                      </td>
                      {(propertyCashFlow as any).months.map((month: any) => (
                        <td className="bg-light px-3">{month.principal}</td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: "1pt solid black" }}>
                      <td
                        style={{ textAlign: "right" }}
                        className="bg-secondary text-light"
                      >
                        Interest Payments
                      </td>
                      {(propertyCashFlow as any).months.map((month: any) => (
                        <td className="bg-light px-3">{month.interest}</td>
                      ))}
                    </tr>
                    <tr
                      style={{ borderBottom: "1pt solid black" }}
                      className="fw-bold"
                    >
                      <td
                        style={{ fontWeight: "bolder", textAlign: "right" }}
                        className="bg-secondary text-light"
                      >
                        Cash Flow After Debt Service
                      </td>
                      {(propertyCashFlow as any).months.map((month: any) => (
                        <td className="bg-light px-3">{month.cfads}</td>
                      ))}
                    </tr>
                    <tr>
                      <td
                        style={{ textAlign: "right" }}
                        className="bg-secondary text-light"
                      >
                        Purchase Price
                      </td>
                      {(propertyCashFlow as any).months.map((month: any) => (
                        <td className="bg-light px-3">{month.purchase}</td>
                      ))}
                    </tr>
                    <tr>
                      <td
                        style={{ textAlign: "right" }}
                        className="bg-secondary text-light"
                      >
                        Closing Costs
                      </td>
                      {(propertyCashFlow as any).months.map((month: any) => (
                        <td className="bg-light px-3">{month.closingCosts}</td>
                      ))}
                    </tr>
                    <tr>
                      <td
                        style={{ textAlign: "right" }}
                        className="bg-secondary text-light"
                      >
                        Initial Renovations
                      </td>
                      {(propertyCashFlow as any).months.map((month: any) => (
                        <td className="bg-light px-3">
                          {month.initialRenovations}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td
                        style={{ textAlign: "right" }}
                        className="bg-secondary text-light"
                      >
                        Sale Proceeds
                      </td>
                      {(propertyCashFlow as any).months.map((month: any) => (
                        <td className="bg-light px-3">{month.saleProceeds}</td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: "1pt solid black" }}>
                      <td
                        style={{ textAlign: "right" }}
                        className="bg-secondary text-light"
                      >
                        Costs of Sale
                      </td>
                      {(propertyCashFlow as any).months.map((month: any) => (
                        <td className="bg-light px-3">{month.saleCost}</td>
                      ))}
                    </tr>
                    <tr
                      style={{ borderBottom: "1pt solid black" }}
                      className="fw-bold"
                    >
                      <td
                        style={{ fontWeight: "bolder", textAlign: "right" }}
                        className="bg-secondary text-light"
                      >
                        Total Unlevered Cash Flow
                      </td>
                      {(propertyCashFlow as any).months.map((month: any) => (
                        <td className="bg-light px-3">{month.unleveredCF}</td>
                      ))}
                    </tr>
                    <tr>
                      <td
                        style={{ textAlign: "right" }}
                        className="bg-secondary text-light"
                      >
                        Loan Proceeds
                      </td>
                      {(propertyCashFlow as any).months.map((month: any) => (
                        <td className="bg-light px-3">{month.loanProceeds}</td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: "1pt solid black" }}>
                      <td
                        style={{ textAlign: "right" }}
                        className="bg-secondary text-light"
                      >
                        Loan Payoff
                      </td>
                      {(propertyCashFlow as any).months.map((month: any) => (
                        <td className="bg-light px-3">{month.loanPayoff}</td>
                      ))}
                    </tr>
                    <tr
                      style={{ borderBottom: "1pt solid black" }}
                      className="fw-bold"
                    >
                      <td
                        style={{ fontWeight: "bolder", textAlign: "right" }}
                        className="bg-secondary text-light"
                      >
                        Total Levered Cash Flow
                      </td>
                      {(propertyCashFlow as any).months.map((month: any) => (
                        <td className="bg-light px-3">
                          {month.totalLeveredCF}
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
  } else {
    return <h1>Loading...</h1>; // Render a loading state while fetching data
  }
}
