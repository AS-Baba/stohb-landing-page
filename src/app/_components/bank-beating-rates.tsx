import React from "react";
import BarChart from "./ui/bar-chart";
import Image from "next/image";

export const BankReatingRates = () => {
  return (
    <div className="flex flex-col gap-4 w-full p-4 bg-[#002c15ff] ">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full  md:w-2/6 text-center py-[20px]">
          <h1
            className={
              "text-[16px] md:text-4xl  text-[#f2f5f7ff] font-[550] tracking-wid"
            }
          >
            Save money with our{" "}
            <span className="text-[#c2f43bff]"> bank beating rates </span>
          </h1>
        </div>
        <p className="text-[#f2f5f7ff] ">
          Keep more of you hard earned profits with our great exchange rates
        </p>
      </div>

      <div className="flex max-sm:flex-col justify-between items-start max-sm:gap-4 md:px-[100px]">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <BarChart></BarChart>
        </div>
        <div className="flex flex-col gap-4 md:w-2/6">
          <div className="flex  justify-start items-start gap-4">
            <div className="flex justify-center items-center bg-[#c2f43bff]  w-[30px] h-[20px] rounded-full p-1">
              <Image
                src="/assets/icons/check.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
            <div className=" gap-2">
              <h1 className="text-[#ffff] font-[600]">
                Save unnecessary bank charges
              </h1>
              <p className="text-[#ffffffff]">
                There are no account opening fees, monthly maintenance charges
                or minimum transaction requirements.
              </p>
            </div>
          </div>
          <div className="flex  justify-start items-start gap-4">
            <div className="flex justify-center items-center bg-[#c2f43bff]  w-[30px] h-[20px] rounded-full p-1">
              <Image
                src="/assets/icons/check.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
            <div className=" gap-2">
              <h1 className="text-[#ffff] font-[600]">
                Save unnecessary bank charges
              </h1>
              <p className="text-[#ffffffff]">
                There are no account opening fees, monthly maintenance charges
                or minimum transaction requirements.
              </p>
            </div>
          </div>
          <div className="flex  justify-start items-start gap-4">
            <div className="flex justify-center items-center bg-[#c2f43bff]  w-[30px] h-[20px] rounded-full p-1">
              <Image
                src="/assets/icons/check.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
            <div className=" gap-2">
              <h1 className="text-[#ffff] font-[600]">
                Save unnecessary bank charges
              </h1>
              <p className="text-[#ffffffff]">
                There are no account opening fees, monthly maintenance charges
                or minimum transaction requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
