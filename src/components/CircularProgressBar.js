import { motion } from "framer-motion";
import React from "react";


const CircularProgressBar = ({ title, progress }) => {
  const radius = 50; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const strokeDashoffset = circumference - (progress / 100) * circumference; // Offset based on progress

  return (
    <div className="flex flex-col items-center justify-center mx-8 my-4 lg:mx-4 sm:w-1/2 sm:my-2 sm:mx-0">
      <div className="relative w-32 h-32 lg:w-24 lg:h-24 xs:w-20 xs:h-20">
        <svg className="absolute top-0 left-0" width="100%" height="100%" viewBox="0 0 120 120">
          {/* Background Circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            className="stroke-gray-300 dark:stroke-gray-700"
            strokeWidth="10"
          />
          {/* Animated Progress Circle */}
          <motion.circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            className="stroke-green-700 dark:stroke-green-500"
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            strokeLinecap="round"
            viewport={{ once: true }}
            transition={{ duration: 3 }}
          />
        </svg>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <span className="text-xl font-medium text-dark dark:text-light sm:text-base">{progress}%</span>
        </div>
      </div>
      <span className="text-base uppercase font-medium text-dark dark:text-light mt-2 sm:text-sm">
        {title}
      </span>
    </div>
  );
};

export default CircularProgressBar;
