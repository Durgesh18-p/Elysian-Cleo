import { motion } from "framer-motion";
import logo from "../png/logo-no-background.png";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Diamond", "Jadeite", "Aquamarine"];

  return (
    <motion.nav
      className="fixed h-32 top-0 left-0 w-full z-50 shadow-lg bg-gradient-to-r from-[#160338] via-[#300866] to-[#49069b] bg-opacity-90 px-6 py-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <img src={logo} alt="Brand Logo" className="w-24 h-auto" />
        </motion.div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <motion.button
            className="text-white text-3xl"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.5 }}
          >
            ☰
          </motion.button>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="text-lg text-white tracking-wider font-semibold relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{
                scale: 1.1,
                color: "rgba(255, 255, 255, 0.9)",
              }}
            >
              {link}
              {/* Elegant underline hover effect */}
              <motion.span
                className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#f4e9e5] to-[#fc76ff]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </motion.a>
          ))}
        </div>

        {/* Call to Action Button */}
        <motion.a
          href="#contact"
          className="hidden md:inline-block border-[2px] border-[#eec4f1] py-2 px-6 rounded-full font-semibold text-white text-lg tracking-wide hover:bg-gradient-to-r from-[#ff9ebd] to-[#8b35a3]"
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(245, 245, 245, 0.9)",
            transition: { duration: 0.3 },
          }}
        >
          Contact Us
        </motion.a>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden flex flex-col items-center mt-4 space-y-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="text-lg text-white tracking-wider font-semibold"
              whileHover={{
                scale: 1.05,
                color: "rgba(255, 255, 255, 0.9)",
              }}
            >
              {link}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
