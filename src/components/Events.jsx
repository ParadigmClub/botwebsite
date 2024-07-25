import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import "../styles/imagering.css";

const ImageRing = () => {
  const trackRef = useRef(null); // Reference to the track element
  const [mouseDownAt, setMouseDownAt] = useState("0");
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const handleOnDown = (e) => {
      setMouseDownAt(e.clientX || e.touches[0].clientX);
    };

    const handleOnUp = () => {
      setMouseDownAt("0");
      setPrevPercentage(percentage);
    };

    const handleOnMove = (e) => {
      if (mouseDownAt === "0") return;

      const mouseDelta =
          parseFloat(mouseDownAt) - (e.clientX || e.touches[0].clientX),
        maxDelta = window.innerWidth / 2;

      const nextPercentageUnconstrained =
          prevPercentage + (mouseDelta / maxDelta) * -100,
        nextPercentage = Math.max(
          Math.min(nextPercentageUnconstrained, 0),
          -100
        );

      setPercentage(nextPercentage);
    };

    const trackElement = trackRef.current;
    trackElement.addEventListener("mousedown", handleOnDown);
    trackElement.addEventListener("touchstart", handleOnDown);

    trackElement.addEventListener("mouseup", handleOnUp);
    trackElement.addEventListener("touchend", handleOnUp);

    trackElement.addEventListener("mousemove", handleOnMove);
    trackElement.addEventListener("touchmove", handleOnMove);

    return () => {
      // Cleanup event listeners on component unmount
      trackElement.removeEventListener("mousedown", handleOnDown);
      trackElement.removeEventListener("touchstart", handleOnDown);

      trackElement.removeEventListener("mouseup", handleOnUp);
      trackElement.removeEventListener("touchend", handleOnUp);

      trackElement.removeEventListener("mousemove", handleOnMove);
      trackElement.removeEventListener("touchmove", handleOnMove);
    };
  }, [mouseDownAt, prevPercentage, percentage]);

  // Apply styles or animations based on state
  const transformStyle = {
    transform: `translate(${percentage}%, -50%)`,
  };
  return (
    <div className="events-section">
      <div
        id="image-track"
        data-mouse-down-at="0"
        data-prev-percentage="0"
        ref={trackRef}
        style={transformStyle}
      >
        <img
          class="image"
          src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          draggable="false"
        />
        <img
          class="image"
          src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
          draggable="false"
        />
        <img
          class="image"
          src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          draggable="false"
        />
        <img
          class="image"
          src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          draggable="false"
        />
        <img
          class="image"
          src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          draggable="false"
        />
        <img
          class="image"
          src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80"
          draggable="false"
        />
        <img
          class="image"
          src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80"
          draggable="false"
        />
        <img
          class="image"
          src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          draggable="false"
        />
      </div>
    </div>
  );
};

export default ImageRing;
