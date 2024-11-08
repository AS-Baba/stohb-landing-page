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
            " text-6xl  text-[#002c15ff] font-[500] tracking-wid"
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
              "flex justify-center items-center gap-[8px] bg-light_green text-[#002c15ff] text-[14px] px-[16px] py-[8px] rounded-full"
            }
          >
            Get Started Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.8"
                d="m9 5l6 7l-6 7"
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
