import yourStory from "/img/YourStoryLogo.png";
import newsStory from "/img/NewstrackLogo.png";
import digitalIndia from "/img/DigitalIndia.png";
import dailyHunt from "/img/DailyHuntLogo.png";
import mediaAndNews from "/img/MediaAndNews.svg";

type partnerType = {
  src: string;
  alt: string;
};
const partners: partnerType[] = [
  {
    src: digitalIndia,
    alt: "DigitalIndia",
  },
  {
    src: dailyHunt,
    alt: "DailyHunt",
  },
  {
    src: yourStory,
    alt: "YourStory",
  },
  {
    src: newsStory,
    alt: "NewsStory",
  },
];

const MediaAndNews = () => {
  return (
    <div className="w-full h-fit py-[80px] md:pt-[111px] md:pb-[50px] bg-[#27272E] overflow-hidden relative ">
      <div className="flex flex-col max-w-[1184px] md:flex-row md:items-center gap-8 px-[32px] md:px-[40px] lg:px-[72px] md:mt-0 mx-auto md:mx-0 lg:mx-auto realtive overflow-hidden">
        <div className="z-0 absolute top-[115px] right-[calc(50%-520px)] bg-[#525260] h-[268px] w-[268px] rounded-full"></div>

        <div className="z-10 w-full flex flex-col gap-14 ">
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-[216px] flex-shrink-0">
              <h2 className="text-[16px] md:text-[20px] text-white mb-4 font-bold">
                Media and News
              </h2>
            </div>
            <div>
              <h1 className="text-white text-5xl md:text-[68px] xl:text-[80px] mb-8 md:mb-12">
                More than 8,00,000 people use Krypto.
              </h1>
              <p className="max-w-[500px] text-[#ffffff80] text-[16px] md:text-[18px] overflow-auto">
                At Krypto we always believe that excellence is the gradual
                result of always striving to do better.
              </p>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 md:gap-8 place-items-center">
            {partners.map((image, index: number) => (
              <div key={index} className="w-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className=" w-[200px] md:w-full  md:grayscale md:transition-all md:duration-300 md:hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" z-0 absolute right-[-200px] md:right-[42%] lg:right-[50%] top-0 w-[806px] h-[804px]">
        <img src={mediaAndNews} alt="MediaAndNews" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default MediaAndNews;
