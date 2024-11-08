import React from "react";
import Image from "next/image";

export const BankReatingRates = () => {
  const tools = [
    {
      title: "Avoid Unnecessary Financial Overheads",
      discription:
        "With Stohb, enjoy transparent expense management without hidden fees. No account setup charges, no monthly maintenance fees, and no minimum transaction limits.",
    },
    {
      title: "Optimize Your Financial Management",
      discription:
        "Track and manage expenses seamlessly without any extra costs. Stohb empowers you to focus on saving and efficiency rather than worrying about additional charges.",
    },
    {
      title: "Simplify Payments and Expenses",
      discription:
        "Keep more of your hard-earned profits with Stohb’s fee-free platform. No unnecessary charges, just efficient financial control tailored to your needs.",
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-full p-4 bg-[#002c15ff] ">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full   text-center py-[20px]">
          <h1 className={"text-[32px] leading-tight text-white"}>
            Manage expenses effortlessly with{" "}
            <span className="text-light_green">Stohb’s advanced tools</span>
          </h1>
        </div>
        <p className="text-[#f2f5f7ff]">
          Take control of your finances with seamless payment tracking and
          insights
        </p>
      </div>

      <div className="flex max-sm:flex-col justify-between items-start max-sm:gap-4 md:px-[100px]">
        <div className="w-full lg:w-1/2 rounded-md overflow-hidden">
            <Image src={'/assets/happy-users.jpg'} alt="Happy users" width={700} height={700}/>
        </div>
        <div className="flex flex-col gap-4 md:w-2/6">
         {tools.map((item, index) => {
          return (
             <div key={index} className="flex  justify-start items-start gap-4">
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
            <div className=" gap-2">
              <h1 className="text-[#ffff] font-[600]">
                {item.title}
              </h1>
              <p className="text-[#ffffffff] text-sm">
               {item.discription}
              </p>
            </div>
          </div>
          )
         })}
        </div>
      </div>
    </div>
  );
};
