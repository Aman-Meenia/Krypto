import listIcon from "/img/Layout2.svg";
import cloud from "/img/Cloud.png";
import flyer from "/img/Flyer.png";

const Companion = () => {
  const features = [
    "Free and instant fiat deposits and withdrawals",
    "Super fast onboarding process",
    "0% trading fee",
    "Giftcards with chance to win upto 0.2 BTC",
    "24/7 Email & Chat Customer Support",
    "Registered under Blockchain & Crypto Asset Council of India",
  ];

  return (
    <div className="w-full h-fit pt-16 pb-8 md:pt-36 md:pb-28 lg:pt-52 lg:pb-32 bg-white overflow-x-hidden">
      <div className="flex flex-col max-w-[1184px] md:flex-row md:items-center gap-8 px-[32px] md:px-[40px] lg:px-[72px] md:mt-0 mx-auto md:mx-0 lg:mx-auto">
        <div className="w-full md:w-1/2 space-y-6">
          <div className="space-y-2">
            <p className="text-orange-500 text-[16px] md:text-[20px] font-bold">
              We got your back
            </p>
            <h1 className="text-5xl md:text-[68px] xl:text-[80px] mb-4">
              Your Crypto companion<span className="text-orange-500">.</span>
            </h1>
          </div>
          <p className="text-gray-500 text-sm sm:text-base">
            Whether you're new to the world of cryptocurrency or you're a
            legendary crypto-trader, we got your back.
          </p>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-5 text-sm sm:text-base"
              >
                <img src={listIcon} alt="Icon" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className=" flex w-full justify-end ">
            <img
              src={cloud}
              alt=""
              className=" absolute w-[140px] ml-[30%]    "
            />
          </div>
          <div className="relative mx-auto md:mx-0  md:w-[450px]  xl:w-[768px]">
            <img
              src={flyer}
              alt="Crypto companion illustration"
              className=" w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companion;
