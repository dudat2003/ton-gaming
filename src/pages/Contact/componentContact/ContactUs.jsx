import React from 'react'
import { BsChatSquareText } from "react-icons/bs";
function ContactUs() {
  return (
    <div className='pt-[13%] pb-[5%]'>
        <div className='w-[70%] h-auto'>
            <div className='text-3xl font-light py-3 text-[#E00631] w-[20%] border-[#DFF9FF] rounded-3xl  text-center bg-[#DFF9FF]'>
               Contact Us
            </div>
            <div className='w-[80%] text-center mt-2 text-[#00151D] text-6xl font-bold'>
              Need help? Contact us
            </div>
            <div className='w-[50%] text-[#3D3D3D] font-medium text-center mt-5'>
            Email, call, or complete the form to learn how TON Gaming can address your requirements, immediately.
            </div>
            <div className='flex mt-[3%] gap-5 w-[100%] justify-start items-start '>
              <div className='flex flex-col gap-5 '>
                <div className='p-5 bg-white rounded-3xl w-[430px]'>
                  <div className="mb-4 w-full translate-x-[-40%] space-x-4 text-6xl text-black">
                    <BsChatSquareText />
                  </div>
                  <div className="text-xl font-bold text-[#00151D] mb-2">
                    Open Live Chat
                  </div>
                  <h3 className="text-base text-[#3D3D3D] mb-4">
                    Donezo to feel like a natural extension of your
                  </h3>
                  <a href="/" className="text-lg border-red-500 hover:border-b-2 hover:text-red-500">
                    Send Message
                  </a>
                </div>
                <div className='p-5 bg-white rounded-3xl w-[430px]'>
                  <div className="mb-6 w-full translate-x-[-40%] space-x-4 text-6xl text-black">
                    <BsChatSquareText />
                  </div>
                  <div className="text-xl font-bold text-[#00151D] mb-2">
                    Open Live Chat
                  </div>
                  <h3 className="text-base text-[#3D3D3D] mb-4">
                    Donezo to feel like a natural extension of your
                  </h3>
                  <a href="/" className="text-lg border-red-500 hover:border-b-2 hover:text-red-500">
                    Send Message
                  </a>
                </div>
              </div>
              <div className='w-full h-[100%] bg-white rounded-3xl'>
              <div className="w-full h-auto p-6 bg-white shadow-lg rounded-3xl">
                {/* Email input section */}
                <div className="flex flex-col w-[95%] mb-4 text-[#000000] gap-1">
                  Name
                  <input 
                    type="name"
                    placeholder="Your Name... "
                    className="w-full h-12 border-2 px-2 border-[#D5EBEF] rounded-lg text-sm text-[#707070] hover:bg-white hover:text-[#3D3D3D] transition-all"
                  >
                  </input>
                </div>
                <div className="flex flex-col w-[95%] mb-4 text-[#000000] gap-1">
                  Email
                  <input 
                    type="email"
                    placeholder="Your Mail... "
                    className="w-full h-12 px-2 border-2 border-[#D5EBEF] rounded-lg text-sm text-[#707070] hover:bg-white hover:text-[#3D3D3D] transition-all"
                  >
                  </input>
                </div>
                <div className="flex flex-col w-[95%] mb-4 text-[#000000] gap-1">
                  Message
                  <input 
                    type="email"
                    placeholder="Your Mail... "
                    className="w-full h-48 px-2 border-2 border-[#D5EBEF] rounded-lg text-sm text-[#707070] hover:bg-white hover:text-[#3D3D3D] transition-all"
                  >
                  </input>
                </div>
              </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs
