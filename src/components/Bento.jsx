import React, { useState, useEffect } from "react";
import AnimationOnScroll from "react-animate-on-scroll";
import CodeQuest from "../public/codequest.webp";
import TechPrint from "../public/techprint.webp";
import MechaBreak from "../public/quickmechabreak.webp";
import Valo from "../public/digicombat.webp";
import LogoFusion from "../public/logofusion.webp";
import MechaDash from "../public/mechadash.webp";
import Sprite from "../public/spritesurge.webp";
import Loader from "./Loader";
function Bento() {
  const [loadedImages, setLoadedImages] = useState(0);
  const [gridStyle, setGridStyle] = useState({
    display: "grid",
    height: "100%",
    width: "100%",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)",
    gap: "16px",
    padding: "8px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1)",
  });
  useEffect(() => {
    const adjustGridForScreenSize = () => {
      const screenWidth = window.innerWidth;
      let columns = "repeat(4, 1fr)"; // Default for large screens

      if (screenWidth < 600) {
        columns = "repeat(2, 1fr)"; // Adjust for small screens
      } else if (screenWidth >= 600 && screenWidth <= 900) {
        columns = "repeat(3, 1fr)"; // Adjust for medium screens
      }

      setGridStyle((prevStyle) => ({
        ...prevStyle,
        gridTemplateColumns: columns,
      }));
    };

    window.addEventListener("resize", adjustGridForScreenSize);
    adjustGridForScreenSize(); // Call it initially

    return () => window.removeEventListener("resize", adjustGridForScreenSize);
  }, []);
  useEffect(() => {
    // Preload images and listen for the load event
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => setLoadedImages((prev) => prev + 1);
    });
  }, []);
  const images = [
    CodeQuest,
    TechPrint,
    MechaBreak,
    Valo,
    LogoFusion,
    MechaDash,
    Sprite,
  ];
  if (loadedImages < images.length) {
    return <Loader />; // Show loader while images are loading
  }

  return (
    <div
      style={{
        justifyContent: "center",
        overflow: "hidden",
        padding: "8px",
        background: "bg-base-200",
      }}
    >
      <div
        className="container bg-base-200"
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          //   paddingBottom: "8px",
          padding: "8px",
        }}
      >
        <div className="grid" style={gridStyle}>
          <div
            className="transition-transform duration-200 hover:scale-90"
            style={{
              fontFamily: "'M PLUS 2 Variable', sans-serif",
              gridColumn: "span 2",
              gridRow: "span 1",
              backgroundColor: "transparent",
              borderRadius: "8px",
              boxShadow:
                "0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AnimationOnScroll animateIn="zoomIn" animateOnce={true}>
              <img
                className="rounded"
                loading="lazy"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover", // CODEQUEST
                }}
                src={CodeQuest}
              ></img>
            </AnimationOnScroll>
          </div>
          <div
            className="transition-transform duration-200 hover:scale-90"
            style={{
              fontFamily: "'M PLUS 2 Variable', sans-serif",
              gridColumn: "span 1",
              gridRow: "span 1",
              backgroundColor: "transparent",

              borderRadius: "8px",
              boxShadow:
                "0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "black",
            }}
          >
            <AnimationOnScroll animateIn="slideInDown" animateOnce={true}>
              <img
                className="rounded"
                loading="lazy"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover", // Logo Fusion
                  scale: "105%",
                }}
                src={LogoFusion}
              ></img>
            </AnimationOnScroll>
          </div>
          <div
            className="transition-transform duration-200 hover:scale-90"
            style={{
              fontFamily: "'M PLUS 2 Variable', sans-serif",
              gridColumn: "span 1",
              gridRow: "span 4",
              backgroundColor: "transparent",
              borderRadius: "8px",
              boxShadow:
                "0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "103%",
            }}
          >
            <AnimationOnScroll animateIn="slideInDown" animateOnce={true}>
              <img
                className="rounded "
                loading="lazy"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover", // Mecha Dash
                }}
                src={MechaDash}
              ></img>
            </AnimationOnScroll>
          </div>
          <div
            className="transition-transform duration-200 hover:scale-90"
            style={{
              fontFamily: "'M PLUS 2 Variable', sans-serif",
              gridColumn: "span 1",
              gridRow: "span 2",

              borderRadius: "8px",
              boxShadow:
                "0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <AnimationOnScroll animateIn="zoomIn" animateOnce={true}>
              <img
                className="rounded "
                loading="lazy"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover", // This line ensures the image covers the container fully
                }}
                src={Sprite}
              ></img>
            </AnimationOnScroll>
          </div>
          <div
            className="transition-transform duration-200 hover:scale-90"
            style={{
              fontFamily: "'M PLUS 2 Variable', sans-serif",
              gridColumn: "span 2",
              gridRow: "span 2",

              borderRadius: "8px",
              boxShadow:
                "0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AnimationOnScroll animateIn="slideInLeft" animateOnce={true}>
              <img
                className="rounded mt-2 "
                
                loading="lazy"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover", // Valo
                }}
                src={Valo}
              ></img>
            </AnimationOnScroll>
          </div>
          <div
            className="transition-transform duration-200 hover:scale-90"
            style={{
              fontFamily: "'M PLUS 2 Variable', sans-serif",
              gridColumn: "span 2",
              gridRow: "span 2",

              borderRadius: "8px",
              boxShadow:
                "0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* mechb reak */}
            <AnimationOnScroll
              animateIn="slideInUp"
              animateOnce={true}
              offset={0}
            >
              <img
                className="rounded "
                loading="lazy"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover", // This line ensures the image covers the container fully
                }}
                src={MechaBreak}
              ></img>
            </AnimationOnScroll>
          </div>
          <div
            className="transition-transform duration-200 hover:scale-90"
            style={{
              fontFamily: "'M PLUS 2 Variable', sans-serif",
              gridColumn: "span 1",
              gridRow: "span 1",

              borderRadius: "8px",
              boxShadow:
                "0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "110%",
            }}
          >
            <AnimationOnScroll
              animateIn="zoomInUp"
              animateOnce={true}
              animatePreScroll={true}
              offset={0}
            >
              <img
                className="rounded "
                loading="lazy"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover", // TechPrint
                }}
                src={TechPrint}
              ></img>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bento;
