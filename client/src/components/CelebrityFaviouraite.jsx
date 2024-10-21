import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineShoppingCart, AiOutlineCreditCard } from "react-icons/ai";
import diamond from "../assets/stardiamong.png";

// Sample data for the products
const productsData = [
  {
    id: 1,
    name: "Star Diamond 1",
    price: "$999",
    image: diamond,
  },
  {
    id: 2,
    name: "Star Diamond 2",
    price: "$1,199",
    image: diamond,
  },
  {
    id: 3,
    name: "Star Diamond 3",
    price: "$899",
    image: diamond,
  },
  {
    id: 4,
    name: "Star Diamond 4",
    price: "$1,299",
    image: diamond,
  },
];

const CelebrityFavorites = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // New state for hover

  // Automatic slide change every 3 seconds
  useEffect(() => {
    if (!isHovered) {
      // Only set interval if not hovered
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % productsData.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]); // Depend on isHovered

  const handlePrev = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + productsData.length) % productsData.length
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % productsData.length);
  };

  return (
    <div className="py-10 bg-skin">
      <h2 className="text-4xl font-bold text-center mb-8 text-navy">
        Celebrity Favorites
      </h2>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)} // Set hover state to true
        onMouseLeave={() => setIsHovered(false)} // Set hover state to false
      >
        {/* Slide Container */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {productsData.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-full relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
              />
              {/* Overlay with hover effect */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <h3 className="text-skin text-xl font-semibold mb-2 text-center">
                  {product.name}
                </h3>
                <p className="text-skin text-lg mb-4">{product.price}</p>

                {/* Buttons */}
                <div className="flex justify-center space-x-4 opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="border-[1px] border-[#5d24b8] py-2 px-4 rounded-full font-semibold text-lg text-white duration-300 ease-in-out bg-gradient-to-r from-[#9e3abd] via-[#9a25b1] to-[#4b228d]"
                  >
                    <motion.span className="flex justify-center items-center">
                      Buy <AiOutlineCreditCard className="ml-2" />
                    </motion.span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="border-[1px] border-[#5d24b8] py-2 px-4 rounded-full font-semibold text-lg text-white duration-300 ease-in-out bg-gradient-to-r from-[#9e3abd] via-[#9a25b1] to-[#4b228d]"
                  >
                    <motion.span className="flex justify-center items-center">
                      Add To Cart <AiOutlineShoppingCart className="ml-2" />
                    </motion.span>
                  </motion.button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default CelebrityFavorites;
