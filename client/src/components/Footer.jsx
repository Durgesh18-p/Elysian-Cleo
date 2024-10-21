import logo from "../png/logo-no-background.png";
import {
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#160338] via-[#300866] to-[#49069b] text-white py-10 w-full">
      <div className="flex justify-between items-center px-6 ">
        {/* Logo Section */}
        <div className="flex items-center flex-col lg:w-[350px] text-justify">
          <img src={logo} alt="Brand Logo" className="h-32 " />{" "}
          {/* Increased logo size and added margin */}
          <p className="text-lg font-semibold">
            Elevate your elegance with our exquisite collection of gemstones.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex justify-center space-x-10 mb-6">
          <a
            href="#diamond"
            className="hover:text-gray-300 transition duration-300"
          >
            Diamond
          </a>
          <a
            href="#jadeite"
            className="hover:text-gray-300 transition duration-300"
          >
            Jadeite
          </a>
          <a
            href="#aquamarine"
            className="hover:text-gray-300 transition duration-300"
          >
            Aquamarine
          </a>
        </nav>

        {/* Contact Developer Section */}
        <div className="flex flex-col items-end">
          <h3 className="text-2xl mb-2 font-bold">Contact Developer</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://wa.me/your_number"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-300"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="mailto:your_email@example.com"
              className="hover:text-gray-300 transition duration-300"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://www.yourwebsite.com" // Replace with your actual website URL
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-300"
            >
              <FaGlobe size={24} /> {/* Added Globe Icon for Website */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
