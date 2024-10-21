import { motion } from "framer-motion";
import { FaShoppingCart, FaDollarSign } from "react-icons/fa";
import diamond from "../assets/stardiamong.png"; // Update to the correct image path

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

const Tranding = () => {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-navy">
        Trending Now
      </h2>

      {/* Grid Layout for Products */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {productsData.map((product) => (
          <motion.div
            key={product.id}
            className="relative overflow-hidden group h-[400px] md:h-[500px] lg:h-[600px]" // Increased height
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full"
            />

            {/* Overlay (Hidden by default) */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              {/* Product Info */}
              <h3 className="text-skin text-xl font-bold mb-4">
                {product.name}
              </h3>
              <p className="text-skin text-lg mb-6">{product.price}</p>

              {/* Buttons */}
              <div className="flex space-x-4 items-center">
                {/* Buy Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }} // Scale effect on button hover
                  className=" flex justify-center items-center border-[1px] border-[#5d24b8] py-2 px-4 rounded-full font-semibold text-lg text-white duration-300 ease-in-out bg-gradient-to-r from-[#9e3abd] via-[#9a25b1] to-[#4b228d]"
                >
                  Buy <FaDollarSign className="ml-2" />
                </motion.button>

                {/* Add to Cart Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }} // Scale effect on button hover
                  className="flex justify-center items-center border-[1px] border-[#5d24b8] py-2 px-4 rounded-full font-semibold text-lg text-white duration-300 ease-in-out bg-gradient-to-r from-[#9e3abd] via-[#9a25b1] to-[#4b228d]"
                >
                  Add to Cart <FaShoppingCart className="ml-2" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tranding;
