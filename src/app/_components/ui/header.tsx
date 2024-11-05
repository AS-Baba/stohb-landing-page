import Image from "next/image";

export const Header = () => {
  return (
    <div
      className={
        "flex justify-between bg-primary items-center w-full h-[60px] pr-[20px] md:px-[130px] py-[8px] fixed top-0 z-50"
      }
    >
      <div className=" flex justify-start items-center">
        <Image
          src="/assets/logo white.svg"
          alt="Stohb Logo"
          width={100}
          height={100}
        />
      </div>

      <div className={"flex justify-center items-center gap-4"}>
        <p className={"max-sm:hidden text-[14px] text-zinc-200"}>Terms</p>
        <p className={"max-sm:hidden text-[14px] text-zinc-200"}>
          Privacy Policy
        </p>
        <button
          type={"button"}
          className={
            "flex justify-center items-center gap-[8px] bg-light_green text-[#002c15ff] text-[14px] px-[16px] py-[8px] rounded-full"
          }
        >
          Get Started
        </button>
      </div>
    </div>
  );
};
