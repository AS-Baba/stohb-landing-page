import Image from "next/image";

export const HeroSection = () =>{
    return (
        <>
            <div
                className="flex justify-between items-center max-sm:bg-[#ffffff] hero-section text-left  h-[200px] md:min-h-[500px]  font-[family-name:var(--font-geist-sans)]  px-[26px] md:px-[126px]  ">
                <div className={"flex flex-col justify-start items-start gap-4 "}>
                    <div className={"flex flex-col gap-4 w-[150px] md:w-[600px] "}>
                        <h1 className={"text-[#111] text-[12px] md:text-5xl font-[500] capitalize antialiased"}>Manage <span className={"text-emerald-900 "}> payment
                            & <br/>
                            expenses </span> on the fly like never before</h1>
                        <p className={"md:text-[26px] text-[10px] text-[#111]  antialiased"}>Stohb helps businesses manage and audit financial transactions, manage customers and in a very to adopt manner.</p>
                    </div>
                    <button type={"button"}
                            className={"bg-emerald-700 text-white text-[10px] md:text-sm tracking-wider px-[8px] py-[4px] md:px-[16px] md:py-[8px]  rounded-full"}>Get
                        Started Now
                    </button>
                </div>
                <Image
                    src={"/assets/Hero-image.png"}
                    alt={"..."}
                    width={300}
                    height={300}
                    className={"max-sm:hidden max-sm:w-[100px] max-sm:h-[150px]"} />
            </div>
        </>
    );
}