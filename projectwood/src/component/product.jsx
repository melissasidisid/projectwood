import React from "react"; 
import { useState } from "react";
  
export default function Product({img , title, date, desc}) {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
            <button
        type="button"
        onClick={() => setShowModal(true)}
      >      
      <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 m-6">
        <img src={img} alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover"/>
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <h3 class="z-10 mt-3 text-3xl font-bold text-white">{title}</h3>
        <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">{date}</div>
      </article> 
            </button>
            {showModal ? (
        <>
          <div className="m-8 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 rounded-lg shadow-lg bg-white" >
              <div className=" flex flex-col space-y-8 p-8">
                
                <div className="flex justify-between items-center  ">
                  <h3 className="text-3xl font-semibold">
                  {title}
                  </h3>   
                  <span className="">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  </span>             
                </div>
                
                <div className=" flex w-full  items-center justify-center" >
                <div className=" flex flex-col lg:flex-row space-y-4 lg:space-y-0">
                  <div className="flex w-full lg:w-1/2 ">
                    <img className="rounded-xl" src={img} />
                  </div>
                  <div className="flex items-center justify-center w-full lg:w-1/2"><p className=" px-4 text-blueGray-500 text-lg leading-relaxed">{desc}</p></div>
                </div>
                </div>

              </div>
          </div>
        </>
          ) : null}
        </>
    );
}
