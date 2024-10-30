"use client";
import Image from "next/image";

import React, { useState } from "react";

export const IndustrySolution = () => {
  const industriesData = [
    {
      image: "/assets/educa.jpg",
      cartTitle: "Education",
    },
    {
      image: "/assets/health.jpg",
      cartTitle: "Healthcare",
    },
    {
      image: "/assets/e-commerce.jpg",
      cartTitle: "E-commerce",
    },
    {
      image: "/assets/real-estate.jpg",
      cartTitle: "Real Estate",
    },
    {
      image: "/assets/manufacturing.jpg",
      cartTitle: "Manufacturing",
    },
    {
      image: "/assets/accountancy.jpg",
      cartTitle: "Accountancy",
    },
  ];
  const [industry] = useState(industriesData);

  return (
    <div
      className={
        "flex flex-col justify-center items-center gap-4 md:px-[126px] md:py-[50px] bg-[#f2f5f7ff]"
      }
    >
      <div className="w-4/6 text-center py-[20px]">
        <p className="text-[#002c15ff]  underline decoration-[#c2f43bff]">
          Industry solutions
        </p>
        <h1
          className={
            "text-[16px] md:text-4xl  text-[#002c15ff] font-[550] tracking-wid"
          }
        >
          As your business grows, so do our global payment solutions.
        </h1>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-sm:px-[20px]">
        {industry.map((item) => {
          return (
            <>
              <div className="card bg-base-100 w-full md:w-76 rounded-lg overflow-hidden">
                <figure>
                  <Image
                    src={item.image}
                    alt="education"
                    unoptimized
                    width={100}
                    height={100}
                    className="w-full"
                  />
                </figure>
                <div className="card-body py-2 ">
                  <h2 className="card-title text-[#111] font-[600] capitalize">
                    {item.cartTitle}
                  </h2>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
