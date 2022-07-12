import React, { useState } from "react";
import Circle from "./Circle";
import { motion } from "framer-motion";

export default function AnimatedCircle() {
  const [open, setOpen] = useState(false);
  const [numberOfCircles, setNumberOfCircles] = useState(1);

  return (
    <div className="section">
      <div className="container">
        {/* Outter Circle - Clickable */}
        <motion.div className="big-circle">
          <div
            className="counter-button"
            onClick={() => {
              setOpen(!open);
              setNumberOfCircles((prevCircles) => prevCircles + 1);
            }}
          >
            +
          </div>

          {numberOfCircles}

          <div
            className="counter-button"
            onClick={() => {
              setOpen(!open);
              setNumberOfCircles((prevCircles) => prevCircles - 1);
            }}
          >
            -
          </div>
        </motion.div>
        {/* Inner Circle */}

        <Circle
          numberOfCircles={numberOfCircles}
          circleSize="50"
          distance="100"
        />
      </div>
    </div>
  );
}
