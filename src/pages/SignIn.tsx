import Navbar from "../components/Navbar";
export default function SignIn() {
  return (
    <>
      <Navbar></Navbar>
      <div
        className="d-flex align-items-center py-4 bg-body-tertiary"
        style={{ height: "100vh" }}
      >
        <main className="form-signin m-auto" style={{ width: "300px" }}>
          <form>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              ></input>
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              ></input>
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="btn btn-primary w-100 py-2 my-3" type="submit">
              Sign in
            </button>
            <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
          </form>
        </main>
      </div>
    </>
  );
}
