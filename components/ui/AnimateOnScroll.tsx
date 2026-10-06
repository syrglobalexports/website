"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface AnimateOnScrollProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  animation?: "fadeIn" | "slideUp" | "slideRight" | "slideLeft" | "scaleUp";
  delay?: number;
  duration?: number;
  className?: string;
}

export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  animation = "slideUp",
  delay = 0,
  duration = 0.5,
  className = "",
  ...props
}) => {
  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0 },
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1.0] }}
      variants={variants[animation]}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
