import Image from "next/image";

export const Features = () => {
  const feature_list = [
    {
      title: "Streamlined Financial Management",
      description:
        "Track all your business finances in one place, from payments to financial insights.",
      bullet_points: [
        "Automated payment tracking",
        "Detailed financial reports",
        "Simplified fee management",
      ],
      image_url: "/assets/features/feature1.png",
    },
    {
      title: "Integrated Payment System",
      description:
        "Receive payments instantly with PayStack integration and manage a wallet for easy withdrawals.",
      bullet_points: [
        "Instant payment collection",
        "Up to 24-hour withdrawal processing",
        "Secure PayStack integration",
      ],
      image_url: "/assets/features/feature2.png",
    },
    {
      title: "User-Friendly Dashboard",
      description:
        "Gain control over every aspect of your business with a centralized, intuitive interface.",
      bullet_points: [
        "One-stop overview of operations",
        "Simplified navigation for all roles",
        "Personalized for various business needs",
      ],
      image_url: "/assets/features/feature3.png",
    },
    {
      title: "Effortless Expense Tracking",
      description:
        "Easily manage and categorize expenses to stay on top of operational costs.",
      bullet_points: [
        "Automated expense categorization",
        "Custom expense reports",
        "Instant insights on financial health",
      ],
      image_url: "/assets/features/feature4.png",
    },
    {
      title: "Comprehensive Analytics",
      description:
        "Access detailed analytics to make data-driven decisions and improve growth strategies.",
      bullet_points: [
        "Real-time insights",
        "Customizable reports",
        "Growth tracking and forecasting",
      ],
      image_url: "/assets/features/feature5.png",
    },
  ];

  return (
    <div
      className={
        "flex flex-col justify-center gap-[160px] items-center px-[24px] py-[100px] bg-[#f2f5f7ff]"
      }
    >
      {feature_list.map((feature, index) => (
        <div
          className={`flex gap-[80px] w-full lg:max-w-4xl ${
            (index + 1) % 2 == 0 ? "!flex-col-reverse lg:!flex-row" : "!flex-col-reverse lg:!flex-row-reverse"
          }`}
        >
          <div className="lg:flex-1">
            <div className={`max-w-full lg:max-w-md overflow-hidden lg:rounded-[16px] lg:shadow-lg `}>
              <Image
                className="w-full h-full"
                width={300}
                height={200}
                src={feature.image_url}
                alt=""
              />
            </div>
          </div>
          <div className={`lg:flex-1 ${
            (index + 1) % 2 == 0 ? "lg:text-right" : "lg:text-left"
          }`}>
            <div className={`max-w-md flex flex-col gap-[16px]  ${
            (index + 1) % 2 == 0 ? " lg:items-end" : "lg:text-left"
          }`}>
              <span className="text-[32px] text-primary leading-tight">
                {feature.title}
              </span>
              <p className="text-[16px] text-gray-600">{feature.description}</p>
              <div className="w-max flex flex-col gap-[16px] text-[14px]">
                {feature.bullet_points.map((bullet_point) => (
                  <span className="flex items-center justify-start gap-[8px]">
                    <span className="bg-light_green w-[24px] h-[24px] flex justify-center items-center p-1 rounded-full aspect-square">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.8"
                        >
                          <path d="m4 12.9l3.143 3.6L15 7.5" opacity="0.5" />
                          <path d="m20 7.563l-8.571 9L11 16" />
                        </g>
                      </svg>
                    </span>
                    {bullet_point}
                  </span>
                ))}
              </div>

              <button
                type={"button"}
                className={
                  "flex justify-center items-center gap-[8px] bg-light_green text-[#002c15ff] text-[14px] w-max px-[16px] mt-[16px] py-[8px] rounded-full"
                }
              >
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.8"
                    d="m9 5l6 7l-6 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
