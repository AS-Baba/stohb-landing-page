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
        className="w-full text-left py-4 px-4 ma:px-6 text-[16px] md:text-lg font-[600] md:font-[600] flex justify-between items-center gap-2  text-[#002c15ff] "
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
    title: "How do I register for a Stohb business account?",
    content:
      "To register for a Stohb business account, visit our website and click on 'Sign Up'. Follow the instructions to fill in your business information. After verification, your account will be set up, and you can start managing your expenses and payments with ease.",
  },
  {
    title: "Is my money safe and secure with Stohb?",
    content:
      "Yes, at Stohb, we prioritize the security of your funds. Our platform is built with advanced security protocols to ensure that your money and data are safe. We also comply with industry standards and regulations for financial security.",
  },
  {
    title: "How do I manage and track expenses with Stohb?",
    content:
      "Stohb makes it simple to manage and track your expenses. Just log in to your dashboard, where you can view, categorize, and monitor all your transactions in real-time, helping you maintain control over your business finances.",
  },
  
  {
    title: "How can I add money to my Stohb balance?",
    content:
      "You can add money to your Stohb balance by linking your bank account or card to your Stohb account. Once linked, simply select the 'Add Funds' option, choose your preferred method, and complete the transfer to top up your balance.",
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
