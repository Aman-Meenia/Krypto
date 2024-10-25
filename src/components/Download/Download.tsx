import background from "/img/Background_End.png";
import cryptoOffer from "/img/Kryptooffer.png";
const Download = () => {
  return (
    <div className="w-full h-fit bg-white overflow-x-hidden relative">
      <div className="flex flex-col max-w-[1384px] gap-8  md:px-[40px] lg:px-[72px] md:mt-0 mx-auto md:mx-0 lg:mx-auto relative mb-[350px]">
        <div
          className="w-full flex  flex-col h-[700px] md:rounded-[50px] pt-[40px] px-[16px] md:p-[40px] lg:p-[72px] m-auto relative"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="z-0 absolute top-[-290px] left-1/2 transform -translate-x-1/2 bg-[#f8701b] h-[579px] w-[579px] rounded-full"></div>
          <div className=" z-0 absolute bg-[#f9d1b2] w-[80px] h-[80px] rounded-full bottom-[192px] right-[-40px] md:right-0 md:left-[237px]"></div>
          <div className=" z-10 w-full flex flex-col pt-[30px] md:px-[40px] lg:px-[72px] items-center text-center">
            <div>
              <h1 className="text-white text-5xl md:text-[48px] lg:text-[68px] xl:text-[80px] mb-8 md:mb-12">
                Ready to experience the Krypto app?
                <span className="text-orange-500">.</span>
              </h1>
            </div>
            <div>
              <h2 className="text-[16px] md:text-[18px] mb-4 text-white">
                Explore the world of cryptocurrencies by clicking the button
                below
              </h2>
            </div>
            <div className="pt-8">
              <button className=" text-[#6d3c14] bg-white h-[70px] w-56 rounded-2xl">
                Download Now
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex w-full right-[40px] top-[60%] justify-center">
          <img src={cryptoOffer} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Download;
