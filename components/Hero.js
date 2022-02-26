import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useStatus } from "../context/statusContext";
import randomColor from "randomcolor";
import {
  getMaxMintAmount,
  getTotalSupply,
  getNftPrice,
  mintNFT,
  getSaleState,
} from "../utils/interact";

  
const Hero = () => {
  
  const [fullNameData, setFullName] = useState('');
  const [titleData, setTitle] = useState('');
  const [otherData, setData] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [textColor, setTextColor] = useState('');

  return (
    <main id="main" className="h-screen py-16 bg-pattern">
      <div className="container max-w-6xl mx-auto flex flex-col items-center pt-4">
        <div className="grid grid-cols-2">
          <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
            <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
              Do you want one?
            </div>
            <div className="mt-8">
  
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input type="text" onChange={event => setFullName(event.target.value)} id="rounded-full-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Name"/>
                </div>
              </div>

              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input type="text" onChange={event => setTitle(event.target.value)} id="rounded-title" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Title"/>
                </div>
              </div>

              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input type="text" onChange={event => setData(event.target.value)} id="rounded-other" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email/Company/Website/Linkedin/Twitter"/>
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <button  onClick={ event => setBackgroundColor(randomColor())} className="py-2 px-4  bg-purple-400 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Background Color
                  </button>
                </div>
              </div>  
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <button  onClick={ event => setTextColor(randomColor())} className="py-2 px-4  bg-purple-400 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Text Color
                  </button>
                </div>
              </div> 

              <div className="flex w-full">
                <button  onClick={ event => setBackgroundColor(randomColor())} className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Mint your NFT Business Card
                </button>
              </div>
           
          </div>
        </div>
        
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
        
        <svg width="750" height="500" xmlns="http://www.w3.org/2000/svg" version="1.2">
  
          <path fill={backgroundColor} d="M0 0h750v500H0z"/>
          <text fontFamily="Noto Sans JP" fontSize="50" fill={textColor} x="50%" y="40%" dominantBaseline="middle" textAnchor="middle">{fullNameData}</text>
          <text fontFamily="Noto Sans JP" fontSize="30" fill={textColor} x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">{titleData}</text>
          <text fontFamily="Noto Sans JP" fontSize="30" fill={textColor} x="50%" y="70%" dominantBaseline="middle" textAnchor="middle">{otherData}</text>
        </svg>
        
        </div>

        </div>
      </div>
    </main>
  );
};

export default Hero;


