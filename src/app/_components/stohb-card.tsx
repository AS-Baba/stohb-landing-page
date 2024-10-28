import Image from "next/image";
import React from "react";

export const StohbCard = () => {
  return (
    <div
      className={
        "flex flex-col justify-center items-center gap-4 md:px-[126px] bg-[#002c15ff]"
      }
    >
      <div
        className={
          "flex max-sm:flex-col justify-between items-start w-full p-[40px]"
        }
      >
        <div
          className={
            "choose-how-to-pa flex justify-start items-start gap-4 md:gap-8  h-[550px]   rounded-xl overflow-hidden  "
          }
        >
          <Image
            src="/assets/icons/cards.png"
            alt=""
            width={"100"}
            height={"100"}
            quality={100}
            unoptimized
            className="w-[450px] h-full "
          />
        </div>
        <div className="relative right-[300px]">
          <Image
            src="/assets/icons/user.png"
            alt=""
            width={"50"}
            height={"50"}
            quality={100}
            unoptimized
            className=" h-full "
          />
        </div>
        <div className="relative right-[220px] top-[100px]">
          <Image
            src="/assets/icons/user.jpg"
            alt=""
            width={"50"}
            height={"50"}
            quality={100}
            unoptimized
            className=" h-full rounded-full "
          />
        </div>
        <div className="relative left-[-500px] top-[350px]">
          <Image
            src="/assets/icons/testimonial-1.jpg"
            alt=""
            width={"50"}
            height={"50"}
            quality={100}
            unoptimized
            className=" h-full rounded-full "
          />
        </div>
        <div
          className={
            "flex flex-col justify-start items-start gap-8 w-full md:w-[400px]"
          }
        >
          <h1
            className={
              "text-[16px] md:text-5xl  text-[#fff] font-[500] tracking-wide"
            }
          >
            Empower team with stohb business cards.
          </h1>
          <p
            className={
              "text-[16px] md:text-[18px] text-[#e7e7e7] tracking-wide"
            }
          >
            Big or small your team is, stohb cards have got you covered. Spend
            securely with physical and virtual debit cards that you control.
          </p>

          <div className="flex flex-col justify-start items-start gap-4">
            <div className="flex justify-center items-center gap-4">
              <div className="flex justify-center items-center bg-[#c2f43bff]  w-[20px] h-[20px] rounded-full p-1">
                <img src="/assets/icons/check.png" alt="" />
              </div>
              <p className="text-[#e7e7e7]">Globally Accepted.</p>
            </div>
            <div className="flex justify-center items-center gap-4">
              <div className="flex justify-center items-center bg-[#c2f43bff] w-[20px] h-[20px] rounded-full p-1">
                <img src="/assets/icons/check.png" alt="" />
              </div>
              <p className="text-[#e7e7e7]">Track expenses.</p>
            </div>
            <div className="flex justify-center items-center gap-4">
              <div className="flex justify-center items-center bg-[#c2f43bff] w-[20px] h-[20px] rounded-full p-1">
                <img src="/assets/icons/check.png" alt="" />
              </div>
              <p className="text-[#e7e7e7]">No minimum balance.</p>
            </div>
          </div>
          <button
            type={"button"}
            className={
              "flex justify-center items-center gap-2 bg-[#c2f43bff] text-[#002c15ff] text-[10px] md:text-sm tracking-wider  font-[600] px-[8px] py-[4px] md:px-[20px] md:py-[12px]  rounded-full"
            }
          >
            Learn more
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
      </div>
    </div>
  );
};