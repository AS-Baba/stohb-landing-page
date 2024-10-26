export const Header = () => {
  return (
    <div
      className={
        "flex justify-between items-center header  h-[60px] px-[130px] py-[8px] sticky top-0 z-50" 
      }
    >
      <h1 className={"text-[14px] md:text-2xl text-[#c2f43bff]  font-[700] antialiased"}>
        <i>STOHB</i>
      </h1>
      <div className={"flex justify-center items-center gap-4"}>
        <p className={"max-sm:hidden text-sm text-white antialiased"}>
          Terms
        </p>
        <p className={"max-sm:hidden text-sm text-white  antialiased"}>
          Privacy Policy
        </p>
        <button
          type={"button"}
          className={
            "border border-[#c2f43bff] text-[#c2f43bff] text-[10px] md:text-sm tracking-wider  px-[8px] py-[4px]  md:px-[16px] md:py-[8px]  rounded-full"
          }
        >
          Login
        </button>
        <button
          type={"button"}
          className={
            "bg-[#c2f43bff] text-[#002c15ff] text-[10px] md:text-sm tracking-wider  px-[8px] py-[4px]  md:px-[16px] md:py-[8px]  rounded-full"
          }
        >
          Get Started
        </button>
      </div>
    </div>
  );
};
