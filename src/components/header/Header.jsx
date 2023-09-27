import { useContext } from "react";
import "./Header.css";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { MyContext } from "../../context/AppContext";
import Slider from "../../utils/slider/Slider";

const contentData = [
  {
    country: "Indonesia",
    title: "Explore Indonesia",
  },
  {
    country: "Thailand",
    title: "Explore Thailand",
  },
  {
    country: "Nepal",
    title: "Explore Nepal",
  },
];

const Header = () => {

  const { activeSlideIndex } = useContext(MyContext);

  const handleClass = (activeSlideIndex) => {

    const { country, title } = contentData[activeSlideIndex] || {};

    if (country && title) {
      return (
        <div>
          <h1 className="text-[142px] text-white font-Montserrat font-[800] leading-[140px]">
            Explore <br />
            <span className={`country ${country}`} data-country={country}>
              {country}
            </span>
          </h1>
          <p className="text-white mt-[-70px] p-2 w-[95%] font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            laudantium hic impedit provident dignissimos distinctio nesciunt
            iusto optio, voluptatum vel at sit molestias laborum perspiciatis
            illum aspernatur sint voluptate? Harum.
          </p>
        </div>
      );
    }

    return null;
  };

  const classChange = handleClass(activeSlideIndex);

  return (
    <div className="flex items-center mt-[40px]">
      
      {/* Text Content */}
      <div className="w-1/2 pl-[140px]">
        
        {classChange}

        <div className="mt-[100px] flex gap-12">
          <button className="border-2 border-[#00A1B9] text-[20px] px-6 py-2 font-semibold text-white hover:text-[#00A1B9]">
            Book Now
          </button>
          <button className="flex items-center gap-2">
            <FaYoutube className="text-red-700 text-[40px]" />
            <span className="text-white">Watch Videos like this</span>
          </button>
        </div>
      </div>

      {/* Slider Content */}
      <div className="w-1/2 flex flex-col items-end justify-end relative">
        <Slider />
        <div className="flex gap-4 text-xl text-white absolute bottom-[-60px] right-[100px]">
          <FaYoutube />
          <FiInstagram />
          <BsWhatsapp />
          <FaFacebookF />
        </div>
      </div>
    </div>
  );
};

export default Header;
