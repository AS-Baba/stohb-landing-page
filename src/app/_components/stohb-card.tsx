import Image from "next/image";
import React from "react";

export const StohbCard = () => {
  return (
    <div className="bg-primary pt-[0px] lg:pt-[100px] pb-[100px] flex w-full">
      <div className="max-w-4xl mx-auto w-full flex flex-col gap-[40px] lg:grid lg:grid-cols-2 ">
        <Image
          src={"/assets/banner_2.jpg"}
          alt={"..."}
          width={600}
          height={600}
          className="w-full h-full rounded-[16px] object-cover"
        />
        <div className="px-[24px] lg:px-0 w-full">
          <div className={`lg:max-w-md overflow-hidden w-full flex flex-col text-center lg:text-end gap-[16px]`}>
            <span className="text-[32px] leading-tight text-white">
              Empower Your Team with STOHB’s Financial Tools
            </span>
            <p className="text-[16px] text-zinc-200">
              Whether big or small, your team can manage funds seamlessly.
              STOHB’s financial toolkit gives you full control over spending and
              expenses with security and ease.
            </p>
            <div className="w-full flex items-center text-zinc-100 lg:items-end flex-col gap-[16px] text-[14px]">
              <span className="flex items-center justify-start gap-[8px] w-max">
                <span className="bg-light_green w-[24px] h-[24px] flex justify-center items-center p-1 rounded-full aspect-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.8"
                    >
                      <path d="m4 12.9l3.143 3.6L15 7.5" opacity="0.5" />
                      <path d="m20 7.563l-8.571 9L11 16" />
                    </g>
                  </svg>
                </span>
                Allocate and monitor funds with customizable access controls.
              </span>
              <span className="flex items-center justify-start gap-[8px] w-max">
                <span className="bg-light_green w-[24px] h-[24px] flex justify-center items-center p-1 rounded-full aspect-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.8"
                    >
                      <path d="m4 12.9l3.143 3.6L15 7.5" opacity="0.5" />
                      <path d="m20 7.563l-8.571 9L11 16" />
                    </g>
                  </svg>
                </span>
                Keep tabs on team spending with real-time insights.
              </span>
              <span className="flex items-center justify-start gap-[8px] w-max">
                <span className="bg-light_green w-[24px] h-[24px] flex justify-center items-center p-1 rounded-full aspect-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.8"
                    >
                      <path d="m4 12.9l3.143 3.6L15 7.5" opacity="0.5" />
                      <path d="m20 7.563l-8.571 9L11 16" />
                    </g>
                  </svg>
                </span>
                No minimum balance required to get started.
              </span>
            </div>

            <button
              type={"button"}
              className={
                "flex justify-center mx-auto lg:mx-0 lg:ml-auto items-center gap-[8px] bg-light_green text-[#002c15ff] text-[14px] w-max px-[16px] mt-[16px] py-[8px] rounded-full"
              }
            >
              Get Started
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
        </div>
      </div>
    </div>
  );
};
