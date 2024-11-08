import Image from "next/image";

export const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 py-[50px] px-[20px] md:px-[100px] h-auto  bg-[#ffffff]">
      <div className={" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-8 "}>
        <div>
          <Image
            src={"/assets/icons/logo.png"}
            width={100}
            height={100}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-sm text-[#002c15ff] font-[700] ">Products</h1>
          <p className="text-sm text-[#636564ff] font-[550]">For Personal</p>
          <p className="text-[#636564ff]">For Businesses</p>
          <p className="text-[#636564ff]">Multi-currency account</p>
          <p className="text-[#636564ff]">Stohb card</p>
          <p className="text-[#636564ff]">Country coverage</p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-sm text-[#002c15ff] font-[700] ">Company</h1>
          <p className="text-sm text-[#636564ff] font-[550]">About us</p>
          <p className="text-[#636564ff]">Customers stories</p>
          <p className="text-[#636564ff]">Press</p>
          <p className="text-[#636564ff]">
            Careers{" "}
            <span className="text-[10px] font-[600] text-[#002c15ff] bg-light_green rounded-full p-1">
              We&apos;re hiring
            </span>
          </p>
          <p className="text-[#636564ff]">Contact us</p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-sm text-[#002c15ff] font-[700] ">Resources</h1>
          <p className="text-sm text-[#636564ff] font-[550]">FAQ</p>
          <p className="text-[#636564ff]">Blog</p>
          <p className="text-[#636564ff]">Help center</p>
          <p className="text-[#636564ff]">Developers</p>
          <p className="text-[#636564ff]">Terms and privacy</p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-sm text-[#002c15ff] font-[700] ">Download App</h1>
          <Image
            src={"/assets/icons/googleplay.svg"}
            alt="..."
            width={200}
            height={200}
            unoptimized
          />
          <Image
            src={"/assets/icons/applestore.svg"}
            alt="..."
            width={200}
            height={200}
            unoptimized
          />
        </div>
      </div>
      <div className="flex max-sm:flex-col max-sm:gap-4 justify-between items-center w-full py-[15px] border-t">
        <p className="text-[#636564ff]">Copyright &copy; Stohb 2024</p>

        <div className="flex items-center justify-center gap-4">
            <div className="flex justify-center items-center w-[40px] h-[40px] border border-[#002c15ff] rounded-full">
                <Image
                src={"/assets/icons/social/facebook.svg"}
                alt="..."
                width={20}
                height={20}
                unoptimized
                          />
            </div>
            <div className="flex justify-center items-center w-[40px] h-[40px] border border-[#002c15ff] rounded-full">
                <Image
                src={"/assets/icons/social/instagram.svg"}
                alt="..."
                width={20}
                height={20}
                unoptimized
                          />
            </div>
            <div className="flex justify-center items-center w-[40px] h-[40px] border border-[#002c15ff] rounded-full">
                <Image
                src={"/assets/icons/social/linkden.svg"}
                alt="..."
                width={20}
                height={20}
                unoptimized
                          />
            </div>
            <div className="flex justify-center items-center w-[40px] h-[40px] border border-[#002c15ff] rounded-full">
                <Image
                src={"/assets/icons/social/x.svg"}
                alt="..."
                width={20}
                height={20}
                unoptimized
                          />
            </div>
        </div>
           
               <select name="select" id="" className="flex justify-center items-center  border border-[#002c15ff] text-[#111] rounded-full w-[200px] h-[40px] px-4">
                <option value="1">English</option>
                <option value="1">Yuroba</option>
                <option value="1">Igala</option>
               </select>
            
      </div>
    </div>
  );
};
