import { ChevronRight } from "lucide-react";
const imageLink =
  "https://www.shutterstock.com/shutterstock/photos/2069457431/display_1500/stock-photo-handsome-smiling-young-man-with-folded-arms-beautiful-portrait-of-laughing-joyful-cheerful-men-2069457431.jpg";

const profiles = [
  {
    name: "Shaaran Lakshminarayanan",
    image: imageLink,
    description:
      "Shaaran is a specialist in security and blockchain with wide experience in the Tech industry. He has received many awards around the world such as the World's Top 50 Techinnovator awar...",
  },
  {
    name: "Ritumbhara Bhatnagar",
    image: imageLink,
    description:
      "Ritumbhara is a vivid designer with 3+ years of experience in UI & UX design. In addition to designing she is a proficient developer with 2+ years of experience in ...",
  },
  {
    name: "Vaibhav Shukla",
    image: imageLink,
    description:
      "Vaibhav is a street smart Salesman and Marketer with 7 years of experience in business development, he has worked with famous cricketers like MS Dhoni, Bhuvaneshwar Kumar a...",
  },
  {
    name: "Bhavesh Praveen",
    image: imageLink,
    description:
      "Software Engineer at Atlan and a data wizard, Bhavesh has won numerous datathon and this grandmaster was awarded the title Data Acer by Yesbank in 2019. He additionally...",
  },
];

const TeamMember = () => {
  return (
    <div className="flex flex-col max-w-[1184px] md:flex-row md:items-center gap-8 px-4 md:px-10 lg:px-16 md:mt-0 mx-auto md:mx-0 lg:mx-auto pt-[56px] xl:pt-[32px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative w-full">
        {profiles.map((profile, index) => (
          <div
            className="flex items-center justify-center md:items-start relative pt-8 md:pt-12 pb-8 md:pb-12"
            key={index}
          >
            <div
              className={`flex flex-col items-center md:items-start md:flex-row max-w-full md:max-w-none ${
                index % 2 === 0 ? "md:mr-8 lg:mr-24" : "md:ml-8 lg:ml-24"
              }`}
            >
              <div className="flex flex-col items-center md:items-start md:flex-row gap-4 md:gap-6 w-full px-4 md:px-0">
                <div className="w-[130px] flex-shrink-0">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-[130px] h-[130px] rounded-lg object-cover"
                  />
                </div>
                <div className="w-full text-center md:text-left md:w-[200px]">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-medium text-gray-900 break-words">
                      {profile.name}
                    </h3>
                    <p className="text-sm md:text-base leading-6 text-[#999FAE]">
                      {profile.description}
                    </p>
                    <div className="pt-2">
                      <button className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-700">
                        Learn more
                        <ChevronRight
                          className="ml-1 h-4 w-4"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {index % 2 === 0 && (
              <div className="hidden md:block absolute h-full right-0 top-0 bottom-0 w-px bg-gray-200" />
            )}
            {index < profiles.length - 2 && (
              <div className="hidden md:block absolute left-[-200%] right-0 bottom-0 h-px bg-gray-200 w-[500%]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
