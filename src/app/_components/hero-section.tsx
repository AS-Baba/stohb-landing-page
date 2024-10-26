import Image from "next/image";

export const HeroSection = () => {
  return (
    <>
      <div className="flex justify-center items-center max-sm:bg-[#ffffff] hero-section text-left  h-[200px] md:min-h-[350px]  font-[family-name:var(--font-geist-sans)]  px-[26px] md:px-[126px] gap-">
        <div className={"flex flex-col justify-start items-start gap-8"}>
          <div
            className={"flex flex-col gap-4 w-[150px] md:w-[600px] text-center mt-[200px]"}
          >
            <div className="flex justify-center items-center gap-4">
              <Image
                src={"/assets/icons/business.png"}
                alt={"..."}
                width={50}
                height={50}
                className={"max-sm:hidden max-sm:w-[50px] max-sm:h-[50px]"}
              />

              <p className="text-[#c2f43bff] font-[500] underline">Business</p>
            </div>
            <h1
              className={
                "text-[#fff] text-[12px] md:text-5xl font-[500] capitalize antialiased tracking-wide "
              }
            >
              Manage{" "}
              <span className={"text-[#c2f43bff] "}>
                {" "}
                payments & <br />
                expenses{" "}
              </span>{" "}
              on the fly like never before
            </h1>
            <p
              className={
                "md:text-[26px] text-[10px] text-[#fff] font-[220] tracking-wide antialiased"
              }
            >
              Stohb helps businesses manage and audit financial transactions,
              manage customers and in a very to adopt manner.
            </p>
          </div>
          <div className="flex justify-center items-center gap-4 w-full  ">
            <button
              type={"button"}
              className={
                "flex justify-center items-center gap-2 bg-[#c2f43bff] text-[#002c15ff] text-[10px] md:text-sm tracking-wider  font-[600] px-[8px] py-[4px] md:px-[16px] md:py-[16px]  rounded-full"
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

            <a
              type={"button"}
              className={
                "flex justify-center items-center gap-2 text-[#c2f43bff]  border   text-[10px] md:text-sm tracking-wider  font-[600] px-[8px] py-[4px] md:px-[16px] md:py-[16px]  rounded-full"
              }
            >
              Contact Sales
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="8"
                viewBox="0 0 18 8"
                fill="none"
              >
                <path
                  d="M18 3.96945C18 4.06667 17.9653 4.15001 17.8958 4.21945L13.8958 7.90695C13.7847 8.00418 13.6632 8.02501 13.5313 7.96945C13.3993 7.90695 13.3333 7.80626 13.3333 7.66737V5.33404H0.333333C0.236111 5.33404 0.15625 5.30279 0.09375 5.24029C0.03125 5.17779 0 5.09792 0 5.0007V3.0007C0 2.90348 0.03125 2.82362 0.09375 2.76112C0.15625 2.69862 0.236111 2.66737 0.333333 2.66737H13.3333V0.334036C13.3333 0.188202 13.3993 0.0875079 13.5313 0.0319523C13.6632 -0.0236033 13.7847 -0.00624215 13.8958 0.0840356L17.8958 3.72987C17.9653 3.79931 18 3.87917 18 3.96945Z"
                  fill="#c2f43bff"
                  fill-opacity="0.8"
                />
              </svg>
            </a>
          </div>
          <div className="w-full flex justify-center items-center">
            <p
              className={
                "md:text-[12px] text-[10px] text-[#fff] font-[400] tracking-wider antialiased"
              }
            >
              Talk to an account professional to get started,{" "}
              <span className="text-[#c2f43bff]">+23456789101</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center relative bottom-[-205px] z-0 ">
        <div className=" rounded-md overflow-hidden md:w-4/6">
          <Image
            src={"/assets/hero-image.png"}
            alt={"..."}
            width={700}
            height={700}
            className={"max-sm:hidden w-full"}
          />
        </div>
      </div>
    </>
  );
};
