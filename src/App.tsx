import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Portfolio from "./pages/Portfolio";
import Property from "./pages/Property";
import AddProperty from "./pages/AddProperty";
import EditProperty from "./pages/EditProperty";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/property/:id" element={<Property />} />
          <Route path="/addproperty" element={<AddProperty />} />
          <Route path="/editproperty" element={<EditProperty />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
