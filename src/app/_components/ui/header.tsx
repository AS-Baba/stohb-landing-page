
export const  Header = () =>{
    return (
        <div className={"flex justify-between items-center header bg- h-[60px] px-[16px] py-[8px] sticky top-0"}>
            <h1 className={"text-[14px] md:text-2xl text-emerald-950 antialiased"}>STOHB</h1>
            <div className={"flex justify-center items-center gap-4"} >
                <p className={"max-sm:hidden text-sm text-gray-500 antialiased"}>Terms</p>
                <p className={"max-sm:hidden text-sm text-gray-500  antialiased"}>Privacy Policy</p>
                <button type={"button"} className={"bg-emerald-700 text-white text-[10px] md:text-sm tracking-wider  px-[8px] py-[4px]  md:px-[16px] md:py-[8px]  rounded-full"}>Get Started
                </button>
            </div>

        </div>
    );
}