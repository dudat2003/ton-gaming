/* eslint-disable react/no-unescaped-entities */
import news_thumbnail_1 from "@assets/Home/news_thumbnail_1.png";
import news_thumbnail_2 from "@assets/Home/news_thumbnail_2.png";
import news_thumbnail_3 from "@assets/Home/news_thumbnail_3.png";
const News = () => {
  const news = [
    {
      id: 1,
      thumb: news_thumbnail_1,
      title: "Exploring the Future of Blockchain Technology",
      description:
        "Exploring the Future of Blockchain Technology reveals its potential to revolutionize industries with secure and transparent solutions.",
      date: "August 9, 2024",
    },
    {
      id: 2,
      thumb: news_thumbnail_2,
      title: "AI and Machine Learning Transforming Industries",
      description:
        "AI and Machine Learning are transforming industries by enhancing automation, improving decision-making, and driving innovation across sectors",
      date: "August 7, 2024",
    },
    {
      id: 3,
      thumb: news_thumbnail_3,
      title: "The Impact of 5G on Global Connectivity",
      description:
        "The Impact of 5G on Global Connectivity is driving faster, more reliable communication, enabling advancements in IoT, smart cities, and industries worldwide",
      date: "August 5, 2024",
    },
  ];
  return (
    <section
      id="testimonials"
      className="flex flex-col gap-6 justify-start items-center p-[2.5%]  "
    >
      <div className="  px-5 py-3 bg-[#edefff] rounded-full text-xl m-0 ">
        Up-to-date news
      </div>
      <div className=" flex flex-col gap-4  ">
        <div className="    ">
          <span
            style={{
              fontFamily: "Space Grotesk",
            }}
            className="text-[#00141d] text-5xl font-bold "
          >
            Ton Gaming{" "}
          </span>
          <span
            style={{
              fontFamily: "Space Grotesk",
            }}
            className="text-[#29b8ea] text-5xl font-bold"
          >
            News
          </span>
        </div>
        <div
          style={{ fontFamily: "DM Sans" }}
          className="  text-center text-[#3d3d3d] text-xl    "
        >
          Get the production and quality of an in-house team without the
          overhead cost.
          <br />
          All this is powered by an agency-level platform for easy management or
          white-labeling.
        </div>
      </div>
      <div className="news w-[95%] h-full flex justify-around gap-[2%]">
        {news.map(({ id, thumb, title, description, date }) => (
          <>
            <div key={id} className=" group w-1/3 flex flex-col gap-6   ">
              <div className=" h-full m-0 flex flex-col gap-6">
                <div className="overflow-hidden rounded-[20px] justify ">
                  <img
                    className=" transition-all duration-500 object-cover "
                    src={thumb}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div
                    className="text-[#00141d] text-2xl  font-bold m-0"
                    style={{
                      fontFamily: "Space Grotesk",
                    }}
                  >
                    {title}
                  </div>
                  <div
                    className="text-[#676767] text-lg "
                    style={{
                      fontFamily: "DM Sans",
                    }}
                  >
                    {description}
                  </div>
                </div>
              </div>
              <div className=" w-full flex justify-between items-center m-0">
                <div className="  justify-start items-center gap-[13px] m-0 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    className="  fill-white group-hover:fill-black  transition-all duration-500"
                  >
                    <rect
                      width="41.5"
                      height="41.5"
                      x=".25"
                      y=".25"
                      stroke="#D2D2D2"
                      strokeWidth=".5"
                      rx="20.75"
                    />
                    <path
                      d="M25.672 20.24 22.302 17l-.504.486 3.297 3.17H16v.687h9.096l-3.298 3.171.505.486 3.37-3.239a1.05 1.05 0 0 0 0-1.52v-.001Z"
                      className="fill-black group-hover:fill-white "
                    />
                  </svg>

                  <div className="  text-black font-semibold">Read more</div>
                </div>
                <div className=" items-center m-0  flex gap-4">
                  <div className="text-[#494949] text-base font-light ">
                    {date}
                  </div>
                  <div className="w-8 h-[0px] border border-[#a6a6a6]"></div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div
        style={{
          fontFamily: "Space Grotesk",
        }}
        className="text-center text-black text-xl font-medium"
      >
        If you're passionate about the gaming world, don't miss{" "}
        <span
          style={{
            fontFamily: "Space Grotesk",
          }}
          className="text-[#29b8ea]"
        >
          Ton Gaming
        </span>
        . But if you're eager to explore
        <br />
        creative trends and unique media content,{" "}
        <span
          style={{
            fontFamily: "Space Grotesk",
          }}
          className="text-[#29b8ea]"
        >
          Ton Media
        </span>{" "}
        is the perfect destination.
      </div>
    </section>
  );
};

export default News;
