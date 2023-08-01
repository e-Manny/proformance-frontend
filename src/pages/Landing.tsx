import Features from "../components/Features";
import Footer from "../components/Footer";
import HomeHero from "../components/HomeHero";
import Navbar from "../components/Navbar";

export default function Landing() {
  return (
    <>
      <Navbar></Navbar>
      <HomeHero></HomeHero>
      <Features></Features>
      <Footer></Footer>
    </>
  );
}
