export const HeroSection = () =>{
    return (
        <>
            <div
                className="hero-section text-left flex justify-items-center items-center h-[400px] md:min-h-[500px]  font-[family-name:var(--font-geist-sans)]  px-[56px]  ">
                <div className={"flex flex-col justify-start items-start gap-4 "}>
                    <div className={"flex flex-col gap-4 md:w-[600px] "}>
                        <h1 className={"text-[#ffffff] text-2xl md:text-5xl font-[700] capitalize antialiased"}>Manage payment
                            & <br/>
                            expenses on the fly like never before</h1>
                        <p className={"md:text-[26px] text-[16px] text-[#DADADAFF]  antialiased"}>Stohb helps businesses manage and audit financial transactions, manage customers and in a very to adopt manner.</p>
                    </div>
                    <button type={"button"}
                            className={"bg-emerald-700 text-white text-sm tracking-wider px-[16px] py-[8px]  rounded-full"}>Get
                        Started
                    </button>
                </div>

            </div>
        </>
    );
}