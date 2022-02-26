import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useStatus } from "../context/statusContext";
import randomColor from "randomcolor";
import { SwatchesPicker } from 'react-color'

import {
  getMaxMintAmount,
  getTotalSupply,
  getNftPrice,
  mintNFT,
  getSaleState,
} from "../utils/interact";


class Hero extends React.Component {
  
  state = {
    displayColorPickerBackground: false,
    displayColorPickerText: false,
    fullNameData : "",
    titleData : "",
    otherData : "",
    backgroundColor : "",
    textColor : ""
  };

  handleClickBackground = () => {
    this.setState({ displayColorPickerBackground: !this.state.displayColorPickerBackground })
  };

  handleCloseBackground = () => {
    this.setState({ displayColorPickerBackground: false })
  };
  handleChangBackground = (color, event) => {
    this.setState({ backgroundColor: color.hex })
  }

  handleClickText = () => {
    this.setState({ displayColorPickerText: !this.state.displayColorPickerText })
  };

  handleCloseText = () => {
    this.setState({ displayColorPickerText: false })
  };
  handleChangeText = (color, event) => {
    this.setState({ textColor: color.hex })
  }
  render() {
    const popover = {
      position: 'absolute',
      zIndex: '99999',
    }
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }
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
                  <input type="text" onChange={event => this.setState({fullNameData:event.target.value})} id="rounded-full-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Name"/>
                </div>
              </div>

              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input type="text" onChange={event =>this.setState({titleData:event.target.value})} id="rounded-title" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Title"/>
                </div>
              </div>

              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input type="text" onChange={event =>this.setState({otherData:event.target.value})} id="rounded-other" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email/Company/Website/Linkedin/Twitter"/>
                </div>
              </div>
              <div className="flex pl-2 px-2 mb-2">
                <div className=" relative pl-2 px-2">
                  <button  onClick={ event => this.setState({backgroundColor:randomColor()})} className="py-2 px-4 bg-purple-400 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Random Background
                  </button>
                </div>
                <div className=" relative pl-2 px-2">
                  <button onClick={ this.handleClickBackground } className="py-2 px-4 bg-purple-400 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Choose Background
                  </button>
                  { this.state.displayColorPickerBackground ? <div style={ popover }>
          <div style={ cover } onClick={ this.handleCloseBackground }/>
          <SwatchesPicker onChange={ this.handleChangBackground } />
        </div> : null }
                </div>
              </div>  
              <div className="flex pl-2 px-2 mb-12">
                <div className=" relative pl-2 px-2 ">
                  <button  onClick={ event => this.setState({textColor:randomColor()})} className="py-2 px-4 bg-purple-400 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Random Font Color
                  </button>
                </div>
                <div className=" relative pl-2 px-2 ">
                  <button  onClick={ this.handleClickText} className="py-2 px-4 bg-purple-400 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Choose Font Color 
                  </button>
                  { this.state.displayColorPickerText ? <div style={ popover }>
          <div style={ cover } onClick={ this.handleCloseText }/>
          <SwatchesPicker onChange={ this.handleChangeText } />
        </div> : null }
                </div>
              </div> 

              <div className="flex w-full">
                <button  onClick={ event =>  {console.log(this.state)}} className="py-2 px-4 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Mint your NFT Business Card
                </button>
              </div>
           
          </div>
        </div>
        
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
        
        <svg width="750" height="500" xmlns="http://www.w3.org/2000/svg" version="1.2">
  
          <path fill={this.state.backgroundColor} d="M0 0h750v500H0z"/>
          <text fontFamily="Noto Sans JP" fontSize="50" fill={this.state.textColor} x="50%" y="30%" dominantBaseline="middle" textAnchor="middle">{this.state.fullNameData}</text>
          <text fontFamily="Noto Sans JP" fontSize="30" fill={this.state.textColor} x="50%" y="40%" dominantBaseline="middle" textAnchor="middle">{this.state.titleData}</text>
          <text fontFamily="Noto Sans JP" fontSize="30" fill={this.state.textColor} x="50%" y="70%" dominantBaseline="middle" textAnchor="middle">{this.state.otherData}</text>
        </svg>
        
        </div>

        </div>
      </div>
    </main>
  );
};
}
export default Hero;


