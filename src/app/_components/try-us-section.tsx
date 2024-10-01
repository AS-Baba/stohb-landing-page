export const TryUs = () => {
    return (
        <div className={"flex flex-col gap-[78px] mt-4 py-[66px] px-[26px]"}>
            <div className={" flex  max-sm:flex-col max-sm:items-end max-sm:gap-4 justify-between items-center  w-full"}>
                <div className={"md:w-[700px] flex flex-col gap-8"}>
                    <h1 className={"text-4xl md:text-5xl text-[#111] font-[500] tracking-wide"}>Try Stohb now</h1>
                    <p className={"text-[16px] md:text-[18px] text-[#939393] tracking-wide"}>We are looking at patnering with businesses who are ready to level up their business operation with a seamless finance management</p>
                </div>
                <button type={"button"}
                        className={"bg-emerald-700 text-white text-sm tracking-wider px-[16px] py-[8px]  rounded-full"}>Get
                    Started
                </button>
            </div>

            <div className={"md:w-[700px] flex flex-col gap-8"}>
                <h1 className={"text-4xl md:text-5xl text-[#111] font-[500] tracking-wide"}>Still not sure ?</h1>
                <p className={"text-[16px] md:text-[18px] text-[#939393] tracking-wide"}>Listen to what our early amazing users have to say about us. This should change your mind.</p>
            </div>


            <div className={"flex flex-col gap-8"}>
                <hr/>
                <div className={"flex max-sm:flex-col justify-center items-center gap-4 "}>
                    <div
                        className={"md:hidden try-stohb-img-mobile flex flex-col justify-between items-start p-5 rounded-3xl max-sm:w-full"}>
                        <div className={" bg-emerald-200 px-5 py-2 text-emerald-900 rounded-full "}>Education</div>

                        <div className={" flex flex-col gap-2"}>
                            <p className={"text-lg font-[540] text-emerald-200 leading-relaxed"}>&quot;Stohb has been
                                the
                                easiest
                                way to optimize our cashflow. The team is very responsive and hands on!&quot;</p>

                            <p className={"text-emerald-500 text-lg"}>CEO Royal Schools</p>
                        </div>
                    </div>
                    <div
                        className={"max-sm:hidden try-stohb-img  rounded-3xl max-sm:w-full"}>
                    </div>
                    <div
                        className={"max-sm:hidden flex flex-col justify-between items-start rounded-3xl md:w-[50%] md:h-[500px] border p-[20px]"}>
                        <div className={" bg-emerald-200 px-5 py-2 text-emerald-900 rounded-full "}>Education</div>

                        <div className={"flex flex-col gap-4"}>
                            <p className={"text-3xl font-[540] text-emerald-700 leading-snug"}>&quot;Stohb has been the
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