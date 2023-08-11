import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import httpClient from "../httpClient";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const loginUser = async () => {
    try {
      const resp = await httpClient.post("http://127.0.0.1:5000/login", {
        email,
        password,
      });
      navigate("/portfolio");
    } catch (error: any) {
      if (error.response.status === 401) {
        alert("Wrong username or password");
      }
    }
  };
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
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <label htmlFor="email">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <label htmlFor="password">Password</label>
            </div>
            <button
              className="btn btn-primary w-100 py-2 my-3"
              type="button"
              onClick={loginUser}
            >
              Sign in
            </button>
            <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
          </form>
        </main>
      </div>
    </>
  );
}
