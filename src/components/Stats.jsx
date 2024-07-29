import React, { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";
import AnimationOnScroll from "react-animate-on-scroll";
const fontSize = 30;
const padding = 15;
const height = fontSize + padding;
import { motion, useSpring, useTransform } from "framer-motion";

function AnimatedNumber(value = 100) {
  let spring = useSpring(100, { mass: 0.8, stiffness: 75, damping: 15 });
  let display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
}

function Counter({ value }) {
  return (
    <div
      style={{ fontSize }}
      className="flex px-2 space-x-3 overflow-hidden leading-none text-gray-900 bg-white rounded"
    >
      <Digit place={100} value={value} />
      <Digit place={10} value={value} />
      <Digit place={1} value={value} />
    </div>
  );
}

function Digit({ place, value }) {
  let valueRoundedToPlace = Math.floor(value / place);
  let animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div style={{ height }} className="relative w-[1ch] mb-1 tabular-nums">
      {[...Array(10).keys()].map((i) => (
        <Number key={i} mv={animatedValue} number={`${i}`} />
      ))}
    </div>
  );
}

function Number({ mv, number }) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <motion.span
      style={{ y }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {number}
    </motion.span>
  );
}

function Stats() {
  const [participants, setParticipants] = useState(400);
  const [schools, setSchools] = useState(30);
  const [events, setEvents] = useState(9);
  const handleMouseE = () => {
    // Update the number of participants on hover
    setSchools(40);
  };
  const handleMouse = () => {
    // Update the number of participants on hover
    setEvents(10);
  };

  const handleMouseEnter = () => {
    // Update the number of participants on hover
    setParticipants(450);
  };

  return (
    <div className="container items-center mx-auto overflow-hidden text-center">
      <div className="mb-10 shadow stats stats-vertical lg:stats-horizontal">
        <div className="stat place-items-center" onMouseEnter={handleMouseE}>
          {/* Ensure Counter starts based on inView for all stats */}
          <AnimationOnScroll animateIn="fadeInLeftBig" animateOnce={true}>
            <Counter value={schools} />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="fadeInLeftBig" animateOnce={true}>
            <div className="mt-1 stat-title">Schools Over NCR</div>
          </AnimationOnScroll>
        </div>

        <div className="stat place-items-center" onMouseEnter={handleMouse}>
          {/* Ensure Counter starts based on inView for all stats */}
          <AnimationOnScroll animateIn="fadeInDown" animateOnce={true}>
            <Counter value={events} />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="fadeInLeftBig" animateOnce={true}>
            <div className="mt-1 stat-title">Mega Events</div>
          </AnimationOnScroll>
        </div>

        <div
          className="stat place-items-center"
          onMouseEnter={handleMouseEnter}
        >
          {/* Ensure Counter starts based on inView for all stats */}
          <AnimationOnScroll animateIn="fadeInRightBig" animateOnce={true}>
            <Counter value={participants} />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="fadeInLeftBig" animateOnce={true}>
            <div className="mt-1 stat-title">Participants</div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
}

export default Stats;
