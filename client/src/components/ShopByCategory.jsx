import { motion } from "framer-motion";
import diamondImage from "../assets/stardiamong.png";

const ShopByCategory = () => {
  return (
    <div className=" p-8 bg-gradient-to-r from-[#f3ecf8] to-[#e7def2] min-h-screen">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6a1fa3] via-[#7d3db4] to-[#5b158b] mb-12 glow-text"
      >
        Explore Our Exquisite Gemstone Collection
      </motion.h2>

      {/* Categories Container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {/* Diamond Card */}
        <motion.div
          className="relative bg-white shadow-lg p-6 rounded-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() =>
            (document.body.style.cursor =
              "url('/path-to-your-diamond-icon'), auto")
          }
          onMouseLeave={() => (document.body.style.cursor = "default")}
        >
          <img
            src={diamondImage}
            alt="Diamond"
            className="w-full h-56 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2 text-[#6a1fa3]">
            Diamond
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Diamonds are known as the hardest natural material on Earth and
            symbolize purity, strength, and everlasting love.
          </p>
        </motion.div>

        {/* Jadeite Card */}
        <motion.div
          className="relative bg-white shadow-lg p-6 rounded-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() =>
            (document.body.style.cursor =
              "url('/path-to-your-jadeite-icon'), auto")
          }
          onMouseLeave={() => (document.body.style.cursor = "default")}
        >
          <img
            src={diamondImage}
            alt="Jadeite"
            className="w-full h-56 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2 text-[#7d3db4]">
            Jadeite
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Jadeite is one of the rarest and most valuable gemstones, treasured
            for its striking green hues and powerful symbolic meanings.
          </p>
        </motion.div>

        {/* Aquamarine Card */}
        <motion.div
          className="relative bg-white shadow-lg p-6 rounded-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() =>
            (document.body.style.cursor =
              "url('/path-to-your-aquamarine-icon'), auto")
          }
          onMouseLeave={() => (document.body.style.cursor = "default")}
        >
          <img
            src={diamondImage}
            alt="Aquamarine"
            className="w-full h-56 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2 text-[#5b158b]">
            Aquamarine
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Aquamarine, with its tranquil blue color, evokes the serenity of the
            ocean and is believed to promote calmness and clarity.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ShopByCategory;
