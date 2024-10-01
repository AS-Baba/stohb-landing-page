import Image from "next/image"

export const Features = () => {
    return (
        <div className={"flex flex-col gap-4 bg-black py-[66px] px-[26px]"}>
            <div className={"flex flex-col justify-start items-start gap-8 md:w-[900px]"}>
                <h1 className={"text-[16px] md:text-6xl text-[#fff] font-[500] tracking-wide"}>Features</h1>
                <p className={"text-[16px] md:text-[18px] text-[#939393] tracking-wide"}>Stohb offers numerous amazing
                    features that elevate your business finances. We simplify accounting terminologies and concepts to
                    enhance understanding and provide clearer interpretations of numbers and insights.</p>
            </div>
            <hr className={"w-full border-[#939393] border-[1px]"}/>
            <div className={"md:grid grid-cols-2"}>
                <div className={"flex flex-col justify-start items-start gap-4 md:gap-8"}>
                    <span
                        className={"font-[100] text-[16px] md:text-[20px] text-[#b3b1b1] tracking-wider transition-transform duration-500 transform hover:translate-x-10 hover:text-emerald-700 "}>Effortless Bank Reconciliations
                    </span>
                    <span
                        className={"font-[100] text-[16px] md:text-[20px] text-[#b3b1b1] tracking-wider transition-transform duration-500 transform hover:translate-x-10 hover:text-emerald-700"}>Forward Invoices & Bills via Email
                    </span>
                    <span
                        className={"font-[100] text-[16px] md:text-[20px] text-[#b3b1b1] tracking-wider transition-transform duration-500 transform hover:translate-x-10 hover:text-emerald-700"}>Easy Customer Management
                    </span>
                    <span
                        className={"font-[100] text-[16px] md:text-[20px] text-[#b3b1b1] tracking-wider transition-transform duration-500 transform hover:translate-x-10 hover:text-emerald-700"}>Organize Customers Into Groups
                    </span>
                    <span
                        className={"font-[100] text-[16px] md:text-[20px] text-[#b3b1b1] tracking-wider transition-transform duration-500 transform hover:translate-x-10 hover:text-emerald-700"}>Insightful Financial Reporting
                    </span>
                    <span
                        className={"font-[100] text-[16px] md:text-[20px] text-[#b3b1b1] tracking-wider transition-transform duration-500 transform hover:translate-x-10 hover:text-emerald-700"}>Analize Debtors And Creditors
                    </span>
                </div>

                <div className={"max-sm:hidden"}>
                    <Image
                        src="/assets/pocket.2fb39202d9aacace986c.jpeg" // Path to the image in the public folder
                        alt="My awesome image"
                        width={500} // Width of the image
                        height={300} // Height of the image
                    />
                </div>
            </div>
        </div>
    );
}