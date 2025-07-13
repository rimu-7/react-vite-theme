import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 ">
      {/* Retro grid background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0"></div>
      </div>

      <div className="relative z-10">
        {/* CRT screen effect container */}
        <div className="border-2  p-8 md:p-12 rounded-lg  bg-opacity-80 shadow-lg ">
          {/* Scanlines effect */}
          <div className="absolute inset-0 bg-scanlines opacity-10 pointer-events-none"></div>
          
          {/* Glowing text */}
          <h1 className="text-8xl font-bold mb-6  font-mono tracking-tighter">
            <span className="text-shadow-cyan">4</span>
            <span className="text-shadow-purple">0</span>
            <span className="text-shadow-cyan">4</span>
          </h1>
          
          {/* Error message with retro terminal style */}
          <div className="mb-8 font-mono ">
            <p className="text-xl mb-2">> ERROR: PAGE NOT FOUND</p>
            <p className="text-lg  opacity-80">> Location unavailable or moved</p>
          </div>
          
          {/* Glowing button */}
          <Link 
            to="/" 
            className="inline-block px-6 py-3 font-mono  transition-all duration-300 rounded-sm shadow-lg  "
          >
            > RETURN TO HOME
          </Link>
        </div>
      </div>

      {/* Style for scanlines and text shadows - add to your global CSS */}
      
    </div>
  );
};

export default NotFound;