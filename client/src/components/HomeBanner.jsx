import { AiOutlineShoppingCart, AiOutlineCreditCard } from "react-icons/ai";
import { motion } from "framer-motion";
import img1 from "../assets/necklace.png";
import img2 from "../assets/ring.png";

const HomeBanner = () => {
  return (
    <div className="flex h-[80vh] w-[100%] mt-[127px] gap-1 p-1">
      {/* Image 1 */}
      <div className="relative w-1/2 h-full overflow-hidden">
        <img src={img1} alt="Necklace" className="object-cover w-full h-full" />
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
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
            className="border-[1px] border-[#5d24b8] py-2 px-4 rounded-full font-semibold text-lg text-white duration-300 ease-in-out bg-gradient-to-r from-[#6a1fa3] via-[#7d3db4] to-[#5b158b]"
          >
            <motion.span className="flex justify-center items-center">
              Add To Cart <AiOutlineShoppingCart className="ml-2" />
            </motion.span>
          </motion.button>
        </div>
      </div>

      {/* Image 2 */}
      <div className="relative w-1/2 h-full overflow-hidden">
        <img src={img2} alt="Ring" className="object-cover w-full h-full" />
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
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
  );
};

export default HomeBanner;
