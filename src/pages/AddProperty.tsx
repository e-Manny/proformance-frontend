import proformance from "../assets/proformance_transparent.png";
import Footer from "../components/Footer";
import httpClient from "../httpClient";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AddProperty() {
  const [propertyName, setPropertyName] = useState("");
  const [yearBuilt, setYearBuilt] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [purchaseClosingCosts, setPurchaseClosingCosts] = useState("");
  const [renovationCosts, setRenovationCosts] = useState("");
  const [valueGrowthRate, setValueGrowthRate] = useState("");
  const [anualRentalIncome, setAnualRentalIncome] = useState("");
  const [rentGrowthRate, setRentGrowthRate] = useState("");
  const [propertyTax, setPropertyTax] = useState("");
  const [insurance, setInsurance] = useState("");
  const [maintenance, setMaintenance] = useState("");
  const [propertyManagement, setPropertyManagement] = useState("");
  const [otherExpense, setOtherExpense] = useState("");
  const [expenseGrowth, setExpenseGrowth] = useState("");
  const [capEx, setCapEx] = useState("");
  const [capExGrowthRate, setCapExGrowthRate] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [amortizationYears, setAmortizationYears] = useState("");
  const [holdingPeriod, setHoldingPeriod] = useState("");
  const [saleClosingCosts, setSaleClosingCosts] = useState("");

  const navigate = useNavigate();
  const addProperty = async () => {
    try {
      const resp = await httpClient.post("http://127.0.0.1:5000/addproperty", {
        propertyName,
        yearBuilt,
        address,
        state,
        city,
        zipCode,
        purchasePrice,
        purchaseClosingCosts,
        renovationCosts,
        valueGrowthRate,
        anualRentalIncome,
        rentGrowthRate,
        propertyTax,
        insurance,
        maintenance,
        propertyManagement,
        otherExpense,
        expenseGrowth,
        capEx,
        capExGrowthRate,
        loanAmount,
        interestRate,
        amortizationYears,
        holdingPeriod,
        saleClosingCosts,
      });
      navigate("/portfolio");
    } catch (error: any) {
      if (error.response.status === 401) {
        alert("Unauthorized");
      }
    }
  };
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
            <h2>Add A Property</h2>
            <p className="lead">
              Fill out the details below to add a new property to your
              portfolio.
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
                      value={propertyName}
                      onChange={(e) => setPropertyName(e.target.value)}
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
                      value={yearBuilt}
                      onChange={(e) => setYearBuilt(e.target.value)}
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
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
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
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    ></input>
                    <div className="invalid-feedback">
                      Please enter a valid city.
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="state" className="form-label">
                      State
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="state"
                      placeholder="California"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    ></input>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="zipCode" className="form-label">
                      Zip
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="zipCode"
                      minLength={5}
                      maxLength={5}
                      placeholder="12345"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                    ></input>
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                </div>
                <hr className="my-4"></hr>
                <h4 className="mb-3">Acquisition Information</h4>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="purchasePrice" className="form-label">
                      Purchase Price
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="purchasePrice"
                      value={purchasePrice}
                      onChange={(e) => setPurchasePrice(e.target.value)}
                    ></input>
                    <div className="invalid-feedback">
                      Valid purchase price is required.
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label
                      htmlFor="purchaseClosingCosts"
                      className="form-label"
                    >
                      Closing Costs
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="purchaseClosingCosts"
                      value={purchaseClosingCosts}
                      onChange={(e) => setPurchaseClosingCosts(e.target.value)}
                    ></input>
                    <div className="invalid-feedback">
                      Valid closing costs is required.
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="renovationCosts" className="form-label">
                      Initial Renovation Costs
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="renovationCosts"
                      value={renovationCosts}
                      onChange={(e) => setRenovationCosts(e.target.value)}
                    ></input>
                    <div className="invalid-feedback">
                      Valid renovation costs is required.
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="valueGrowthRate" className="form-label">
                      Assumed Annual Value Growth Rate (%)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="valueGrowthRate"
                      value={valueGrowthRate}
                      onChange={(e) => setValueGrowthRate(e.target.value)}
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
                    <label htmlFor="anualRentalIncome" className="form-label">
                      Annual Rental Income
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="anualRentalIncome"
                      value={anualRentalIncome}
                      onChange={(e) => setAnualRentalIncome(e.target.value)}
                    ></input>
                    <div className="invalid-feedback">
                      Valid annual rental income is required.
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="rentGrowthRate" className="form-label">
                      Assumed Annual Rent Growth Rate (%)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="rentGrowthRate"
                      value={rentGrowthRate}
                      onChange={(e) => setRentGrowthRate(e.target.value)}
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
                      value={propertyTax}
                      onChange={(e) => setPropertyTax(e.target.value)}
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
                      value={insurance}
                      onChange={(e) => setInsurance(e.target.value)}
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
                      value={maintenance}
                      onChange={(e) => setMaintenance(e.target.value)}
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
                      value={propertyManagement}
                      onChange={(e) => setPropertyManagement(e.target.value)}
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
                      value={otherExpense}
                      onChange={(e) => setOtherExpense(e.target.value)}
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
                      value={expenseGrowth}
                      onChange={(e) => setExpenseGrowth(e.target.value)}
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
                      value={capEx}
                      onChange={(e) => setCapEx(e.target.value)}
                    ></input>
                    <div className="invalid-feedback">
                      Valid annual capital expenditure is required.
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="capExGrowthRate" className="form-label">
                      Assumed Annual CapEx Growth Rate (%)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="capExGrowthRate"
                      value={capExGrowthRate}
                      onChange={(e) => setCapExGrowthRate(e.target.value)}
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
                    <label htmlFor="loanAmount" className="form-label">
                      Loan Amount
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="loanAmount"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
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
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                    ></input>
                    <div className="invalid-feedback">
                      Valid interest rate is required.
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <label htmlFor="amortizationYears" className="form-label">
                      Amortization (years)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="amortizationYears"
                      value={amortizationYears}
                      onChange={(e) => setAmortizationYears(e.target.value)}
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
                      value={holdingPeriod}
                      onChange={(e) => setHoldingPeriod(e.target.value)}
                    ></input>
                    <div className="invalid-feedback">
                      Valid holding period is required.
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="saleClosingCosts" className="form-label">
                      Sale Closing Costs
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="saleClosingCosts"
                      value={saleClosingCosts}
                      onChange={(e) => setSaleClosingCosts(e.target.value)}
                    ></input>
                    <div className="invalid-feedback">
                      Valid closing costs is required.
                    </div>
                  </div>
                </div>
                <hr className="my-4"></hr>
                <button
                  className="w-100 btn btn-primary btn-lg"
                  type="button"
                  onClick={addProperty}
                >
                  Add Property
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
