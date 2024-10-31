// components/Accordion.js
import { useState } from "react";

interface accordionInterface {
    title: string,
    content: string
}

function AccordionItem({ title, content }:accordionInterface) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full ">
      <button
        className="w-full text-left py-4 px-4 ma:px-6 text-[1px] md:text-lg font-[400] md:font-[600] flex justify-between items-center gap-2  text-[#002c15ff] "
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="flex justify-center items-center md:w-[30px] md:h-[30px] md:bg-[#c2f43bff] text-[#002c15ff]  rounded-full">
          {isOpen ? "-" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 py-4  text-[#002c15ff]">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

export default function Accordion() {
  const data = [
    {
      title: "How do I register for a stohb business account ?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nemo ratione quos consequuntur aperiam. Alias quam odio maiores consequatur voluptates vero iusto at non animi explicabo! Quaerat asperiores molestias quam eum sed, rem similique doloribus officiis architecto dolorem repudiandae nobis.",
    },
    {
      title: "Is my money safe and secure ?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nemo ratione quos consequuntur aperiam. Alias quam odio maiores consequatur voluptates vero iusto at non animi explicabo! Quaerat asperiores molestias quam eum sed, rem similique doloribus officiis architecto dolorem repudiandae nobis.",
    },
    {
      title: "How do I exchange currencies with paymint ?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nemo ratione quos consequuntur aperiam. Alias quam odio maiores consequatur voluptates vero iusto at non animi explicabo! Quaerat asperiores molestias quam eum sed, rem similique doloribus officiis architecto dolorem repudiandae nobis.",
    },
    {
      title: "How long do international transfers take ?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nemo ratione quos consequuntur aperiam. Alias quam odio maiores consequatur voluptates vero iusto at non animi explicabo! Quaerat asperiores molestias quam eum sed, rem similique doloribus officiis architecto dolorem repudiandae nobis.",
    },
    {
      title: "How do I add money to my stohb balance ?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nemo ratione quos consequuntur aperiam. Alias quam odio maiores consequatur voluptates vero iusto at non animi explicabo! Quaerat asperiores molestias quam eum sed, rem similique doloribus officiis architecto dolorem repudiandae nobis.",
    },
  ];

  return (
    <div className="w-full mx-auto rounded-lg overflow-hidden">
      {data.map((item, index) => (
        <div key={index} className="m-3 border rounded-lg">
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
          />
        </div>
      ))}
    </div>
  );
}
