import overview_slide_border from "@assets/Home/overview_slide_border.png";
import overview_slide_image_1 from "@assets/Home/overview_slide_image_1.png";
import overview_slide_image_2 from "@assets/Home/overview_slide_image_2.png";
import overview_slide_image_3 from "@assets/Home/overview_slide_image_3.png";
import overview_arrow_thin from "@assets/Home/overview_arrow_thin.png";
import overview_arrow_bold from "@assets/Home/overview_arrow_bold.png";
import { useRef, useState } from "react";

const Overview = () => {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideImageRef = useRef(null);
  const contentRef = useRef(null);
  const contents = [
    {
      title: "Technology Solutions & Game Production",
      description: `We provide advanced technology solutions, including software development, management systems, and especially 3D, 2D, and VR game production. With a team of experienced experts, we are committed to delivering innovative and high-quality products that help your business stand out in the market. 
      <span style="display:block; margin-top:8px;"></span> 
      In addition to focusing on technology and game production, we continuously research and apply the latest trends in the gaming industry to deliver groundbreaking user experiences. We work closely with clients to thoroughly understand their needs, thereby customizing the most suitable solutions to meet their business goals. With a spirit of innovation, we not only create high-quality products but also help businesses enhance their competitive advantage in the market. Our team is always ready to provide support from the ideation stage to implementation and maintenance, ensuring the product operates efficiently and delivers long-term value.`,
      image: overview_slide_image_1,
    },
    {
      title: "Creative Media",
      description: `Our media services focus on building brand promotion strategies, creating creative content, and managing social media channels. We help businesses effectively reach customers and build sustainable relationships.
      <span style="display:block; margin-top:8px;"></span> 
        In addition, we leverage advanced analytics tools to measure the performance of media campaigns, ensuring that every effort is aligned with business objectives. By combining creativity with data-driven insights, we empower brands to amplify their presence in a competitive market.
       <span style="display:block; margin-top:8px;"></span> 
      Our team also offers personalized solutions to adapt to evolving consumer behaviors. This approach helps businesses maintain relevance, foster brand loyalty, and achieve long-term success in an ever-changing digital landscape.`,
      image: overview_slide_image_2,
    },
    {
      title: "Artificial Intelligence Applications",
      description: `We specialize in developing AI applications to streamline business processes, analyze data, and enable smart strategic decision-making. Our solutions help businesses drive innovation, improve efficiency, and foster sustainable development.
      <span style="display:block; margin-top:8px;"></span> 
      Our AI solutions are tailored to meet the unique needs of each client, ensuring seamless integration into existing systems. By utilizing cutting-edge machine learning and data analytics technologies, we empower businesses to identify opportunities, mitigate risks, and enhance their competitive edge. Our team remains committed to delivering scalable and adaptable AI solutions that support long-term growth and success in an ever-evolving market.`,
      image: overview_slide_image_3,
    },
  ];

  const handleNextSlideChange = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    applySlideTransition("out");
    setTimeout(() => {
      setCurrentContentIndex((prevIndex) => (prevIndex + 1) % contents.length);
      applySlideTransition("in");
      setIsAnimating(false);
    }, 300);
  };

  const handlePrevSlideChange = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    applySlideTransition("out-reverse");
    setTimeout(() => {
      setCurrentContentIndex(
        (currentContentIndex - 1 + contents.length) % contents.length
      );
      applySlideTransition("in-reverse");
      setIsAnimating(false);
    }, 300);
  };
  const applySlideTransition = (type) => {
    if (contentRef.current && slideImageRef.current) {
      if (type === "out") {
        contentRef.current.classList.add("animate-fade-out-up");
        contentRef.current.classList.remove("animate-fade-in-up");
        contentRef.current.classList.remove("animate-fade-out-up-reverse");

        //slideImageRef
        slideImageRef.current.classList.add("animate-fade-out-up");
        slideImageRef.current.classList.remove("animate-fade-in-up");
        slideImageRef.current.classList.remove("animate-fade-out-up-reverse");
      } else if (type === "in") {
        contentRef.current.classList.add("animate-fade-in-up");
        contentRef.current.classList.remove("animate-fade-out-up");
        contentRef.current.classList.remove("animate-fade-in-up-reverse");

        //slideImageRef
        slideImageRef.current.classList.add("animate-fade-in-up");
        slideImageRef.current.classList.remove("animate-fade-out-up");
        slideImageRef.current.classList.remove("animate-fade-in-up-reverse");
      } else if (type === "in-reverse") {
        contentRef.current.classList.add("animate-fade-in-up-reverse");
        contentRef.current.classList.remove("animate-fade-out-up-reverse");

        //slideImageRef
        slideImageRef.current.classList.add("animate-fade-in-up-reverse");
        slideImageRef.current.classList.remove("animate-fade-out-up-reverse");
      } else if (type === "out-reverse") {
        contentRef.current.classList.add("animate-fade-out-up-reverse");
        contentRef.current.classList.remove("animate-fade-in-up-reverse");

        //slideImageRef
        slideImageRef.current.classList.add("animate-fade-out-up-reverse");
        slideImageRef.current.classList.remove("animate-fade-in-up-reverse");
      }
    }
  };
  return (
    <>
      <section id="overview" className="h-screen relative flex items-center">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-2/3 w-[90%] md:grid grid-cols-2    ">
          <div className="content m-0">
            <div className="section-title">
              <h1
                style={{
                  fontFamily: "Space Grotesk",
                  fontSize: "300%",
                  fontWeight: "bold",
                  marginBlockEnd: "0.5em",
                }}
              >
                Overview
              </h1>
            </div>
            <div ref={contentRef} className="section-content">
              <h2
                style={{
                  fontFamily: "Space Grotesk",
                  fontSize: "200%",
                  color: " #183E52",
                  marginBlockEnd: "0.5em",
                }}
                className="title font-semibold"
              >
                {contents[currentContentIndex].title}
              </h2>
              <p
                className="description text-gray-700 leading-8 text-sm md:text-base lg:text-lg"
                dangerouslySetInnerHTML={{
                  __html: contents[currentContentIndex].description,
                }}
              ></p>
            </div>
          </div>
          <div className="slide m-auto bg-cover flex gap-[10%] select-none ">
            <div className="navigation flex flex-col justify-center gap-[10%]">
              <div
                className={`prev relative group ${
                  currentContentIndex == 0 ? "scale-0" : "scale-100"
                }  transition-all duration-200 select-none ${
                  isAnimating ? "cursor-not-allowed pointer-events-none" : ""
                }`}
                onClick={handlePrevSlideChange}
              >
                <img
                  src={overview_arrow_thin}
                  alt=""
                  onClick={handlePrevSlideChange}
                />
                <img
                  src={overview_arrow_bold}
                  className="absolute top-0 scale-0 group-hover:scale-100 transition-all duration-200"
                  alt=""
                />
              </div>
              <div
                className={`next relative group ${
                  currentContentIndex == 2
                    ? "scale-0"
                    : "scale-100 -scale-y-100 "
                }  transition-all duration-200 select-none  ${
                  isAnimating ? "cursor-not-allowed pointer-events-none" : ""
                }`}
                onClick={handleNextSlideChange}
              >
                <img
                  src={overview_arrow_thin}
                  alt=""
                  onClick={handlePrevSlideChange}
                />
                <img
                  src={overview_arrow_bold}
                  className="absolute top-0 scale-0 group-hover:scale-100 transition-all duration-200"
                  alt=""
                />
              </div>
            </div>
            <div className="slide-image relative w-full   ">
              <img
                src={overview_slide_border}
                alt=""
                className="border-image  z-10    "
              />

              <img
                ref={slideImageRef}
                src={contents[currentContentIndex].image}
                alt=""
                className="image w-2/3 absolute inset-0 m-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="introduce h-[15%] mt-[5%] bg-[#EAF3FE] p-4 text-xl text-center text-[#183E52]">
        <p className="w-[70%] mx-auto ">
          <span className="text-[#28b4ec] font-semibold">TON Gaming</span> is a
          leading global provider of gaming and blockchain development services,
          headquartered in Vietnam with offices in both Hanoi and Ho Chi Minh
          City. Our team comprises{" "}
          <span className="font-semibold">
            over 40 skilled developers and financial experts
          </span>
          , dedicated to delivering top-tier solutions for our clients
          worldwide.
        </p>
      </div>
    </>
  );
};

export default Overview;
