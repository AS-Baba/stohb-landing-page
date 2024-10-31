"use client";
import React from "react";
import Accordion from "./ui/accordion";

export const HereToHelp = () => {
  return (
    <div className="flex max-sm:flex-col  justify-center items-center gap-4 w-full h-auto md:p-[100px] p-[20px] bg-[#ffff]">
      <div className="flex flex-col gap-8 md:w-2/6 h-auto">
        <p className="text-[#002c15ff]  underline decoration-[#c2f43bff] font-[700]">
          Here To Help
        </p>
        <h1
          className={
            "text-[16px] md: text-6xl  text-[#002c15ff] font-[500] tracking-wid"
          }
        >
          Common <br /> questions
        </h1>
        <p className="text-[#525252] font-[500]">
          Find the answer to frequently asked <br /> questions here
        </p>
        <p className="flex gap-2 text-[#525252] font-[500]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
            ></circle>
            <path
              d="M9.09 9a3 3 0 114.84 2.65 1.5 1.5 0 00-.82 1.07v1.28M12 17h.01"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          Need futher support?{" "}
        </p>
        <button
          type={"button"}
          className={
            "flex justify-center items-center gap-2 bg-[#c2f43bff] text-[#002c15ff] text-[10px] md:text-sm tracking-wider  font-[600] w-3/6 px-[8px] py-[4px] md:px-[8px] md:py-[16px]  rounded-full"
          }
        >
          Get Started Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="8"
            viewBox="0 0 18 8"
            fill="none"
            className="arrow"
          >
            <path
              d="M18 3.96945C18 4.06667 17.9653 4.15001 17.8958 4.21945L13.8958 7.90695C13.7847 8.00418 13.6632 8.02501 13.5313 7.96945C13.3993 7.90695 13.3333 7.80626 13.3333 7.66737V5.33404H0.333333C0.236111 5.33404 0.15625 5.30279 0.09375 5.24029C0.03125 5.17779 0 5.09792 0 5.0007V3.0007C0 2.90348 0.03125 2.82362 0.09375 2.76112C0.15625 2.69862 0.236111 2.66737 0.333333 2.66737H13.3333V0.334036C13.3333 0.188202 13.3993 0.0875079 13.5313 0.0319523C13.6632 -0.0236033 13.7847 -0.00624215 13.8958 0.0840356L17.8958 3.72987C17.9653 3.79931 18 3.87917 18 3.96945Z"
              fill="#002c15ff"
              fill-opacity="0.8"
            />
          </svg>
        </button>
      </div>
      {/* Accordion */}
      <div className="md:w-4/6 h-auto">
        <Accordion></Accordion>
      </div>
    </div>
  );
};
