import Image from "next/image";

const CountryCoverage = () => {
  const regions = [
    "All region",
    "Asia",
    "Europe",
    "Americas",
    "Africa",
    "Oceania",
  ];
  const countries = [
    { name: "Nigeria", flag: "/assets/flag.png" },
    { name: "Belgium", flag: "/assets/flag.png" },
    { name: "Croatia", flag: "/assets/flag.png" },
    { name: "Czech Republic", flag: "/assets/flag.png" },
    { name: "Denmark", flag: "/assets/flag.png" },
    { name: "Finland", flag: "/assets/flag.png" },
    { name: "France", flag: "/assets/flag.png" },
    { name: "Germany", flag: "/assets/flag.png" },
  ];

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4 text-[#002c15ff]">
        Send money to 150+ countries with Stohb
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 space-x-4 mb-6">
        {regions.map((region, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              region === "Europe"
                ? "bg-green-200 text-green-700"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {region}
          </button>
        ))}
      </div>

      <div className="flex max-sm:flex-col w-full max-w-4xl">
        {/* Countries List */}
        <div className="flex-1">
          {countries.map((country, index) => (
            <div key={index} className="flex items-center mb-4">
              <Image
                src={country.flag}
                alt={country.name}
                width={24}
                height={24}
                className="mr-2"
              />
              <p className="text-lg text-[#002c15ff]">{country.name}</p>
            </div>
          ))}
          <p className="text-blue-600 mt-4 cursor-pointer">
            See full list of coverage →
          </p>
        </div>

        {/* Map */}
        <div className="w-full flex-1 flex justify-center items-center">
          {/* You can use a static image or map component */}
          <Image
            src="/assets/world-map.avif"
            alt="World Map"
            width={100}
            height={100}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CountryCoverage;
