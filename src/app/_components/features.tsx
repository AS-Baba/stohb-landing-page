export const Features = () => {
    return (
        <div className={"flex flex-col justify-center items-center gap-4 md:px-[126px]"}>
            <div className={"flex max-sm:flex-col justify-between items-start bg-[#141915] w-full p-[40px]"}>
                <div className={"flex flex-col justify-start items-start gap-8 w-full md:w-3/6"}>

                    <h1 className={"text-[16px] md:text-6xl text-[#fff] font-[500] tracking-wide"}>Features</h1>
                    <p className={"text-[16px] md:text-[18px] text-[#939393] tracking-wide"}>Stohb offers numerous
                        amazing
                        features that elevate your business finances. We simplify accounting terminologies and concepts
                        to
                        enhance understanding and provide clearer interpretations of numbers and insights.</p>
                </div>

                <div className={"flex flex-col justify-start items-start gap-4 md:gap-8 bg-[#f7f8fa] text-[#111] p-[16px]"}>
                    <span
                        className={"font-[100] text-[16px] md:text-[20px]  tracking-wider transition-transform duration-500 transform hover:translate-x-10 hover:text-emerald-700 "}>&#10003; Effortless Bank Reconciliations
                    </span>
                    <span
                        className={"font-[100] text-[16px] md:text-[20px]  tracking-wider transition-transform duration-500 transform hover:translate-x-10 hover:text-emerald-700"}>&#10003; Forward Invoices & Bills via Email
                    </span>
                    <span
                        className={"font-[100] text-[16px] md:text-[20px] tracking-wider transition-transform duration-500 transform hover:translate-x-10 hover:text-emerald-700"}>&#10003; Easy Customer Management
                    </span>
                    <span
                        className={"font-[100] text-[16px] md:text-[20px] tracking-wider transition-transform duration-500 transform hover:translate-x-10 hover:text-emerald-700"}>&#10003; Organize Customers Into Groups
                    </span>
                    <span
                        className={"font-[100] text-[16px] md:text-[20px] tracking-wider transition-transform duration-500 transform hover:translate-x-10 hover:text-emerald-700"}>&#10003; Insightful Financial Reporting
                    </span>
                    <span
                        className={"font-[100] text-[16px] md:text-[20px] tracking-wider transition-transform duration-500 transform hover:translate-x-10 hover:text-emerald-700"}>&#10003; Analize Debtors And Creditors
                    </span>
                </div>
            </div>
        </div>
    );
}