import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper/modules";
import "./MainSlider.css";
import img1 from "../../assets/Indonesia/indonesiaSlider.png";
import img2 from "../../assets/thailand/thailandSlider.jpg";
import img3 from "../../assets/nepal/nepalSlider.jpg";
import { MdArrowRightAlt } from "react-icons/md";
import { useContext, useEffect, useRef } from "react";
import { MyContext } from "../../context/AppContext";

export default function MainSlider() {
  
  const swiperRef = useRef(null);
  const { activeSlideIndex, setActiveSlideIndex } = useContext(MyContext);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setActiveSlideIndex(currentIndex);
  };

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.on("slideChange", () => handleSlideChange(swiper));
    }
  });

  const places = [
    {
      name: "Brown Cliff",
      img: img1,
    },
    {
      name: "Brown Cliff",
      img: img2,
    },
    {
      name: "Brown Cliff",
      img: img3,
    },
  ];

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        navigation={true}
        pagination={{clickable: true}}
        modules={[EffectCards, Navigation, Autoplay, Pagination]}
        className="shadow-2xl"
        ref={swiperRef}
        initialSlide={activeSlideIndex}
      >
        {places.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="relative">
              <img src={item.img} alt="" className="object-cover shadow-xl" />
              <h1 className="strokeText absolute bottom-5 font-Montserrat text-[80px] font-[900] left-5 text-white text-opacity-[40%] flex items-center gap-4">
                0{i + 1}
                <span className="text-[20px] font-[600] text-white text-opacity-[100%] flex items-center gap-4">
                  {item.name} <MdArrowRightAlt className="text-[50px]" />
                </span>
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
