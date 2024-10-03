export const Products = () => {
    return (
        <div className={"flex flex-col justify-center items-center"}>
            <div className={"md:w-5/6 flex flex-col justify-center  gap-8 mt-4 py-[66px] px-[26px]"}>
                {/*<div className={"flex flex-col justify-start items-start gap-8 md:w-[700px]"}>*/}
                {/*    <h1 className={"text-[16px] md:text-6xl text-[#111] font-[500] tracking-wide"}>Products</h1>*/}
                {/*    <p className={"text-[16px] md:text-[18px] text-[#939393] tracking-wide"}>Stohb makes it very easy for businesses to gain*/}
                {/*        control of its cash flow, send invoices and manage*/}
                {/*        customers</p>*/}
                {/*</div>*/}

                <div
                    className={" flex max-sm:flex-col max-sm:justify-start  max-sm:items-start max-sm:gap-4 justify-between items-center"}>
                    <div
                        className={"max-sm:w-full flex flex-col justify-center items-center gap-2 border-top py-[16px]"}>
                        <h1 className={"md:text-2xl text-[20px] text-[#111] font-[500] antialiased"}>Accounts
                            payable</h1>
                        <p className={"text-sm text-gray-400"}>Manage expenses, and reconcile bills</p>
                    </div>
                    <div
                        className={"max-sm:w-full flex flex-col justify-center items-center gap-2 border-top py-[16px]"}>
                        <h1 className={"md:text-2xl text-[20px] text-[#111] font-[500] antialiased"}>Accounts
                            receivable</h1>
                        <p className={"text-sm text-gray-400"}>Send invoices and get paid</p>
                    </div>
                    <div
                        className={"max-sm:w-full flex flex-col justify-center items-center gap-2 border-top py-[16px]"}>
                        <h1 className={"md:text-2xl text-[20px] text-[#111] font-[500] antialiased"}>Manage
                            customers</h1>
                        <p className={"text-sm text-gray-400"}>Seamless customer management and grouping </p>
                    </div>
                </div>
            </div>
        </div>
    );
}