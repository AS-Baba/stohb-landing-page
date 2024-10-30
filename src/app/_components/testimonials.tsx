"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function Testimonials() {
  const testimonialData = [
    {
        id: 1,
      image: "/assets/uber-ceo.png",
      cartText:
        "Uber optimizes the driver experience using Stohb as their main payment.",
    },
    {
        id:2,
      image: "/assets/uber-ceo.png",
      cartText:
        "Uber optimizes the driver experience using Stohb as their main payment.",
    },
    {
        id:3,
      image: "/assets/uber-ceo.png",
      cartText:
        "Uber optimizes the driver experience using Stohb as their main payment.",
    },
    {
        id:4,
      image: "/assets/uber-ceo.png",
      cartText:
        "Uber optimizes the driver experience using Stohb as their main payment.",
    },
    {
        id:5,
      image: "/assets/uber-ceo.png",
      cartText:
        "Uber optimizes the driver experience using Stohb as their main payment.",
    },
    {
        id:6,
      image: "/assets/uber-ceo.png",
      cartText:
        "Uber optimizes the driver experience using Stohb as their main payment.",
    },
    {
        id:7,
      image: "/assets/uber-ceo.png",
      cartText:
        "Uber optimizes the driver experience using Stohb as their main payment.",
    },
  ];
  const [customer] = useState(testimonialData);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoPlay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768, // For tablets and smaller screens
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
        },
      },
    ],
  };
  return (
    <div className="flex flex-col justify-center items-center w-full p-4 bg-[#f2f5f7ff]">
      <div className=" w-4/6 text-center py-[20px]">
        <p className="text-[#002c15ff]  underline decoration-[#c2f43bff]">
          Customers stories
        </p>
        <h1
          className={
            "text-[16px] md:text-4xl  text-[#002c15ff] font-[550] tracking-wid"
          }
        >
          Customers success is our success.
        </h1>
      </div>

      <div className="w-5/6 ">
        <Slider {...settings}>
          {customer.map((item) => {
            return (
              <div className="p-[16px]" key={item.id}>
                <div className="card bg-base-100 w-full md:w-76 bg-[#d5f876ff] rounded-lg  overflow-hidden">
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
                  <div className="flex flex-col gap-4 card-body p-2 bg-[#ffffffff]">
                    <p className="card-title text-[#111] font-[400] ">
                      {item.cartText}
                    </p>
                    <button
                      type={"button"}
                      className={
                        "flex justify-center items-center gap-1 bg-[#c2f43bff] text-[#002c15ff] text-[9px] tracking-wider w-[100px] font-[600] px-[8px] py-[4px] md:px-[8px] md:py-[4px]  rounded-full"
                      }
                    >
                      Read story
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
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
          })}
        </Slider>
      </div>
    </div>
  );
}
