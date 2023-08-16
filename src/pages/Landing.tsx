import { useState, useEffect } from "react";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HomeHero from "../components/HomeHero";
import Navbar from "../components/Navbar";
import SignedFeatures from "../components/SignedFeatures";
import SignedHomeHero from "../components/SignedHomeHero";
import SignedNavbar from "../components/SignedNavbar";
import httpClient from "../httpClient";

export default function Landing() {
  const [userID, setUserID] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await httpClient.get("http://127.0.0.1:5000/@me");
        setUserID(resp.data.id);
        console.log(resp.data);
      } catch (error) {
        console.log("Not authenticated");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {userID != "" ? (
        <>
          <SignedNavbar></SignedNavbar>
          <SignedHomeHero></SignedHomeHero>
          <SignedFeatures></SignedFeatures>
        </>
      ) : (
        <>
          <Navbar></Navbar>
          <HomeHero></HomeHero>
          <Features></Features>
        </>
      )}
      <Footer></Footer>
    </>
  );
}
