import React from "react";

const Farmweb = () => {
  const cards = [
    {
      id: 1,
      link: "https://krishidss.da.gov.in/krishi-dss/",
      imgSrc: "/public/images/dss.png",
      altText: "kisan-call-center",
      text: "KRISHI DSS",
      description:
        "A comprehensive Decision Support System providing real-time data and advisories for effective farm management.",
    },
    {
      id: 2,
      link: "https://gces.dac.gov.in/#/",
      imgSrc: "/public/images/dgces_logo.png",
      altText: "DGCES",
      text: "DGCES",
      description:
        "A digital platform offering crop estimation and agricultural statistics for informed decision-making.",
    },
    {
      id: 3,
      link: "https://krishimapper.dac.gov.in/",
      imgSrc: "/public/images/krishimapper_logo.png",
      altText: "KRISHI MAPPER",
      text: "KRISHI MAPPER",
      description:
        "A GIS-based tool for mapping agricultural data to enhance planning and resource allocation.",
    },
    {
      id: 4,
      link: "https://upag.gov.in/",
      imgSrc: "/public/images/upag.png",
      altText: "UPAG",
      text: "UPAG",
      description:
        "A unified portal aimed at streamlining agricultural governance and delivering services to stakeholders.",
    },
    {
      id: 5,
      link: "https://seedtrace.gov.in/ms014/",
      imgSrc: "/public/images/saathi.png",
      altText: "SATHI",
      text: "SATHI",
      description:
        "A seed traceability platform ensuring transparency and quality assurance in seed distribution.",
    },
    {
      id: 6,
      link: "https://pmkisan.gov.in/",
      imgSrc: "/public/images/pm-kisan-yojana-logo.png",
      altText: "Samman Nidhi",
      text: "PM-Kisan Samman Nidhi",
      description:
        "A government initiative providing financial assistance directly to farmers for agricultural investments.",
    },
    {
      id: 7,
      link: "https://pmfby.gov.in/",
      imgSrc: "/public/images/Pradhanmantri_phasal-Preview.png",
      altText: "PMFBY",
      text: "Pradhan Mantri Fasal Bima Yojana",
      description:
        "A crop insurance scheme protecting farmers against losses caused by natural calamities or pests.",
    },
    {
      id: 8,
      link: "https://www.nfsm.gov.in/",
      imgSrc: "/public/images/nfsm.png",
      altText: "NFSM",
      text: "National Food Security Mission",
      description:
        "An initiative to increase food production and ensure the availability of essential grains in the nation.",
    },
    {
      id: 9,
      link: "https://pdmc.da.gov.in/",
      imgSrc: "/public/images/pdmc.png",
      altText: "PDMC",
      text: "Per Drop More Crop",
      description:
        "A micro-irrigation program aimed at improving water efficiency in agriculture under the PMKSY scheme.",
    },
    {
      id: 10,
      link: "https://nhb.gov.in/Default.aspx?enc=3ZOO8K5CzcdC/Yq6HcdIxJhqz7e6GQcTK1J92dLzA2o=",
      imgSrc: "/public/images/nhb.png",
      altText: "NHB Inspection",
      text: "NHB Inspection",
      description:
        "A platform by the National Horticulture Board to support inspections, subsidies, and horticulture projects.",
    },
    {
      id: 11,
      link: "https://www.nabard.org/content1.aspx?id=702&catid=23&mid=23",
      imgSrc: "/public/images/ami.png",
      altText: "Agriculture Marketing Infrastructure",
      text: "Agriculture Marketing Infrastructure",
      description:
        "A NABARD initiative to improve marketing infrastructure for agricultural produce, reducing post-harvest losses.",
    },
    {
      id: 12,
      link: "https://seednet.gov.in/",
      imgSrc: "/public/images/seed.png",
      altText: "SEEDNET",
      text: "SEEDNET",
      description:
        "An information-sharing platform for seed availability, certification, and quality standards across the country.",
    },
    {
      id: 13,
      link: "https://www.agriclinics.net/",
      imgSrc: "/public/images/acabc.png",
      altText: "ACABC",
      text: "ACABC",
      description:
        "An initiative to train and support agri-entrepreneurs by establishing Agri-Clinics and Agri-Business Centers.",
    },
    {
      id: 14,
      link: "https://naturalfarming.dac.gov.in/",
      imgSrc: "/public/images/nf.png",
      altText: "Natural Farming ",
      text: "Natural Farming",
      description:
        "A platform promoting sustainable, eco-friendly farming practices to enhance soil health and productivity.",
    },
    {
      id: 15,
      link: "https://nbm.da.gov.in/",
      imgSrc: "/public/images/bamboo.png",
      altText: "National Bamboo Mission",
      text: "National Bamboo Mission",
      description:
        "An initiative to promote the growth of bamboo cultivation, value addition, and income generation for farmers.",
    },
    {
      id: 16,
      link: "https://nbb.gov.in/",
      imgSrc: "/public/images/beekiping.png",
      altText: "National Beekeeping And Honey Mission",
      text: "National Beekeeping And Honey Mission",
      description:
        "A mission to enhance beekeeping and honey production to boost farmer incomes and improve pollination.",
    },
  ];

  //   return (
  //     <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-12 px-4">
  //       {/* Page Title */}
  //       <div className="text-center max-w-4xl mx-auto mb-12">
  //         <h1 className="text-4xl font-bold text-emerald-800 mb-4">
  //           Government Farming Resources Hub
  //         </h1>
  //         <p className="text-lg text-gray-600 leading-relaxed">
  //           Welcome to the Government Farming Resources Hub! Explore a wide range
  //           of tools and services designed to assist farmers in enhancing their
  //           productivity and ensuring sustainable agricultural practices.
  //         </p>
  //       </div>

  //       {/* Cards Grid */}
  //       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
  //         {cards.map((card) => (
  //           <div
  //             key={card.id}
  //             className="group relative bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
  //           >
  //             <a
  //               href={card.link}
  //               target="_blank"
  //               rel="noopener noreferrer"
  //               className="block"
  //             >
  //               {/* Card Image Container */}
  //               <div className="relative h-48 overflow-hidden bg-emerald-50">
  //                 <img
  //                   src={card.imgSrc}
  //                   alt={card.altText}
  //                   className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
  //                 />
  //                 <div className="absolute inset-0 bg-gradient-to-t from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  //               </div>

  //               {/* Card Content */}
  //               <div className="p-6">
  //                 <h3 className="text-xl font-semibold text-emerald-800 mb-2 group-hover:text-emerald-600">
  //                   {card.text}
  //                 </h3>
  //                 {card.description && (
  //                   <p className="text-gray-600 text-sm leading-relaxed">
  //                     {card.description}
  //                   </p>
  //                 )}

  //                 {/* Visit Button */}
  //                 <div className="mt-4 flex items-center justify-between">
  //                   <span className="inline-flex items-center text-emerald-600 text-sm font-medium group-hover:text-emerald-500">
  //                     Visit Resource
  //                     <svg
  //                       className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
  //                       fill="none"
  //                       stroke="currentColor"
  //                       viewBox="0 0 24 24"
  //                     >
  //                       <path
  //                         strokeLinecap="round"
  //                         strokeLinejoin="round"
  //                         strokeWidth="2"
  //                         d="M9 5l7 7-7 7"
  //                       />
  //                     </svg>
  //                   </span>
  //                 </div>
  //               </div>
  //             </a>

  //             {/* Decorative Elements */}
  //             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
  //           </div>
  //         ))}
  //       </div>

  //       {/* Additional Information Section */}
  //       <div className="mt-16 text-center">
  //         <p className="text-gray-500 text-sm">
  //           Click on any card to access the respective government resource portal
  //         </p>
  //       </div>
  //     </div>
  //   );
  // };

  // export default Farmweb;

  const Card = ({ card }) => (
    <div
      key={card.id}
      className="group relative bg-gradient-to-br from-emerald-100 via-green-50 to-emerald-100 
      rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 
      border border-emerald-200 shadow-lg hover:shadow-emerald-200"
    >
      <a
        href={card.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative h-48 overflow-hidden bg-gradient-to-b from-emerald-50 to-emerald-100">
          <div className="absolute inset-0 bg-emerald-800 opacity-5"></div>
          <img
            src={card.imgSrc}
            alt={card.altText}
            className="w-full h-full object-contain p-4 transition-transform duration-300 
            group-hover:scale-105 relative z-10"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-emerald-200/30 to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </div>

        <div className="p-6 bg-gradient-to-b from-emerald-50/50 to-emerald-100/50">
          <h3
            className="text-xl font-semibold text-emerald-900 mb-3 
          group-hover:text-emerald-700 transition-colors duration-300"
          >
            {card.text}
          </h3>
          <p className="text-emerald-800/90 text-sm leading-relaxed mb-4">
            {card.description}
          </p>

          <div className="mt-4">
            <span
              className="inline-flex items-center text-emerald-700 text-sm font-medium 
            group-hover:text-emerald-600 bg-white px-4 py-2 rounded-lg shadow-sm 
            hover:bg-emerald-50 transition-all duration-300 border border-emerald-200"
            >
              Visit Resource
              <svg
                className="ml-2 w-4 h-4 transition-transform duration-300 
                group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      </a>

      <div
        className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r 
      from-emerald-400 via-green-500 to-emerald-600 transform origin-left scale-x-0 
      transition-transform duration-300 group-hover:scale-x-100"
      ></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-green-50 to-emerald-50 py-12 px-0">
      {/* Header Section */}
      <div
        className="bg-white shadow-md flex justify-between items-center h-16 p-5 fixed w-full z-50"
        style={{ margin: "0", top: "0", left: "0" }}
      >
        <div className="flex items-center">
          <img src="logobhoomi.png" alt="Bhoomi Logo" className="h-12 w-12" />
          <h1 className="text-2xl font-semibold ml-3 text-gray-800">Bhoomi</h1>
        </div>
        <div className="flex items-center">
          <a
            href="/"
            className="text-gray-800 py-2 px-4 border border-gray-300 rounded-md mr-4 hover:bg-gray-100 transition duration-200"
          >
            Login
          </a>
          <a
            href="/dashboard"
            className="text-white bg-blue-600 py-2 px-4 rounded-md mr-4 font-medium hover:bg-blue-700 transition duration-200"
          >
            Go Back to Dashboard
          </a>
          <button
            onClick={() => (window.location.href = "/register")}
            className="text-white bg-blue-600 py-2 px-4 rounded-md font-medium hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Page Title */}
      <div className="text-center max-w-4xl mx-auto mb-12 mt-20">
        <h1 className="text-4xl font-bold text-emerald-900 mb-4">
          Government Farming Resources Hub
        </h1>
        <p className="text-lg text-emerald-800/90 leading-relaxed">
          Welcome to the Government Farming Resources Hub! Explore a wide range
          of tools and services designed to assist farmers in enhancing their
          productivity and ensuring sustainable agricultural practices.
        </p>
      </div>

      {/* Scrollable Cards Container */}
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Scrollable Grid */}
          <div className="overflow-y-auto max-h-[800px] pr-4 scrollbar-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {cards.map((card) => (
                <Card key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="mt-16 text-center">
        <p className="text-emerald-700 text-sm font-medium">
          Click on any card to access the respective government resource portal
        </p>
      </div>
    </div>
  );
};

// Add this CSS to your global stylesheet
const scrollbarStyles = `
  <style>
    .scrollbar-custom::-webkit-scrollbar {
      width: 8px;
    }

    .scrollbar-custom::-webkit-scrollbar-track {
      background: #ecfdf5;
      border-radius: 4px;
    }

    .scrollbar-custom::-webkit-scrollbar-thumb {
      background: #059669;
      border-radius: 4px;
    }

    .scrollbar-custom::-webkit-scrollbar-thumb:hover {
      background: #047857;
    }

    .scrollbar-custom {
      scrollbar-width: thin;
      scrollbar-color: #059669 #ecfdf5;
    }
  </style>
`;

// Add this to your index.html or App component
document.head.insertAdjacentHTML("beforeend", scrollbarStyles);

export default Farmweb;
