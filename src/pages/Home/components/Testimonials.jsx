import testimonials_avatar_jonathan_doe from "@assets/Home/testimonials_avatar_jonathan_doe.png";
import testimonials_avatar_camero_williamson from "@assets/Home/testimonials_avatar_camero_williamson.png";
import testimonials_avatar_leslie_alexander from "@assets/Home/testimonials_avatar_leslie_alexander.png";
import testimonials_cover_jonathan_doe from "@assets/Home/testimonials_cover_jonathan_doe.png";
import testimonials_cover_camero_williamson from "@assets/Home/testimonials_cover_camero_williamson.png";
import testimonials_cover_leslie_alexander from "@assets/Home/testimonials_cover_leslie_alexander.png";
import { useState } from "react";

// import required modules
const Testimonials = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const cards = [
    {
      avatar: testimonials_avatar_jonathan_doe,
      cover: testimonials_cover_jonathan_doe,
      name: "Johnathan Doe",
      major: "Project Manager",
      comment:
        "Partnering with this team was transformative, providing crucial support in marketing and production while connecting us with a global TON blockchain community. This partnership exceeded our expectations, helping our game thrive on the TON blockchain.",
    },
    {
      avatar: testimonials_avatar_camero_williamson,
      cover: testimonials_cover_camero_williamson,

      name: "Camero Williamson",
      major: "Client",
      comment:
        "Their outsourcing service transformed our business with exceptional work in game development, media, and AI. Their expertise, dedication, and seamless integration exceeded expectations, making the process efficient. Highly recommended for world-class project support.",
    },
    {
      avatar: testimonials_avatar_leslie_alexander,
      cover: testimonials_cover_leslie_alexander,
      name: "Leslie Alexander ",
      major: "AI Specialist",
      comment:
        "Partnering with this team was transformative, providing crucial support in marketing and production while connecting us with a global TON blockchain community. This partnership exceeded our expectations, helping our game thrive on the TON blockchain.",
    },
  ];
  const handleNextSlideChange = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
      setFade(true);
    }, 200); // Duration of the fade-out effect
  };

  const handlePrevSlideChange = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentCardIndex(
        (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
      );
      setFade(true);
    }, 200); // Duration of the fade-out effect
  };

  return (
    <section
      id="testimonials"
      className="  h-[80vh]  w-[95%] flex flex-col gap-[10%] justify-start items-start  "
    >
      <div className="h-[50px] px-5 py-3 bg-[#edefff] rounded-3xl text-xl m-0 ">
        Testimonials
      </div>
      <div className="  flex flex-wrap ">
        <div className=" flex-col w-full md:w-3/5">
          <div className="w-[95%] flex-col justify-start items-start gap-8 flex">
            <div
              style={{
                fontFamily: "Space Grotesk",
              }}
              className="font-bold leading-tight text-5xl  "
            >
              <span
                style={{
                  fontFamily: "Space Grotesk",
                }}
                className="text-[#29b8ea]    "
              >
                Trusted{" "}
              </span>
              by Small Businesses and leading Artificial Intelligence Companies
              in the world
            </div>
            <div
              style={{
                fontFamily: "DM Sans",
              }}
              className=" text-2xl  w-[95%]  m-0 text-[#707070] font-normal "
            >
              Trusted by small businesses, startups, and AI leaders worldwide,
              we deliver reliable and scalable solutions. Our services empower
              growth, innovation, and efficiency, helping businesses achieve
              their goals with confidence.
            </div>
          </div>
          <div className="justify-end w-[90%] my-[5%] gap-8 inline-flex">
            <div
              onClick={handlePrevSlideChange}
              className={`w-12 h-12 p-3 m-0 select-none  bg-white rounded border hover:border-[#909090] justify-start items-center gap-2.5 flex`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#919191"
                  d="M17.68 4.132v-2.07a.214.214 0 0 0-.346-.169L5.26 11.324a.853.853 0 0 0 0 1.348l12.075 9.431c.142.11.346.01.346-.169v-2.07a.433.433 0 0 0-.164-.338L7.873 12l9.643-7.53a.433.433 0 0 0 .164-.337Z"
                />
              </svg>
            </div>
            <div
              onClick={handleNextSlideChange}
              className="w-12 h-12 p-3 m-0 bg-white select-none rounded cursor-pointer border hover:border-[#909090] justify-start items-center gap-2.5 flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="22"
                fill="none"
                viewBox="0 0 14 22"
              >
                <path
                  fill="#919191"
                  d="M.32 18.868v2.07c0 .18.207.279.346.169l12.075-9.431a.853.853 0 0 0 0-1.348L.666.897a.213.213 0 0 0-.346.169v2.07c0 .132.062.257.164.338L10.127 11 .483 18.53a.433.433 0 0 0-.164.337Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="slide w-full md:w-2/5">
          <div className={`p-4 rounded-[20px] border border-[#909090]    `}>
            <div
              className={`${
                fade ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500 flex flex-col gap-4 `}
            >
              <img
                className=" rounded-xl object-cover w-full   "
                src={cards[currentCardIndex].cover}
              />
              <div className="  flex-col justify-start items-start   flex gap-4">
                <div className=" justify-between items-center w-full ">
                  <div className="  m-0 items-center w-full  flex  gap-4 ">
                    <div className="bg-[#e0e0e0] rounded-[22px] border m-0 p-0 border-[#bfbfbf]">
                      <img
                        className=" rounded-full p-[2px]"
                        src={cards[currentCardIndex].avatar}
                      />
                    </div>
                    <div className="flex w-full items-center ">
                      <div className="m-0">
                        <div
                          style={{
                            fontFamily: "Space Grotesk",
                          }}
                          className=" text-lg font-normal "
                        >
                          {cards[currentCardIndex].name}
                        </div>
                        <div
                          style={{
                            fontFamily: "DM Sans",
                          }}
                          className=" text-[#707070] text-sm font-normal "
                        >
                          {cards[currentCardIndex].major}
                        </div>
                      </div>
                      <div
                        style={{
                          fontFamily: "Mate SC",
                        }}
                        className=" text-6xl mr-2 "
                      >
                        “
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "DM Sans",
                  }}
                  z
                  className=" text-[#707070] w-[98%]"
                >
                  {cards[currentCardIndex].comment}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
