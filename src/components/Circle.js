import React from "react";
import { motion } from "framer-motion";

export default function Circle({ numberOfCircles, circleSize, distance }) {
  function findPoint({ radius, angle, cx, cy }) {
    angle = angle * (Math.PI / 180); // Convert from Degrees to Radians
    const x = Math.ceil(cx + radius * Math.cos(angle));
    const y = Math.ceil(cy + radius * Math.sin(angle));
    return { x: x, y: y };
  }

  const arrayOfPoints = [];

  //radius can be increased to make the distance bigger
  const radius = Number(distance);
  const cx = 0;
  const cy = 0;

  //First point
  arrayOfPoints.push({ x: radius, y: 0 });

  //Rest of the points
  for (let i = 1; i < numberOfCircles; i++) {
    //create a new angle like 360/4 -> 90,180,270
    const newAngle = (360 / numberOfCircles) * i;
    arrayOfPoints.push(
      findPoint({ radius: radius, angle: newAngle, cx: cx, cy: cy })
    );
  }

  const buildCircle = arrayOfPoints.map((obj) => {
    return (
      <motion.div
        transition={{ duration: 1 }}
        initial={{ x: 0, y: 0, scale: 0.5 }}
        animate={{ x: obj.x, y: obj.y, scale: 1 }}
        exit={{ x: 0, y: 0, scale: 0 }}
        className="circle"
      />
    );
  });

  return <>{buildCircle}</>;
}
