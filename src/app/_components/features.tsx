import Image from "next/image"

export const Features = () => {
    return (
        <div className={"flex flex-col gap-4 bg-black py-[66px] px-[26px]"}>
            <div className={"flex flex-col justify-start items-start gap-8 md:w-[900px]"}>
                <h1 className={"text-[16px] md:text-4xl text-[#fff] font-[700] tracking-wide"}>Features</h1>
                <p className={"text-[16px] md:text-[18px] text-[#939393] tracking-wide"}>Stohb offers numerous amazing
                    features that elevate your business finances. We simplify accounting terminologies and concepts to
                    enhance understanding and provide clearer interpretations of numbers and insights.</p>
            </div>
            <hr className={"w-full border border-[#939393]"}/>
            <div className={"grid grid-cols-2"}>
                <div className={"flex flex-col justify-center items-start gap-8"}>
                    <span
                        className={"font-[100] text-[20px] text-[#5E5D5DFF] tracking-wider transition-transform duration-500 transform hover:translate-x-10 hover:text-emerald-700 "}>Effortless Bank Reconciliations
                    </span>
                    <span
                        className={"font-[100] text-[20px] text-[#5E5D5DFF] tracking-wider transition-transform duration-500 transform hover:translate-x-10 hover:text-emerald-700"}>Forward Invoices & Bills via Email
                    </span>
                    <span
                        className={"font-[100] text-[20px] text-[#5E5D5DFF] tracking-wider transition-transform duration-500 transform hover:translate-x-10 hover:text-emerald-700"}>Easy Customer Management
                    </span>
                    <span
                        className={"font-[100] text-[20px] text-[#5E5D5DFF] tracking-wider transition-transform duration-500 transform hover:translate-x-10 hover:text-emerald-700"}>Organize Customers Into Groups
                    </span>
                    <span
                        className={"font-[100] text-[20px] text-[#5E5D5DFF] tracking-wider transition-transform duration-500 transform hover:translate-x-10 hover:text-emerald-700"}>Insightful Financial Reporting
                    </span>
                    <span
                        className={"font-[100] text-[20px] text-[#5E5D5DFF] tracking-wider transition-transform duration-500 transform hover:translate-x-10 hover:text-emerald-700"}>Analize Debtors And Creditors
                    </span>
                </div>

                <div>
                    <Image
                        src="/" // Path to the image in the public folder
                        alt="My awesome image"
                        width={500} // Width of the image
                        height={300} // Height of the image
                    />
                </div>
            </div>
        </div>
    );
}