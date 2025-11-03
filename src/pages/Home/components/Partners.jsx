import tag from "@assets/Home/tag.png";
import icon_partner_list from "@assets/Home/icon_partner_list.png";
const Partners = () => {
  const tagContents = [
    {
      id: 1,
      data: "8hrs",
      title: "Fast Software Design",
      description: "Average time to design software for clients.",
    },
    {
      id: 2,
      data: "3hrs",
      title: "Quick Response",
      description: "Average time to respond to customer requests. ",
    },
    {
      id: 3,
      data: "94%",
      title: "Fast AI Solutions",
      description: "Answering calls within 15 seconds.",
    },
  ];
  return (
    <section
      id="partners"
      className="w-full h-[60vh] flex flex-col justify-center items-center gap-[10%]  "
    >
      <div className="tag flex w-[90%] items-center ">
        {tagContents.map((tagContent) => {
          return (
            <div key={tagContent.id} className="tagContent ">
              <div
                style={{
                  fontFamily: "Space Grotesk",
                }}
                className="relative w-[90%]"
              >
                <img className="" src={tag} alt="" />
                <div className="text-center absolute top-1/2   left-[5%]   -translate-y-1/2 text-white text-4xl font-bold">
                  {tagContent.data}
                </div>
                <div className=" absolute top-1/2 left-[40%]   -translate-y-1/2    ">
                  <div className="self-stretch text-[#183e52] text-xl font-bold font-['Space Grotesk']">
                    {tagContent.title}
                  </div>
                  <div className="self-stretch text-[#183e52] text-base font-light font-['Space Grotesk']">
                    {tagContent.description}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="partners">
        <div
          style={{
            fontFamily: "Space Grotesk",
          }}
          className="  flex-col justify-center items-center gap-3 inline-flex"
        >
          <div className="  text-center text-[#29b8ea]  font-medium text-4xl  ">
            Our Partners
          </div>
          <div className="  text-center text-[#183e52]  text-4xl font-semibold ">
            We work with the best partners
          </div>
        </div>
      </div>
      <div className="list flex animate-scrollHorizontal">
        <img src={icon_partner_list} alt="" />
        <img src={icon_partner_list} alt="" />
      </div>
    </section>
  );
};

export default Partners;
