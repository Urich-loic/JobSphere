import React from "react";

const startups = [
  {
    name: "Writesonic",
    employees: "51-200 employees",
    description: "Write anything. Publish anywhere",
    tags: ["B2B", "Early Stage", "Top Investors", "YC Funded"],
    jobs: 6,
    logo: "https://via.placeholder.com/40",
  },
  {
    name: "Miro Biotech",
    employees: "1-10 employees",
    description: "Worldwide Research-Grade Peptides",
    tags: ["Top 10% of responders", "Growing fast"],
    jobs: 3,
    logo: "https://via.placeholder.com/40",
  },
  {
    name: "Jerry.ai",
    employees: "51-200 employees",
    description:
      "Building the first AI-powered AllCar™ app to help people optimize all aspects of owning a car",
    tags: ["Growing fast"],
    jobs: 54,
    logo: "https://via.placeholder.com/40",
  },
  {
    name: "Gamtus",
    employees: "1-10 employees",
    description:
      "Expert IT Consulting Services for Your Business Success",
    tags: ["Growing fast"],
    jobs: 9,
    logo: "https://via.placeholder.com/40",
  },
];

const TrendingStartups = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      {/* Title */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
        Trending startups hiring now
      </h2>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {startups.map((startup, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border p-5 flex flex-col justify-between hover:shadow-md transition"
          >
            {/* Top */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={startup.logo}
                  alt={startup.name}
                  className="w-10 h-10 rounded-lg"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {startup.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {startup.employees}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                {startup.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {startup.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t">
              <span className="text-sm text-gray-700">
                {startup.jobs} open positions
              </span>
              <span className="text-gray-400 text-lg">→</span>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default TrendingStartups;