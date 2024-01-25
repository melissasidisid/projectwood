import React from "react"

function footer() {
  return (
    <div>
      <div className="px-4 sm:px-10 py-5 divide-y-2 divide-red-500 bg-[#002545] bg-opacity-20 text-white">
        <div className=" grid grid-cols-2 space-y-4 sm:grid-cols-3 lg:grid-cols-4 text-xs sm:text-s lg:text-xl divide-x-2 divide-red-500">
          <div className="  flex items-center justify-center space-x-1 sm:space-x-4 ">
            {" "}
            <div className="w-5 h-5 md:w-10 md:h-10 flex">
              <img className="w-full h-full" src="/footer/mail.svg" />
            </div>{" "}
            <div className="flex">woods@gmail.com</div>
          </div>
          <div className="  flex items-center justify-center space-x-1 sm:space-x-4 ">
            {" "}
            <div className="w-5 h-5 md:w-10 md:h-10 flex">
              <img className="w-full h-full" src="/footer/location.svg" />
            </div>{" "}
            <p className="flex"> Algiers, Algeria</p>
          </div>
          <div className="  flex items-center justify-center space-x-1 sm:space-x-4 ">
            {" "}
            <div className="w-5 h-5 md:w-10 md:h-10 flex">
              <img className="w-full h-full" src="/footer/phone.svg" />
            </div>{" "}
            <p className="flex"></p>
          </div>
          <div className="  flex items-center justify-center space-x-1 sm:space-x-4 ">
            {" "}
            <div className="w-5 h-5 md:w-10 md:h-10 flex">
              <img className="w-full h-full" src="/footer/calendar.svg" />
            </div>{" "}
            <div className="flex">Mon - Sat : 8:00 - 20:00</div>
          </div>
        </div>

        <div className=" p-4 border-x-2 border-red-500 flex items-center justify-center space-x-10">
          <div className="w-6 h-6 md:w-10 md:h-10 flex ">
            <img className="w-full h-full" src="/footer/facebook.svg" />
          </div>
          <div className="w-6 h-6 md:w-10 md:h-10 flex ">
            <img className="w-full h-full" src="/footer/linkedin.svg" />
          </div>
          <div className="w-6 h-6 md:w-10 md:h-10 flex ">
            <img className="w-full h-full" src="/footer/youtube.svg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer
