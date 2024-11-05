"use client"
import Image from "next/image";
export const Products = () => {
  const businesses_image_urls = [
    "/assets/icons/walmart.png",
    "/assets/icons/bug.png",
    "/assets/icons/subway.png",
    "/assets/icons/target.png",
    "/assets/icons/amazon.png",
    "/assets/icons/weboth.png",
  ];
  return (
    <div
      className={
        "flex flex-col gap-[32px] justify-center items-center bg-white mb-[100px] mt-[300px] h-auto"
      }
    >
      <span className="text-[20px] text-zinc-500">Trusted by these businesses</span>
      <div className="w-full max-w-2xl flex flex-wrap gap-[40px] justify-center items-center mx-auto">
        {businesses_image_urls.map((url) => (
          <Image
            className="w-max h-[40px]"
            width={100}
            height={100}
            src={url}
            alt="company logo"
          />
        ))}
      </div>
    </div>
  );
};
