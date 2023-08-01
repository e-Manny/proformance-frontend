import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Portfolio from "./pages/Portfolio";
import Property from "./pages/Property";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/property" element={<Property />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
