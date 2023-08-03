import proformance from "../assets/proformance_transparent.png";
import Footer from "../components/Footer";
export default function EditProperty() {
  return (
    <>
      <div className="container">
        <main>
          <div className="py-5 text-center">
            <img
              className="d-block mx-auto"
              src={proformance}
              alt=""
              width="120"
              height="120"
            ></img>
            <h2>Edit Property</h2>
            <p className="lead">
              Fill out the details below to replace the values of your property.
            </p>
          </div>

          <div className="row g-5">
            <div className="col">
              <h4 className="mb-3">Property Details</h4>
              <form className="needs-validation">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="propertyName" className="form-label">
                      Property Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="propertyName"
                      placeholder="Main St Deal"
                    ></input>
                    <div className="invalid-feedback">
                      Valid property name is required.
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="yearBuilt" className="form-label">
                      Year Built
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="yearBuilt"
                      min={1700}
                      max={2100}
                      placeholder="2002"
                    ></input>
                    <div className="invalid-feedback">
                      Valid year built is required.
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="1234 Main St"
                    ></input>
                    <div className="invalid-feedback">
                      Please enter a valid address.
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="city" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      placeholder="New York"
                    ></input>
                    <div className="invalid-feedback">
                      Please enter a valid city.
                    </div>
                  </div>
                  <div className="col-md-5">
                    <label htmlFor="country" className="form-label">
                      Country
                    </label>
                    <select className="form-select" id="country">
                      <option>Choose...</option>
                      <option>United States</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="state" className="form-label">
                      State
                    </label>
                    <select className="form-select" id="state">
                      <option>Choose...</option>
                      <option>California</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="zip" className="form-label">
                      Zip
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      minLength={5}
                      maxLength={5}
                      placeholder="12345"
                    ></input>
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                </div>
                <hr className="my-4"></hr>
                <h4 className="mb-3">Acquisition Information</h4>
                <div className="row g-3">
                  <div className="col-sm-4">
                    <label htmlFor="purchasePrice" className="form-label">
                      Purchase Price
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="purchasePrice"
                    ></input>
                    <div className="invalid-feedback">
                      Valid purchase price is required.
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <label htmlFor="closingCosts" className="form-label">
                      Closing Costs
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="closingCosts"
                    ></input>
                    <div className="invalid-feedback">
                      Valid closing costs is required.
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <label
                      htmlFor="annualPropertyGrowth"
                      className="form-label"
                    >
                      Assumed Annual Value Growth Rate (%)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="annualPropertyGrowth"
                    ></input>
                    <div className="invalid-feedback">
                      Valid annual growth is required.
                    </div>
                  </div>
                </div>
                <hr className="my-4"></hr>
                <h4 className="mb-3">Rental Income</h4>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="income" className="form-label">
                      Annual Rental Income
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="income"
                    ></input>
                    <div className="invalid-feedback">
                      Valid annual rental income is required.
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="closingCosts" className="form-label">
                      Assumed Annual Rent Growth Rate (%)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="closingCosts"
                    ></input>
                    <div className="invalid-feedback">
                      Valid annual rental growth rate is required.
                    </div>
                  </div>
                </div>
                <hr className="my-4"></hr>
                <h4 className="mb-3">Operating Expenses</h4>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="propertyTax" className="form-label">
                      Property Tax (per year)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="propertyTax"
                    ></input>
                    <div className="invalid-feedback">
                      Valid purchase price is required.
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="insurance" className="form-label">
                      Insurance (per year)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="insurance"
                    ></input>
                    <div className="invalid-feedback">
                      Valid insurance cost is required.
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="maintenance" className="form-label">
                      Maintenance (per year)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="maintenance"
                    ></input>
                    <div className="invalid-feedback">
                      Valid maintenance cost is required.
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="propertyManagement" className="form-label">
                      Property Management (per year)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="propertyManagement"
                    ></input>
                    <div className="invalid-feedback">
                      Valid management cost is required.
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="otherExpense" className="form-label">
                      Other Operating Expenses (per year)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="otherExpense"
                    ></input>
                    <div className="invalid-feedback">
                      Valid other cost is required.
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="expenseGrowth" className="form-label">
                      Assumed Operating Expense Growth (%)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="expenseGrowth"
                    ></input>
                    <div className="invalid-feedback">
                      Valid management cost is required.
                    </div>
                  </div>
                </div>
                <hr className="my-4"></hr>
                <h4 className="mb-3">Capital Expenditures</h4>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="capEx" className="form-label">
                      Capital Expenditures (per year)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="capEx"
                    ></input>
                    <div className="invalid-feedback">
                      Valid annual capital expenditure is required.
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="capExGrowth" className="form-label">
                      Assumed Annual CapEx Growth Rate (%)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="capExGrowth"
                    ></input>
                    <div className="invalid-feedback">
                      Valid annual capEx growth rate is required.
                    </div>
                  </div>
                </div>
                <hr className="my-4"></hr>
                <h4 className="mb-3">Debt Service</h4>
                <div className="row g-3">
                  <div className="col-sm-4">
                    <label htmlFor="LoanAmount" className="form-label">
                      Loan Amount
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="LoanAmount"
                    ></input>
                    <div className="invalid-feedback">
                      Valid loan amount is required.
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <label htmlFor="interestRate" className="form-label">
                      Interest Rate (%)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="interestRate"
                    ></input>
                    <div className="invalid-feedback">
                      Valid interest rate is required.
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <label htmlFor="amortization" className="form-label">
                      Amortization
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="amortization"
                    ></input>
                    <div className="invalid-feedback">
                      Valid amortization is required.
                    </div>
                  </div>
                </div>
                <h4 className="mb-3">Disposition Information</h4>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="holdingPeriod" className="form-label">
                      Holding Period (months)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="holdingPeriod"
                    ></input>
                    <div className="invalid-feedback">
                      Valid holding period is required.
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="saleClosingCosts" className="form-label">
                      Closing Costs
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="saleClosingCosts"
                    ></input>
                    <div className="invalid-feedback">
                      Valid closing costs is required.
                    </div>
                  </div>
                </div>
                <hr className="my-4"></hr>
                <button className="w-100 btn btn-primary btn-lg" type="submit">
                  Update Property
                </button>
              </form>
            </div>
          </div>
        </main>
        <div className="my-5">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
