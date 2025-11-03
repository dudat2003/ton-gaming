/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
  return (
    <section id="contact">
      <div className="container flex flex-col items-center justify-center ">
        <div className=" w-full flex justify-between items-center py-[3%]  ">
          <div className="w-[200px] h-16 relative rounded-[100px] m-0">
            <button
              disabled
              className=" group relative rounded-full h-full w-full m-[3%] transition-all duration-500 md:text-sm lg:text-md xl:text-2xl font-semibold bg-[#3BA0E9] overflow-hidden text-white"
            >
              <span className="">Contact Us</span>
              <div className=" absolute h-9 w-full bg-cyan-300 opacity-55  -left-[100%] blur -translate-y-1/2 group-hover:translate-x-[200%] transition-all duration-1000 rotate-[-60deg]"></div>
            </button>{" "}
          </div>
          <div className="m-0 text-2xl font-medium ">
            <div
              style={{
                fontFamily: "Space Grotesk",
              }}
              className=""
            >
              COMPREHENSIVE SERVICES FOR GAMING ON TON BLOCKCHAIN{" "}
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-[52px] flex">
          <div className="  p-8 bg-[#eaf3fe] rounded-xl gap-6 justify-between items-center flex">
            <div className="flex flex-col items-start justify-start w-full gap-6 md:w-2/3 ">
              <div
                style={{
                  fontFamily: "Space Grotesk",
                }}
                className="m-0 text-4xl font-medium "
              >
                Join the Newsletter
              </div>
              <div className="text-[#676767] text-xl font-light  ">
                Sign up for our newsletter to stay updated with the latest news,
                special offers, and helpful tips. We'll send exciting updates
                directly to your inbox!
              </div>
            </div>
            <div className="inline-flex flex-col gap-6 ">
              <div className="inline-flex items-center justify-between m-0 ">
                <div
                  style={{
                    fontFamily: "Space Grotesk",
                  }}
                  className="w-full  px-4 py-2 bg-white rounded-tl-lg rounded-bl-lg border border-[#c0c0c0]   flex"
                >
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="  text-[#676767] text-xl font-light "
                  />
                </div>
                <button
                  type="submit"
                  className=" border border-[#3ba0e8] text-xl font-light border-l-0 p-2 bg-[#3ba0e8] rounded-tr-lg rounded-br-lg text-white  "
                >
                  Subscribe
                </button>
              </div>
              <div className="inline-flex items-center justify-start gap-3">
                <input type="checkbox" className="w-5 h-5 " />
                <div
                  style={{
                    fontFamily: "Space Grotesk",
                  }}
                  className="text-xl font-light"
                >
                  I agree with{" "}
                  <span
                    style={{
                      fontFamily: "Space Grotesk",
                    }}
                    className="underline"
                  >
                    Privacy Policy
                  </span>{" "}
                  and{" "}
                  <span
                    style={{
                      fontFamily: "Space Grotesk",
                    }}
                    className="underline"
                  >
                    Terms of Conditions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
