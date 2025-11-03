/* eslint-disable react/no-unescaped-entities */
import ton_media_1 from "@assets/Home/ton_media_1.png";
import ton_media_2 from "@assets/Home/ton_media_2.png";
import ton_media_4 from "@assets/Home/ton_media_4.png";
import logo_ton_media from "@assets/Home/logo_ton_media.png";
const TonMedia = () => {
  return (
    <section id="ton-media" className="w-screen">
      <div className="relative w-full">
        <div className="slide">
          <div className="flex slide-1 animate-scrollHorizontal15s">
            <img src={ton_media_1} alt="" />
            <img src={ton_media_1} alt="" />
          </div>
          <div className="flex slide-2 animate-scrollHorizontal12s">
            <img src={ton_media_2} alt="" />
            <img src={ton_media_2} alt="" />
          </div>
          <div className="flex slide-3 animate-scrollHorizontal">
            <img src={ton_media_4} alt="" />
            <img src={ton_media_4} alt="" />
          </div>
          <div className="overlay absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-3xl bg-black bg-opacity-50 w-[80%] h-[80%]" />
          <div className="absolute flex flex-col justify-center gap-6 text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
            <div className="m-0 logo">
              <img src={logo_ton_media} alt="" className="scale-75" />
              <div
                style={{
                  fontFamily: "Inter",
                }}
                className="text-5xl font-bold leading-snug tracking-wide text-white"
              >
                Ton Media
              </div>
              <div className="text-lg text-white ">
                If you're passionate about the gaming world, don't miss Ton
                Gaming. But if you're eager to explore creative trends and
                unique media content, Ton Media is the perfect destination.
              </div>
            </div>
            <div className="m-0 button">
              <button className="relative px-10 py-4 overflow-hidden text-4xl text-white transition-all duration-500 border border-white rounded-full  group hover:border-transparent">
                <div className=" z-10 absolute w-56 h-40  top-1/2  left-1/2 -translate-x-1/2  scale-0  group-hover:scale-[2] transition-all duration-700  rounded-full bg-[#3BA0E9]"></div>
                <span className="relative z-20 flex items-center justify-center tracking-wide">
                  Official Site
                  <div className="m-0">
                    <svg
                      className="w-0 transition-all duration-500 scale-x-125 -rotate-45 group-hover:w-5 group-hover:rotate-0 group-hover:translate-x-2"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TonMedia;
