import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowUp } from "lucide-react";

type footerType = {
  title: string;
  name: string[];
  linkUrl: string[];
};

const footerSections: footerType[] = [
  {
    title: "Company",
    name: ["Jobs", "Fees", "FAQs"],
    linkUrl: ["https://aman-com.vercel.app", "#", ""],
  },
  {
    title: "Terms and Conditions",
    name: ["Terms", "Privacy Policy", "AML Policy"],
    linkUrl: [
      "https://google.com",
      "https://aman-com.vercel.app",
      "https://aman-com.vercel.app",
    ],
  },
  {
    title: "Community",
    name: ["Instagram", "Twitter", "Telegram", "Youtube"],
    linkUrl: [
      "https://aman-com.vercel.app",
      "https://aman-com.vercel.app",
      "https://aman-com.vercel.app",
      "https://aman-com.vercel.app",
    ],
  },
];

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full h-fit pb-[80px]  md:pb-[100px] bg-white overflow-x-hidden">
      <div className="  max-w-[1184px] md:items-center gap-8 px-[32px] md:px-[40px] lg:px-[72px] md:mt-0 mx-auto md:mx-0 lg:mx-auto">
        <footer className="bg-white text-gray-600 p-0 m-0">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="md:hidden  flex justify-center items-start">
              <img
                className="w-[100px]"
                src="https://www.letskrypto.com/img/krypto-logo-nas.png"
                alt="Krypto Logo"
              />
            </div>

            <div className="md:hidden">
              {footerSections.map((section) => (
                <div key={section.title} className="mb-4 p-0">
                  <button
                    className="flex justify-between items-center w-full py-2 border-b border-gray-200"
                    onClick={() => toggleSection(section.title)}
                  >
                    <span className="font-semibold">{section.title}</span>
                    {expandedSection === section.title ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>
                  {expandedSection === section.title && (
                    <ul className="mt-2 space-y-2">
                      {section.name.map((data, index) => (
                        <li key={data}>
                          <a
                            href={section.linkUrl[index]}
                            className="hover:text-orange-500"
                          >
                            {data}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden md:flex w-full md:justify-between m-auto ">
              <div className="">
                <img
                  className="w-[145px]"
                  src="https://www.letskrypto.com/img/krypto-logo-nas.png"
                  alt="Krypto Logo"
                />
              </div>
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h3 className="font-semibold mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.name.map((data, index) => (
                      <li key={data}>
                        <a
                          href={section.linkUrl[index]}
                          className="hover:text-orange-500 cursor-pointer"
                        >
                          {data}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-center md:text-left mb-4 md:mb-0">
              © 2021, Krypto. | Inventphile Ventures Pte Ltd. 68 CIRCULAR ROAD,
              #02-01, Singapore (049422) | support@letskrypto.com
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center text-orange-500 hover:text-orange-600"
            >
              <span className="mr-2">Back to top</span>
              <ArrowUp size={20} />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
