import footer_contact_info_avt from "@assets/Home/footer_contact_info_avt.png";
import icon_ton_gaming from "@assets/Home/icon_ton_gaming.png";

const Footer = () => {
  const serviceProvided = [
    "3D and 2D Design",
    "Branding Campaigns",
    "AI Solutions",
    "Technology Consulting",
    "Advertising Services",
    "3D & VR Game Development",
  ];
  return (
    <footer id="footer">
      <div className=" container items-center gap-4 flex  my-6">
        <div className=" items-center gap-5 flex m-0">
          <img className="" src={icon_ton_gaming} />
          <div
            style={{
              fontFamily: "Inter",
            }}
            className="text-3xl font-bold m-0"
          >
            TON GAMING
          </div>
        </div>
        <div className="w-0.5 m-0 h-16 bg-[#c0c0c0]" />
        <div className=" text-xl text-[#676767] flex ml-0 ">
          Leading global provider of gaming and blockchain.
        </div>
      </div>
      <div className="container flex justify-between border-y-2 py-[3%]">
        <div className="address flex flex-col gap-[5%] text-xl w-1/3 m-0">
          <div className="">
            Our company is a leading game studio specializing in building games.
            We provide comprehensive solutions to customers worldwide, handling
            everything from start to finish.
          </div>

          <div className="text-[#676767] text-lg m-0 flex gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="52"
              fill="none"
              viewBox="0 0 43 62"
              className="m-0"
            >
              <path
                fill="#000"
                d="M21.5 29.95a5.143 5.143 0 0 1-3.662-1.538 5.287 5.287 0 0 1-1.517-3.712c0-1.392.546-2.728 1.517-3.712A5.143 5.143 0 0 1 21.5 19.45c1.373 0 2.69.553 3.662 1.538a5.287 5.287 0 0 1 1.517 3.712c0 .69-.134 1.372-.395 2.01a5.256 5.256 0 0 1-1.122 1.702 5.177 5.177 0 0 1-1.68 1.138c-.628.264-1.302.4-1.982.4Zm0-19.95a14.4 14.4 0 0 0-10.253 4.306A14.803 14.803 0 0 0 7 24.7C7 35.725 21.5 52 21.5 52S36 35.725 36 24.7c0-3.899-1.528-7.638-4.247-10.394A14.4 14.4 0 0 0 21.5 10Z"
              />
            </svg>
            177 Quan Hoa Street, Cau Giay District, Hanoi, Vietnam
          </div>

          <div className="text-[#676767] text-lg m-0 flex gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="26"
              fill="none"
              viewBox="0 0 43 36"
              className="m-0"
            >
              <path
                fill="#000"
                d="M35.5 4h-28C5.575 4 4.018 5.575 4.018 7.5L4 28.5A3.51 3.51 0 0 0 7.5 32h28a3.51 3.51 0 0 0 3.5-3.5v-21A3.51 3.51 0 0 0 35.5 4Zm-.7 7.438-12.372 7.734a1.77 1.77 0 0 1-1.855 0L8.2 11.438a1.487 1.487 0 1 1 1.575-2.52L21.5 16.25l11.725-7.332a1.487 1.487 0 1 1 1.575 2.52Z"
              />
            </svg>
            contact@ton-gaming.com
          </div>
        </div>
        <div className="service-provided flex flex-col gap-4  ">
          <div
            style={{
              fontFamily: "Space Grotesk",
            }}
            className="font-bold text-2xl m-0"
          >
            Services Provided
          </div>
          <div className="flex-col  gap-4 flex text-[#676767] text-lg font-light ">
            {serviceProvided.map((service, index) => (
              <li
                key={index}
                className="m-0 group list-none flex items-center hover:underline "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  className="m-0  w-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"
                >
                  <path
                    stroke="#3BA0E9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m10.95 1.05-9.9 9.9m9.9-9.9v8.486m0-8.486H2.464"
                  />
                </svg>

                <a href="" className="m-0">
                  {" "}
                  {service}
                </a>
              </li>
            ))}
          </div>
        </div>
        <div className="contact-information flex flex-col gap-4 m-0">
          <div
            style={{
              fontFamily: "Space Grotesk",
            }}
            className=" m-0 text-2xl font-bold"
          >
            Contact Information
          </div>
          <div className="flex gap-4">
            <img className=" w-1/3" src={footer_contact_info_avt} />
            <div className=" flex flex-col justify-center leading-10 ">
              Chat with an expert <br />
              Available 24/7
            </div>
          </div>
        </div>
      </div>
      <div className=" container text-xl flex justify-between items-center py-4">
        <div className=" m-0  ">
          ©Copyright ©2024 TON Gaming. All rights reserved.
        </div>
        <div
          style={{
            fontFamily: "Space Grotesk",
          }}
          className="gap-5  m-0 flex"
        >
          <div className=" underline">Privacy Policy</div>
          <div className=" underline">Terms of Conditions</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
