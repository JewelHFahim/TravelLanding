import { BsHexagonFill } from "react-icons/bs";
import img1 from "../../assets/Indonesia/indonesiaLeft.png";
import img2 from "../../assets/thailand/thilandLeft.png";
import img3 from "../../assets/nepal/nepalLeft.png";

import img4 from "../../assets/Indonesia/indonesiaRight.png";
import img5 from "../../assets/thailand/thailandRight.png";
import img6 from "../../assets/nepal/nepalRight.png";

import img7 from "../../assets/Indonesia/indonesia1.png";
import img8 from "../../assets/thailand/thailand1.png";
import img9 from "../../assets/nepal/nepal1.png";

import img10 from "../../assets/Indonesia/indonesia2.png";
import img11 from "../../assets/thailand/thailand2.png";
import img12 from "../../assets/nepal/nepal2.png";

import img13 from "../../assets/Indonesia/indonesia3.png";
import img14 from "../../assets/thailand/thailand3.png";
import img15 from "../../assets/nepal/nepal3.png";

import bgLeft from "../../assets/bg/Asset 6.png";
import bgright from "../../assets/bg/Asset 7.png";

import { useContext, useEffect } from "react";
import { MyContext } from "../../context/AppContext";
import BookTour from "../../utils/button/BookTour";
import AOS from "aos";
import "aos/dist/aos.css";

const MostAttractivePlace = () => {
  const { activeSlideIndex } = useContext(MyContext);

  
  useEffect(() => {
    AOS.init();
  }, []);
  
  const datas = [
    {
      name: "Indonesia",
      leftImg1: img1,
      leftImg2: img7,
      leftImg3: img13,
      rightImg1: img4,
      rightImg2: img10,
    },

    {
      name: "Thilan",
      leftImg1: img2,
      leftImg2: img8,
      leftImg3: img14,
      rightImg1: img5,
      rightImg2: img11,
    },
    {
      name: "Nepal",
      leftImg1: img3,
      leftImg2: img9,
      leftImg3: img15,
      rightImg1: img6,
      rightImg2: img12,
    },
  ];

  const handleChange = (index) => {
    switch (index) {
      case 0:
        return datas[0];
      case 1:
        return datas[1];
      case 2:
        return datas[2];
      default:
        return datas[0];
    }
  };
  const info = handleChange(activeSlideIndex);
console.log(info)

  return (
    <section className="bg-[#001E23] pt-[120px] pb-[250px] w-full overflow-hidden">
      <div className="text-center">
        <h2 className="text-[#42a8bb] text-[76px] font-DancingScript">
          Why you visit?
        </h2>
        <h2 className="text-[54px] text-white font-Montserrat font-[500] leading-[50px]">
          Most Attractive Place <br /> in {info.name}
        </h2>
      </div>

      <section className="flex justify-center mt-10 relative">
        <div className=" bg-white w-[1px] h-[750px] flex flex-col justify-around items-center">
          <div className=" relative flex items-center">
            <BsHexagonFill className="text-[30px] rotate-[90deg] text-[#2FA8B9]" />
            <p className="absolute w-[400px] left-[70px] text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              aliquid saepe quisquam vel blanditiis deleniti.
            </p>
          </div>

          <div className=" relative flex items-center">
            <BsHexagonFill className="text-[30px] rotate-[90deg] text-[#2FA8B9]" />
            <p className="absolute w-[400px] left-[70px] text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              aliquid saepe quisquam vel blanditiis deleniti.
            </p>
          </div>

          <img
            src={info.leftImg1}
            alt=""
            className=" absolute top-[-180px] left-[-150px] w-[700px] h-[650px]"
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="1000"
          />
          
          <img
            src={info.leftImg2}
            alt=""
            className=" absolute top-[10%] left-[30%] w-[250px] h-[250px]"
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="1000"
          />

          <div className=" relative flex items-center">
            <p className="absolute w-[400px] right-[70px] text-right text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              aliquid saepe quisquam vel blanditiis deleniti.
            </p>
            <BsHexagonFill className="text-[30px] rotate-[90deg] text-[#2FA8B9]" />
          </div>

          <div className=" relative flex items-center">
            <p className="absolute w-[400px] right-[70px] text-right text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              aliquid saepe quisquam vel blanditiis deleniti.
            </p>
            <BsHexagonFill className="text-[30px] rotate-[90deg] text-[#2FA8B9]" />
          </div>
          <img
            src={info.rightImg1}
            alt=""
            className=" absolute top-[60px] right-[-150px] w-[700px] h-[650px]"
            data-aos="fade-left"
            data-aos-delay="1000"
            data-aos-duration="1000"
          />
          <img
            src={info.rightImg2}
            alt=""
            className=" absolute top-[43%] right-[30%] w-[250px] h-[250px]"
            data-aos="fade-left"
            data-aos-delay="1000"
            data-aos-duration="1000"
          />

          <div className=" relative flex items-center">
            <BsHexagonFill className="text-[30px] rotate-[90deg] text-[#2FA8B9]" />
            <p className="absolute w-[400px] left-[70px] text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              aliquid
            </p>
          </div>
          <img
            src={info.leftImg3}
            alt=""
            className=" absolute top-[78%] left-[32%] w-[190px] h-[190px]"
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="1000"
          />

          <img
            src={bgLeft}
            alt=""
            className=" absolute top-[78%] left-[-120px] w-[430px] h-[430px]"
          />
          <img
            src={bgright}
            alt=""
            className=" absolute top-[105%] right-[100px] w-[360px] h-[360px]"
          />
        </div>
      </section>

      <BookTour className="justify-center mt-[50px]" />
    </section>
  );
};

export default MostAttractivePlace;
