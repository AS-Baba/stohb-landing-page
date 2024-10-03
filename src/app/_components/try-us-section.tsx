export const TryUs = () => {
    return (
        <div className={"flex flex-col gap-[78px] mt-4 py-[66px]  md:px-[126px]"}>
            <div className={" flex  max-sm:flex-col max-sm:items-end max-sm:gap-4 justify-between items-center  w-full px-[26px]"}>
                <div className={"md:w-[700px] flex flex-col gap-8 "}>
                    <h1 className={"text-4xl md:text-5xl text-[#111] font-[500] tracking-wide"}>Try Stohb now</h1>
                    <p className={"text-[16px] md:text-[18px] text-[#939393] tracking-wide"}>We are looking at patnering with businesses who are ready to level up their business operation with a seamless finance management</p>
                </div>
                <button type={"button"}
                        className={"bg-emerald-700 text-white text-sm tracking-wider px-[16px] py-[8px]  rounded-full"}>Get
                    Started
                </button>
            </div>

            <div className={"flex flex-col gap-8 bg-[#141915]"}>

                <div className={"flex max-sm:flex-col justify-between items-start gap-4 "}>
                    <div className={"md:w-[700px] flex flex-col gap-8 p-[26px]"}>
                        <h1 className={"text-4xl md:text-5xl text-[#fff] font-[500] tracking-wide"}>Still not sure
                            ?</h1>
                        <p className={"text-[16px] md:text-[18px] text-[#939393] tracking-wide"}>Listen to what our
                            early amazing users have to say about us. This should change your mind.</p>
                    </div>
                    <div
                        className={"try-stohb-img-mobile flex flex-col justify-between items-start p-5  max-sm:w-full"}>
                        <div className={" bg-emerald-200 px-5 py-2 text-emerald-900 rounded-full "}>Education</div>

                        <div className={"flex flex-col gap-4"}>
                            <p className={"text-[20px] md:text-3xl font-[540] text-emerald-100 leading-snug"}>&quot;Stohb has been the
                                easiest
                                way to optimize our cashflow. The team is very responsive and hands on!&quot;</p>
                            <p className={"text-emerald-500 text-lg"}>CEO Royal Schools</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}