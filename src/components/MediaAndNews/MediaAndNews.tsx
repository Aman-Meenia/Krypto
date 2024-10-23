const MediaAndNews = () => {
  return (
    <div className="w-full h-fit py-[80px] md:pt-[150px] md:pb-[100px] bg-[#27272E] overflow-x-hidden">
      <div className="flex flex-col max-w-[1184px] md:flex-row md:items-center gap-8 px-[32px] md:px-[40px] lg:px-[72px] md:mt-0 mx-auto md:mx-0 lg:mx-auto">
        <div className="w-full flex flex-col gap-14 ">
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
              <p className=" max-w-[500px] text-[#ffffff80] text-[16px] md:text-[18px] overflow-auto">
                At Krypto we always believe that excellence is the gradual
                result of always striving to do better.
              </p>
            </div>
          </div>

          <div className="w-full grid grid-cols-2 md:grid-cols-4 md:gap-8 place-items-center">
            <div>
              <img
                src="https://www.letskrypto.com/img/digitalindia.png"
                alt="DigitalIndia"
                className="w-[100%]  md:scale-y-150"
              />
            </div>

            <div>
              <img
                src="https://www.letskrypto.com/img/dailyhuntlogo.png"
                alt="DailyHunt"
                className="w-[100%]  md:scale-y-150"
              />
            </div>
            <div>
              <img
                src="https://www.letskrypto.com/img/yourstory.png"
                alt="YourStory"
                className="w-[100%] md:scale-y-150"
              />
            </div>

            <div>
              <img
                src="https://www.letskrypto.com/img/newstracklogo.png"
                alt="NewsTrack"
                className="w-[100%] md:scale-y-150"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaAndNews;

// Images
// https://www.letskrypto.com/img/digitalindia.png
// https://www.letskrypto.com/img/dailyhuntlogo.png
// https://www.letskrypto.com/img/yourstory.png
// https://www.letskrypto.com/img/newstracklogo.png
