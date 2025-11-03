import banner_list_image from "@assets/Home/banner_list_image.png";
import { useEffect, useRef } from "react";
import { useState } from "react";
const Banner = () => {
  const [textBannerIndex, setTextBannerIndex] = useState(0);
  const word1Ref = useRef(null);
  const word2Ref = useRef(null);
  const word3Ref = useRef(null);
  const word4Ref = useRef(null);
  const textBanner = [
    {
      id: 1,
      word1: "All-In-One",
      word2: "Game",
      word3: "Development",
      word4: "Bundle",
    },
    {
      id: 2,
      word1: "Exquisite",
      word2: "Gaming",
      word3: "Experience",
      word4: "On TON",
    },
    {
      id: 3,
      word1: "Collaborative",
      word2: "Partnership",
      word3: "With",
      word4: "Various Projects",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      if (word1Ref.current) {
        setTimeout(() => {
          word1Ref.current.classList.add("animate-slide-out-down");
        }, 0);
      }
      if (word4Ref.current) {
        setTimeout(() => {
          word4Ref.current.classList.add("animate-slide-out-down");
        }, 200);
      }
      if (word2Ref.current) {
        setTimeout(() => {
          word2Ref.current.classList.add("animate-slide-out-down");
        }, 300);
      }
      if (word3Ref.current) {
        setTimeout(() => {
          word3Ref.current.classList.add("animate-slide-out-down");
        }, 400);
      }

      setTimeout(() => {
        setTextBannerIndex((prevIndex) => (prevIndex + 1) % textBanner.length);

        // Add the "in" animation with delays (1 -> 4 -> 2 -> 3)
        setTimeout(() => {
          if (word1Ref.current) {
            word1Ref.current.classList.remove("animate-slide-out-down");
            word1Ref.current.classList.add("animate-slide-in-up");
          }
        }, 0);

        setTimeout(() => {
          if (word4Ref.current) {
            word4Ref.current.classList.remove("animate-slide-out-down");
            word4Ref.current.classList.add("animate-slide-in-up");
          }
        }, 200);

        setTimeout(() => {
          if (word2Ref.current) {
            word2Ref.current.classList.remove("animate-slide-out-down");
            word2Ref.current.classList.add("animate-slide-in-up");
          }
        }, 300);

        setTimeout(() => {
          if (word3Ref.current) {
            word3Ref.current.classList.remove("animate-slide-out-down");
            word3Ref.current.classList.add("animate-slide-in-up");
          }
        }, 400);
      }, 900);
    }, 3000); // Interval for switching the banners

    return () => clearInterval(interval);
  }, [textBanner.length, textBannerIndex]);

  return (
    <>
      <section id="banner" className="h-screen flex  items-center">
        <div className="container w-[50%]  mx-auto  ">
          <div className="banner-content text-center flex flex-col justify-center items-center overflow-hidden  ">
            <div
              style={{ fontFamily: "Space Grotesk" }}
              className=" flex flex-wrap gap-3 justify-center 2xl:text-[450%] lg:text-[350%] md:text-[300%] font-bold mb-[5%]   overflow-hidden"
            >
              <div
                ref={word1Ref}
                style={{ fontFamily: "Space Grotesk" }}
                className=" relative  m-0"
              >
                {textBanner[textBannerIndex].word1}
              </div>{" "}
              <div
                ref={word2Ref}
                style={{ fontFamily: "Space Grotesk" }}
                className=" relative  m-0"
              >
                {textBanner[textBannerIndex].word2}
              </div>{" "}
              <div
                ref={word3Ref}
                style={{ fontFamily: "Space Grotesk" }}
                className=" relative  m-0"
              >
                {textBanner[textBannerIndex].word3}
              </div>{" "}
              <div
                ref={word4Ref}
                style={{ fontFamily: "Space Grotesk" }}
                className=" relative text-[#3BA0E9]  m-0 "
              >
                {textBanner[textBannerIndex].word4}
              </div>
            </div>

            <button className="btn flex items-center  text-2xl font-semibold bg-[#3BA0E9] px-[5%] py-[1%] overflow-hidden rounded-full text-white">
              <span className="text-3xl   pr-3 ">5</span> Year of Experience
            </button>
            <div className="flex justify-center items-center  w-[35%] pt-[3%] gap-[5%]">
              <button className=" group relative border font-semibold text-xl w-[110%] py-[5%] border-black rounded-full  hover:text-white hover:border-white active:scale-95  transition-all duration-500  overflow-hidden">
                {/* <div className=" z-10 absolute   top-0  scale-0  group-hover:scale-150 transition-all duration-700  bottom-0 rounded-full bg-[#3BA0E9] h-52 w-52"></div> */}
                <div className=" z-10 absolute w-36 h-28  top-1/2  left-1/2 -translate-x-1/2  scale-0  group-hover:scale-[2] transition-all duration-700  rounded-full bg-[#3BA0E9]"></div>
                <span className="z-20 relative  flex justify-center items-center">
                  Learn More
                  <div className="m-0">
                    <svg
                      className="w-0 -rotate-45 scale-x-125  group-hover:w-3 group-hover:rotate-0 group-hover:translate-x-2  transition-all duration-500"
                      xmlns="http://www.w3.org/2000/svg"
                      height="15"
                      width={30}
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="#fff"
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      />
                    </svg>
                  </div>
                </span>
              </button>
              <div className="  m-0">
                <p className="text-xl font-extrabold" style={{}}>
                  50M+
                </p>
                <p className="text-gray-500">Experiencing</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" slide_image absolute   h-1/2 top-3/4 overflow-hidden ">
          <div className="relative">
            <div className="absolute -top-5 -left-[1%] w-[102%]  z-20 h-10 bg-[#f2fdff] blur"></div>
            <div className="absolute top-[50%] left-[-1%] w-[102%]  z-20 h-36 bg-[#f2fdff] blur"></div>
            <img
              src={banner_list_image}
              alt="Slide"
              className=" h-full pb-4 animate-scroll"
            />
            <img
              src={banner_list_image}
              alt="Slide"
              className="h-full pb-4 animate-scroll"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
