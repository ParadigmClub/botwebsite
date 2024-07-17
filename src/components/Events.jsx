import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import "../styles/imagering.css";

const ImageRing = () => {
  const [xPos, setXPos] = useState(0);

  useEffect(() => {
    gsap
      .timeline()
      .set(".ring", { rotationY: 180, cursor: "grab" })
      .set(".img", {
        rotateY: (i) => i * -36,
        transformOrigin: "50% 50% 500px",
        z: -500,
        backgroundImage: (i) =>
          "url(https://picsum.photos/id/" + (i + 32) + "/600/400/)",
        backgroundPosition: (i) => getBgPos(i),
        backfaceVisibility: "hidden",
      })
      .from(".img", {
        duration: 1.5,
        y: 200,
        opacity: 0,
        stagger: 0.1,
        ease: "expo",
      })
      .add(() => {
        document.querySelectorAll(".img").forEach((img) => {
          img.addEventListener("mouseenter", (e) => {
            gsap.to(".img", {
              opacity: (i, t) => (t === e.currentTarget ? 1 : 1),
              ease: "power1",
            });
          });
          img.addEventListener("mouseleave", () => {
            gsap.to(".img", { opacity: 1, ease: "power2.inOut" });
          });
        });
      }, "-=0.5");

    const dragStart = (e) => {
      let clientX = e.touches ? e.touches[0].clientX : e.clientX;
      setXPos(Math.round(clientX));
      gsap.set(".ring", { cursor: "grabbing" });
      document.addEventListener("mousemove", drag);
      document.addEventListener("touchmove", drag);
    };

    const dragEnd = () => {
      document.removeEventListener("mousemove", drag);
      document.removeEventListener("touchmove", drag);
      gsap.set(".ring", { cursor: "grab" });
    };

    document.addEventListener("mousedown", dragStart);
    document.addEventListener("touchstart", dragStart);
    document.addEventListener("mouseup", dragEnd);
    document.addEventListener("touchend", dragEnd);

    function drag(e) {
      const clientX = Math.round(e.clientX || e.touches[0].clientX);
      let xPos = clientX;
      const delta = (clientX - xPos) / 2; // Reduced sensitivity for slower scrolling
      gsap.to(".ring", {
        rotationY: "+=" + (delta % 360),
        onUpdate: () => {
          gsap.set(".img", { backgroundPosition: (i) => getBgPos(i) });
        },
      });
    }

    function getBgPos(i) {
      return (
        100 -
        (gsap.utils.wrap(
          0,
          360,
          gsap.getProperty(".ring", "rotationY") - 180 - i * 36
        ) /
          360) *
          125 +
        "px 0px"
      );
    }

    return () => {
      document.removeEventListener("mousedown", dragStart);
      document.removeEventListener("touchstart", dragStart);
      document.removeEventListener("mouseup", dragEnd);
      document.removeEventListener("touchend", dragEnd);
      document.removeEventListener("mousemove", drag);
      document.removeEventListener("touchmove", drag);
    };
  }, []);

  return (
    <div className="events-section">
      <div className="">
        <div
          className="stage"
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            background: "#000",
          }}
        >
          <div
            className="container --tw-ring-color: transparent;"
            style={{
              perspective: "2000px",
              width: "300px",
              height: "400px",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className="ring ring-transparent ;"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                transformStyle: "preserve-3d",
              }}
            >
              {[...Array(9)].map((_, i) => (
                <a
                  key={i}
                  className="img --tw-ring-color: transparent;"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    transformStyle: "preserve-3d",
                    userSelect: "none",
                    href: "https://picsum.photos/id/" + (i + 32) + "/600/400/",
                  }}
                ></a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageRing;
