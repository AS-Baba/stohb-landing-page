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
          <a
            href="#"
            className="flex justify-center items-center w-[40px] h-[40px] border border-light_green rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M17.99 1.596a28 28 0 0 0-3.037-.156C11.59 1.44 9.5 3.582 9.5 7.03v2.341H6.675a.5.5 0 0 0-.5.5v3.85a.5.5 0 0 0 .5.5H9.5v7.72a.5.5 0 0 0 .5.5h3.978a.5.5 0 0 0 .5-.5v-7.72h2.816a.5.5 0 0 0 .496-.435l.497-3.85a.5.5 0 0 0-.496-.565h-3.313V7.412c0-.97.195-1.375 1.408-1.375h2.039a.5.5 0 0 0 .5-.5V2.092a.5.5 0 0 0-.435-.496m-.565 3.44l-1.54.001c-2.157 0-2.407 1.356-2.407 2.375v2.46a.5.5 0 0 0 .499.5h3.246l-.369 2.85h-2.876a.5.5 0 0 0-.5.5v7.718H10.5v-7.718a.5.5 0 0 0-.5-.5H7.176v-2.85H10a.5.5 0 0 0 .5-.5V7.03c0-2.874 1.665-4.59 4.453-4.59c1.009 0 1.92.055 2.472.103z"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/stohblimited"
            className="flex justify-center items-center w-[40px] h-[40px] border border-light_green rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path
                  stroke="currentColor"
                  d="M3 11c0-3.771 0-5.657 1.172-6.828S7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172S21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13z"
                />
                <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor" />
                <circle cx="12" cy="12" r="3.5" stroke="currentColor" />
              </g>
            </svg>
          </a>
          <a
            href="#"
            className="flex justify-center items-center w-[40px] h-[40px] border border-light_green rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.5 9h-4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5M7 21H4V10h3zM18 9c-1.085 0-2.14.358-3 1.019V9.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V16a1.5 1.5 0 1 1 3 0v5.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V14a5.006 5.006 0 0 0-5-5m4 12h-3v-5a2.5 2.5 0 1 0-5 0v5h-3V10h3v1.203a.5.5 0 0 0 .89.313A3.983 3.983 0 0 1 22 14zM5.868 2.002A3 3 0 0 0 5.515 2a2.74 2.74 0 0 0-2.926 2.729a2.71 2.71 0 0 0 2.869 2.728h.028a2.734 2.734 0 1 0 .382-5.455M5.833 6.46q-.173.016-.347-.003h-.028A1.736 1.736 0 1 1 5.515 3a1.737 1.737 0 0 1 .318 3.46"
              />
            </svg>
          </a>
          <a
            href="https://x.com/stohblimited"
            className="flex justify-center items-center w-[40px] h-[40px] border border-light_green rounded-full "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 48 48"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.604 25.622L7.693 41.498M37.924 6.502L25.554 21.07M6.61 6.5l27.44 35h7.56l-27.439-35z"
              />
            </svg>
          </a>
        </div>

        <select
          name="select"
          id=""
          className="flex justify-center items-center  border border-[#002c15ff] text-[#111] rounded-full w-[200px] h-[40px] px-4"
        >
          <option value="1">English</option>
          <option value="1">Yuroba</option>
          <option value="1">Igala</option>
        </select>
      </div>
    </div>
  );
};
