
export const  Header = () =>{
    return (
        <div className={"flex justify-between items-center header bg- h-[60px] px-[16px] py-[8px] sticky top-0"}>
            <h1 className={"text-2xl text-emerald-950 antialiased"}>STOHB</h1>
            <div className={"flex justify-center items-center gap-4"} >
                <p className={"text-sm text-gray-500 antialiased"}>Terms</p>
                <p className={"text-sm text-gray-500  antialiased"}>Privacy Policy</p>
                <button type={"button"} className={"bg-emerald-700 text-white text-sm tracking-wider px-[16px] py-[8px]  rounded-full"}>Get Started</button>
            </div>

        </div>
    );
}