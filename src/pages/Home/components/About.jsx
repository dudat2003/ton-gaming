import about_our_mission from "@assets/Home/about_our_mission.png";
import about_history from "@assets/Home/about_history.png";
import about_our_partners from "@assets/Home/about_our_partners.png";
const About = () => {
  const contents = [
    {
      title: "Our Mission",
      description: `Our mission is to become a leading company in providing innovative technology, media, and artificial intelligence solutions to enhance efficiency and value for customers.`,
      image: about_our_mission,
    },
    {
      title: "About History",
      description: `Founded in August 2024, our company quickly established its position in the information technology, media, and artificial intelligence industry, aiming for sustainable and breakthrough development`,
      image: about_history,
    },
    {
      title: "Our Partners",
      description: `We are proud to be a strategic partner of leading companies in the technology industry, working together to develop breakthrough solutions to address modern business challenges.`,
      image: about_our_partners,
    },
  ];
  return (
    <section className="w-full">
      <div className="h-[66.666666vh] w-[90%] flex justify-around items-center flex-wrap">
        {contents.map((content, index) => (
          <div key={index}>
            <div className=" group relative">
              <img
                className=" group-hover:scale-[105%]  transition-all duration-500 "
                src={content.image}
                alt=""
              />
              <div className="overlay w-[93.5%] h-[93.5%] bg-black absolute top-[48.2%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-500"></div>
              <div className="absolute w-[70%] top-1/2 left-1/2 -translate-x-1/2 group-hover:-translate-y-1/2 text-center hidden group-hover:block transition-all duration-200">
                <h1
                  style={{
                    marginBlockEnd: "0.5em",
                  }}
                  className="text-[#2AB4EB] text-3xl font-bold"
                >
                  {content.title}
                </h1>
                <p className="text-xl text-white font-semibold">
                  {content.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
