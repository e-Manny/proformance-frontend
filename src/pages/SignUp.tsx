import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const registerUser = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Registration succesful:${data}`);
        navigate("/signin");
      } else {
        const errorData = await response.json();
        alert(`Registration error:${errorData.error}`);
        window.location.reload();
      }
    } catch (error) {
      console.error("Error:", error);
      window.location.reload();
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
            <h1 className="h3 mb-3 fw-normal">Sign up!</h1>

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
              onClick={registerUser}
            >
              Sign up
            </button>
            <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
          </form>
        </main>
      </div>
    </>
  );
}
