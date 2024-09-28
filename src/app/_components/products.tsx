export const Products = () => {
    return (
        <div className={"flex flex-col gap-8 mt-4 mb-8  px-[20px]"}>
            <div className={"flex flex-col justify-start items-start gap-4 md:w-[500px]"}>
                <h1 className={"text-[16px] md:text-4xl text-[#111] font-[700]"}>Products</h1>
                <p className={"text-[16px] md:text-[18px] text-[#7E7E7EFF]"}>Stohb makes it very easy for businesses to gain
                    control of its cash flow, send invoices and manage
                    customers</p>
            </div>
            <hr />
            <div className={"flex max-sm:flex-col max-sm:justify-start  max-sm:items-start max-sm:gap-4 justify-between items-center"}>
                <div className={"flex  gap-2"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="red" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"/>
                    </svg>

                    <div>
                        <h1 className={"md:text-2xl text-[20px] text-[#111] font-[500] antialiased"}>Accounts payable</h1>
                        <p className={"text-sm text-gray-400"}>Manage expenses, and reconcile bills</p>
                    </div>

                </div>
                <div className={"flex  gap-2"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="green" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"/>
                    </svg>

                    <div>
                        <h1 className={"md:text-2xl text-[20px] text-[#111] font-[500] antialiased"}>Accounts receivable</h1>
                        <p className={"text-sm text-gray-400"}>Send invoices and get paid</p>
                    </div>

                </div>
                <div className={"flex  gap-2"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    </svg>

                    <div>
                        <h1 className={"md:text-2xl text-[20px] text-[#111] font-[500] antialiased"}>Manage customers</h1>
                        <p className={"text-sm text-gray-400"}>Seamless customer management and grouping </p>
                    </div>

                </div>
            </div>
        </div>

    );
}