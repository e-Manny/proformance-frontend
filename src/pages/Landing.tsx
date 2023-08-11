import Features from "../components/Features";
import Footer from "../components/Footer";
import HomeHero from "../components/HomeHero";
import Navbar from "../components/Navbar";
// import SignedFeatures from "../components/SignedFeatures";
// import SignedHomeHero from "../components/SignedHomeHero";
// import SignedNavbar from "../components/SignedNavbar";

export default function Landing() {
  // let isSignedIn: boolean = false;

  // if (isSignedIn == true) {
  //   return (
  //     <>
  //       <SignedNavbar></SignedNavbar>
  //       <SignedHomeHero></SignedHomeHero>
  //       <SignedFeatures></SignedFeatures>
  //       <Footer></Footer>
  //     </>
  //   );
  // } else {
  return (
    <>
      <Navbar></Navbar>
      <HomeHero></HomeHero>
      <Features></Features>
      <Footer></Footer>
    </>
  );
}
