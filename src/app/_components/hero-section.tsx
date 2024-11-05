import Image from "next/image";
// font-[family-name:var(--font-geist-sans)]
export const HeroSection = () => {
  return (
    <div className="flex relative w-full h-sreeen min-h-screen max-h-screen bg-primary flex-col">
      <div className="flex flex-col mt-[120px] my-auto m-auto gap-8 h-max justify-center items-center text-left px-[24px] lg:max-w-2xl overflow-hidden w-full">
        <div
          className={
            "flex flex-col justify-center items-center gap-4 text-center"
          }
        >
          <span
            className={
              "text-[#fff] text-[40px] leading-tight font-[00] capitalize  tracking-wide "
            }
          >
            Manage{" "}
            <span className={"text-light_green "}>payments & expenses</span> on
            the fly like never before
          </span>
          <p
            className={
              "text-[20px] text-[#fff] "
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
      </div>
      <Image
        src={"/assets/banner_1.jpg"}
        alt={"..."}
        width={600}
        height={600}
        // unoptimized
        className={
          "w-full absolute object-cover lg:rounded-[32px] overflow-hidden lg:max-w-4xl bottom-0 left-[50%] translate-y-[50%] -translate-x-[50%] aspect-video"
        }
      />
    </div>
  );
};
