import icon_ton_gaming from "@assets/Home/icon_ton_gaming.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [scrollDirection, setScrollDirection] = useState({
    UP: true,
    DOWN: false,
  });
  useEffect(() => {
    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      let currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop) {
        setScrollDirection({ UP: false, DOWN: true });
      } else {
        setScrollDirection({ UP: true, DOWN: false });
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
  }, []);
  return (
    <>
      <header
        className={`fixed top-[10%] left-1/2 -translate-x-1/2 z-50  w-[75%] ${
          scrollDirection.UP ? "-translate-y-1/2" : "-translate-y-[300%]"
        } transition-all duration-500 p-3 bg-[#eaf3fe]  rounded-full shadow flex justify-between`}
      >
        <div className="logo flex mx-0 items-center   w-[20%] ">
          <img className="md:w-[25%] ml-0 mr-2" src={icon_ton_gaming} alt="" />
          <p
            style={{
              fontFamily: "Inter",
            }}
            className="text-xl lg:text-2xl font-bold hidden md:block"
          >
            TON GAMING
          </p>
        </div>
        <ul className="flex justify-between w-1/3   items-center font-semibold  text-xl   ">
          <li className="group">
            <Link to="/">Home</Link>
            <div className="h-[2px] bg-slate-700 group-hover:scale-x-125 scale-x-0 transition-all duration-300"></div>
          </li>
          <li className="group">
            <Link to="/services">Services</Link>
            <div className="h-[2px] bg-slate-700 group-hover:scale-x-125 scale-x-0 transition-all duration-300"></div>
          </li>
          <li className="group">
            <Link to="/contact">Contact</Link>
            <div className="h-[2px] bg-slate-700 group-hover:scale-x-125 scale-x-0 transition-all duration-300"></div>
          </li>
        </ul>
        <div className=" button flex justify-end items-center gap-6 mx-0 w-[25%]  rounded-full ">
          {/* search */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            fill="none"
            viewBox="0 0 42 42"
          >
            <path
              fill="#484848"
              d="M24.581 0C15.234 0 7.662 7.597 7.662 16.966a16.922 16.922 0 0 0 2.426 8.757l-8.203 8.226.028.028C1.038 34.817.5 36.011.5 37.36.5 39.964 2.569 42 5.164 42c1.325 0 2.51-.532 3.357-1.398l.02.021 8.464-8.488a16.828 16.828 0 0 0 7.576 1.797c9.348 0 16.919-7.596 16.919-16.966C41.5 7.597 33.929 0 24.581 0Zm.103 27.26c-5.842 0-10.575-4.747-10.575-10.603S18.842 6.053 24.684 6.053s10.574 4.748 10.574 10.604c0 5.856-4.732 10.603-10.574 10.603Z"
            />
          </svg>
          {/* language */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            fill="none"
            viewBox="0 0 42 42"
          >
            <path
              fill="#484848"
              fillRule="evenodd"
              d="M21 1.558c.238 0 .786.14 1.588 1.006.782.843 1.607 2.178 2.357 3.988.481 1.16.913 2.474 1.28 3.915a50.552 50.552 0 0 0-10.45 0 28.886 28.886 0 0 1 1.28-3.915c.75-1.81 1.575-3.145 2.355-3.99.804-.864 1.35-1.004 1.59-1.004Zm-6.081 13.36A45.369 45.369 0 0 1 21 14.52c2.128 0 4.17.143 6.081.4.257 1.912.4 3.953.4 6.081 0 2.128-.143 4.17-.4 6.081a45.3 45.3 0 0 1-6.081.4c-2.128 0-4.17-.143-6.081-.4a45.369 45.369 0 0 1-.4-6.081c0-2.128.143-4.17.4-6.081Zm-4.45 11.308a50.552 50.552 0 0 1 0-10.452 28.87 28.87 0 0 0-3.917 1.281c-1.81.75-3.145 1.575-3.99 2.355-.864.804-1.004 1.35-1.004 1.59s.14.786 1.004 1.588c.845.782 2.18 1.607 3.99 2.357 1.273.52 2.583.947 3.917 1.28Zm5.305 5.308c3.475.36 6.977.36 10.452 0a28.96 28.96 0 0 1-1.281 3.914c-.75 1.81-1.575 3.145-2.355 3.99-.804.864-1.35 1.004-1.59 1.004s-.786-.14-1.588-1.004c-.782-.845-1.607-2.18-2.357-3.99a28.947 28.947 0 0 1-1.28-3.915Zm15.757-5.308a50.552 50.552 0 0 0 0-10.452c1.335.334 2.644.762 3.917 1.281 1.81.75 3.145 1.575 3.99 2.355.864.804 1.004 1.35 1.004 1.59s-.14.786-1.004 1.588c-.845.782-2.18 1.607-3.99 2.357-1.16.481-2.476.913-3.917 1.28Zm-.708-15.049a35.217 35.217 0 0 0-1.886-6.28C28.144 2.987 27.19 1.3 26.087 0A21.646 21.646 0 0 1 42 15.913c-1.3-1.102-2.988-2.057-4.897-2.85a35.217 35.217 0 0 0-6.28-1.886Zm0 19.646a35.217 35.217 0 0 1-1.886 6.28c-.793 1.91-1.746 3.596-2.85 4.897A21.646 21.646 0 0 0 42 26.087c-1.3 1.102-2.988 2.057-4.897 2.85-1.839.762-3.958 1.404-6.28 1.886ZM15.913 42c-1.102-1.3-2.057-2.988-2.85-4.897a35.217 35.217 0 0 1-1.886-6.28 35.217 35.217 0 0 1-6.28-1.886c-1.91-.793-3.599-1.746-4.897-2.85A21.646 21.646 0 0 0 15.913 42Zm-4.736-30.823c.482-2.322 1.124-4.441 1.886-6.28.793-1.91 1.746-3.597 2.85-4.897A21.646 21.646 0 0 0 0 15.913c1.298-1.102 2.988-2.057 4.897-2.85a35.217 35.217 0 0 1 6.28-1.886Z"
              clipRule="evenodd"
            />
          </svg>

          <button className=" group relative rounded-full h-[90%] w-full m-[3%]   hover:shadow-lg hover:scale-95   active:scale-90 transition-all duration-500 md:text-sm lg:text-md xl:text-2xl font-semibold bg-[#3BA0E9] overflow-hidden text-white">
            <span className="">Start Now</span>
            <div className=" absolute h-9 w-full bg-cyan-300 opacity-55  -left-[100%] blur -translate-y-1/2 group-hover:translate-x-[200%] transition-all duration-1000 rotate-[-60deg]"></div>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
