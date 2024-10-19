import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import pinkstar from "../assets/pinkstar.png";

const SplashScreen = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0); // State for current rotation

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    const imageElement = document.getElementById("pinkstar");
    if (imageElement) {
      const rect = imageElement.getBoundingClientRect();
      setImagePosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const deltaX = cursorPosition.x - imagePosition.x;
    const deltaY = cursorPosition.y - imagePosition.y;
    const targetAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); // Convert radians to degrees

    setRotation((prevRotation) => {
      const newRotation = prevRotation + (targetAngle - prevRotation) * 0.1; // Interpolate towards target
      return newRotation;
    });
  }, [cursorPosition, imagePosition]); // Update rotation when cursor or image position changes

  const dotSizes = [12, 10, 8, 6, 4];
  const dotColors = [
    "rgba(178, 102, 255, 0.8)", // Light purple
    "rgba(212, 104, 250, 0.8)", // Medium purple-pink
    "rgba(252, 134, 255, 0.8)", // Bright pink
    "rgba(140, 102, 252, 0.8)", // Rich purple-blue
    "rgba(105, 64, 255, 0.8)", // Deep blue-violet
  ];

  const text = "Elysian Cleo"; // The text to animate

  return (
    <div className="flex items-center justify-center w-screen h-screen relative overflow-hidden bg-gradient-to-r from-purple-800 via-purple-600 to-violet-700">
      {/* Removed Curtain Effect */}

      <motion.div
        className="absolute top-5 left-72 z-10 flex" // Use flex for inline positioning
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      >
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -20, rotate: -10, scale: 0.8 }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: 0,
              scale: 1,
              transition: {
                delay: index * 0.1 + Math.random() * 0.05, // Slightly randomize delay
                ease: [0.6, 0.01, -0.05, 0.95], // Ease with a bounce effect
              },
            }}
            className="text-[#f4e9e5] text-5xl md:text-7xl lg:text-9xl font-bold tracking-wide z-10 mx-1"
            whileHover={{
              scale: 1.3,
              rotate: Math.random() * 15 - 7.5, // Rotate slightly in either direction
              color: "rgba(255, 255, 255, 0.9)",
              transition: { duration: 0.3 },
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>

      <motion.img
        id="pinkstar" // Added an ID for the image
        src={pinkstar}
        alt="Pink Star"
        className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 z-20"
        style={{ rotate: rotation }} // Apply the current rotation
        transition={{ duration: 0.1 }} // Smooth transition for rotation
      />

      <motion.button className="absolute bottom-20 left-1/2 transform -translate-x-1/2 border-[1px] border-[#5d24b8] py-2 px-4 rounded-full font-semibold text-lg text-white duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#9e3abd] hover:via-[#9a25b1] hover:to-[#4b228d]">
        <motion.span
          whileHover={{ scale: 1.05, color: "rgba(255, 255, 255, 0.9)" }}
        >
          Explore Luxury
        </motion.span>
      </motion.button>

      {dotSizes.map((size, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full z-30"
          style={{
            width: size,
            height: size,
            background: dotColors[index],
            left: cursorPosition.x,
            top: cursorPosition.y,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            left: cursorPosition.x + Math.random() * 20,
            top: cursorPosition.y + Math.random() * 20,
          }}
          transition={{
            duration: 0.2 + index * 0.1,
          }}
        />
      ))}

      {/* Background Patterns */}
      <div className="absolute w-full h-full pointer-events-none">
        <div className="bg-pattern-1 w-full h-full absolute top-0 left-0 opacity-40" />
        <div className="bg-pattern-2 w-full h-full absolute top-0 left-0 opacity-40" />
      </div>

      <style>{`
        h1 {
          text-shadow: 2px 2px 5px rgba(255, 155, 155, 0.7),
                       0 0 10px rgba(93, 36, 184, 0.5);
        }
        .bg-pattern-1 {
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 20%, transparent 20%), 
                            radial-gradient(circle, rgba(255, 255, 255, 0.1) 20%, transparent 20%);
          background-size: 50px 50px;
          opacity: 0.2; /* Adjusted for transparency */
        }
        .bg-pattern-2 {
          background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 75%, transparent);
          background-size: 30px 30px;
          opacity: 0.3; /* Adjusted for transparency */
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
