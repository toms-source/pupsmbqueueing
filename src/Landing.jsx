import React, { useState, useEffect } from "react";
import { Typography, Divider } from "@mui/material";
import Appbar from "./Components/Landing/Appbar";
import Cards from "./Components/Landing/Cards";
import ImgCarousel from "./Components/Landing/Carousel";
import Header from "./Components/Landing/Header";
import Info from "./Components/Landing/Info";
import TutorialVid from "./Components/Landing/TutorialVid";
import Developers from "./Components/Landing/Developers";
import Footer from "./Components/Landing/Footer";

import HashLoader from "react-spinners/HashLoader";

const Landing = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 4100);
  }, []);
  return (
    <>
      {load ? (
        <HashLoader
          color={"#880000"}
          loading={load}
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
          style={{ display: "grid", placeItems: "center" }}
        />
      ) : (
        <>
          <Appbar />
          <ImgCarousel />
          <Header />
          <Cards />
          <Info />
          <TutorialVid />
          <Developers />
          <Divider>
            <Typography color="#939393" textAlign="center">
              © PUPSMB E-WAIT
            </Typography>
          </Divider>
          <Footer />
        </>
      )}
    </>
  );
};

export default Landing;
