import Image from "next/image";
export const Products = () => {
  return (
    <>
      <div
        className={
          "flex flex-col justify-center items-center bg-white h-[200px]"
        }
      ></div>
      <div className={"flex flex-col justify-center items-center bg-white"}>
        <div
          className={
            "md:w-5/6 flex flex-col justify-center  gap-8 mt-4 py-[66px] px-[26px]"
          }
        >
          <div
            className={"flex flex-col justify-center items-center gap-8 w-full "}
          >
            <p
              className={
                "text-[16px] md:text-[18px] text-[#6d6d6d] tracking-wide font-[700]"
              }
            >
              Trusted by thousands of businesses.
            </p>
          </div>

          <div
            className={
              " flex max-sm:flex-col max-sm:justify-start  max-sm:items-start max-sm:gap-4 justify-between items-center"
            }
          >
            <div
              className={
                "w-full flex  justify-center items-center gap-[136px] "
              }
            >
              <div className="flex gap-[136px]">
                  <div className="flex flex-col justify-center items-center gap-8">
                   <h1 className="text-[#111] text-2xl tracking-wide font-[600]">Uber</h1>
                    <div className="flex justify-center items-center gap-2">
                        <h1 className="text-2xl tracking-wide text-[#045ac6ff] font-[700]">Walmart</h1>
                        <Image
                          src={"/assets/icons/walmart.png"}
                          alt={"..."}
                          width={20}
                          height={20}
                          className={"max-sm:hidden max-sm:w-[50px] max-sm:h-[50px]"}
                        />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-8">
                        <Image
                          src={"/assets/icons/bug.png"}
                          alt={"..."}
                          width={50}
                          height={50}
                          className={"max-sm:hidden max-sm:w-[50px] max-sm:h-[50px]"}
                        />
                    <div className="flex justify-center items-center gap-2">
                        <h1 className="text-2xl tracking-wide text-[#045ac6ff] font-[700]">G<span className="text-red-600">o</span><span className="text-[#ffb912ff]">o</span>g<span className="text-emerald-700">l</span><span className="text-red-600">e</span></h1>
                    </div>
                  </div>
              </div>
              <div className="flex gap-[136px]">
                  <div className="flex flex-col justify-center items-center gap-8">
                    <div className="flex justify-center items-center gap-2">
                        <Image
                          src={"/assets/icons/subway.png"}
                          alt={"..."}
                          width={100}
                          height={100}
                          className={"max-sm:hidden max-sm:w-[50px] max-sm:h-[50px]"}
                        />
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <Image
                          src={"/assets/icons/target.png"}
                          alt={"..."}
                          width={100}
                          height={100}
                          className={"max-sm:hidden max-sm:w-[50px] max-sm:h-[50px]"}
                        />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-8">
                        <Image
                          src={"/assets/icons/amazon.png"}
                          alt={"..."}
                          width={100}
                          height={100}
                          className={"max-sm:hidden max-sm:w-[50px] max-sm:h-[50px]"}
                        />
                        <Image
                          src={"/assets/icons/weboth.png"}
                          alt={"..."}
                          width={100}
                          height={100}
                          className={"max-sm:hidden max-sm:w-[50px] max-sm:h-[50px]"}
                        />
                    
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
