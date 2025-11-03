import { useState } from "react";

const FAQs = () => {
  const FAQs = [
    {
      id: 1,
      question:
        "Does the company provide comprehensive IT management services?",
      answer:
        "Yes, we offer comprehensive IT management services, including system administration, network security, and technology consulting to optimize your business performance.",
    },
    {
      id: 2,
      question:
        "How many support hours can I get under the management agreement?",
      answer:
        "The specific support hours will be agreed upon based on your needs and the scope of your project. We ensure timely and effective support to help you maintain smooth business operations.",
    },
    {
      id: 3,
      question: "Why does my website design need regular maintenance?",
      answer:
        "Regular website maintenance is crucial to ensure stable functionality, improve security, and update the latest content, enhancing user experience and optimizing SEO.",
    },
    {
      id: 4,
      question: "Does the company support media and advertising?",
      answer:
        "We provide professional media and advertising services, including developing advertising strategies, managing media campaigns, and optimizing content to enhance brand recognition.",
    },
  ];
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleAnswer = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };
  return (
    <section id="FAQs" className="w-full py-[2.5%] bg-[#eaf3fe] flex flex-col">
      <div className=" container  h-1/5 flex-col justify-center items-center gap-6 inline-flex">
        <div className="w-1/5 px-[5%] py-3 bg-white rounded-full">
          <div
            style={{
              fontFamily: "Space Grotesk",
            }}
            className="text-center text-black text-xl font-normal font-['Space Grotesk']"
          >
            FAQs
          </div>
        </div>
        <div className="self-stretch text-center text-5xl leading-tight">
          <span
            style={{
              fontFamily: "Space Grotesk",
            }}
            className="text-black  font-bold "
          >
            Got any questions?
            <br />
            Frequently{" "}
          </span>
          <span
            style={{
              fontFamily: "Space Grotesk",
            }}
            className="text-[#29b8ea]  font-bold "
          >
            Asked Questions
          </span>
        </div>
        <div className="faqs w-[80%] flex flex-col gap-6 transition-all duration-300">
          {FAQs.map(({ id, question, answer }) => (
            <div
              key={id}
              className="p-6  w-full outline-none bg-white border border-gray-200  shadow-lg cursor-pointer hover:bg-gray-50 rounded-3xl"
            >
              <button
                type="button"
                onClick={() => toggleAnswer(id)}
                className="flex items-center justify-between  w-full   "
              >
                <span
                  style={{
                    fontFamily: "Space Grotesk",
                  }}
                  className="flex m-0 text-xl font-semibold text-black"
                >
                  {question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="none"
                  viewBox="0 0 40 40"
                  className={`m-0 ${
                    openQuestion
                      ? id === openQuestion
                        ? "rotate-[135deg]"
                        : ""
                      : ""
                  } transition-all duration-300`}
                >
                  <path
                    fill="#000"
                    fillRule="evenodd"
                    d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20Zm0-4c8.837 0 16-7.163 16-16S28.837 4 20 4 4 11.163 4 20s7.163 16 16 16Zm6-18h-4v-4a2 2 0 1 0-4 0v4h-4a2 2 0 1 0 0 4h4v4a2 2 0 1 0 4 0v-4h4a2 2 0 1 0 0-4Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-out overflow-hidden ${
                  openQuestion === id ? "max-h-[100px] p-2" : "max-h-0 p-0"
                }`}
                style={{
                  maxHeight: openQuestion === id ? "100px" : "0px",
                  opacity: openQuestion === id ? 1 : 0,
                }}
              >
                <p className="text-[#707070]">{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
