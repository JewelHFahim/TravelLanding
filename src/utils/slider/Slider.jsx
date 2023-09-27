import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css";
import { Pagination } from "swiper/modules";
import { useContext, useEffect, useRef } from "react";
import { MyContext } from "../../context/AppContext";
import img1 from "../../assets/Indonesia/indonesiaSlider.png";
import img2 from "../../assets/thailand/thailandSlider.jpg";
import img3 from "../../assets/nepal/nepalSlider.jpg";
import img4 from "../../assets/bg/Asset 1.png";

export default function Slider3() {
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
      name: "Ponot Waterfall",
      img: img1,
    },
    {
      name: "Brown Cliff",
      img: img2,
    },
    {
      name: "Himalay",
      img: img3,
    },
  ];

  return (
    <div className="mr-14 shadow-xl">
      <Swiper
        slidesPerView={1}
        keyboard={true}
        spaceBetween={-250}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        ref={swiperRef}
        initialSlide={activeSlideIndex}
        className="pl-[90px] pt-6"
      >
        {places.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="relative">
              <img src={item.img} alt="" className="object-cover shadow-xl" />
              <div className="strokeText absolute bottom-5 font-Montserrat text-[80px] font-[900] left-5 text-white text-opacity-[40%] flex items-center gap-4">
                <p>0{i + 1}</p>
                <div className="text-[20px] font-[600] text-white text-opacity-[100%] flex items-center gap-4 arrowSign">
                  <p>{item.name}</p>
                  <img src={img4} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
