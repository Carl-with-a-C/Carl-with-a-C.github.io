import React from "react";
import { motion } from "framer-motion";

const blackBox = {
  initial: {
    height: "100vh",
    top: 0,
  },
  animate: {
    height: 0,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

export const InitialTransition = () => {
  return (
    <div className="a">
      <motion.div
        className="b"
        initial="initial"
        animate="animate"
        variants={blackBox}
      />
    </div>
  );
};
