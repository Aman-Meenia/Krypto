import { useState, useEffect } from "react";
import { Card, CardContent } from "../../components/ui/card";
import featureImage from "/img/Featurespic1.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import { type CarouselApi } from "../../components/ui/carousel";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

type featureType = {
  title: string;
  description: string;
  image: string;
};
const features: featureType[] = [
  {
    title: "Krypto Pay",
    image: "/img/KryptoPay.png",
    description:
      "Using Krypto's patented technology for the world's first time we bridge the gaps between day to day payments and cryptocurrencies. Now pay with cryptocurrency in any shop in India.",
  },
  {
    title: "Send Krypto",
    image: "/img/SendKrypto.png",
    description:
      "Cryptocurrency money transfer made simple, now send cryptocurrency to anyone around the world for free using Krypto.",
  },
  {
    title: "Krypto Exchange",
    image: "/img/KryptoExchange.png",
    description:
      "Krypto makes the vexing procedure of dealing with cryptocurrency exchanges simple! Krypto is tailored to optimize the understanding of the user and make all processes smooth and aesthetically pleasing",
  },
  {
    title: "Security",
    image: "/img/Securitykrypto.png",
    description:
      "Security remains a key issue preventing wide spread acceptance of crypto currency as an investment asset. We strongly believe in developing our platform to be highly secured in which traders can feel safe to invest and trade. ",
  },
  {
    title: "Lowest Fees",
    image: "/img/LowestFees.png",
    description:
      "Our motto is to promote cryptocurrency usage and drive the world towards decentralization, thus Krypto provides the lowest fees in the market for trading.",
  },
];

const Features = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handlePrevious = () => {
    if (api) {
      api.scrollPrev();
    }
  };

  const handleNext = () => {
    if (api) {
      api.scrollNext();
    }
  };

  return (
    <div className="w-full h-fit py-[80px] md:pt-[150px] md:pb-[100px] bg-[#27272E] overflow-hidden relative">
      <div className="z-0 absolute top-[115px] right-[calc(50%-520px)] bg-[#525260] h-[268px] w-[268px] rounded-full"></div>
      <div className="flex flex-col max-w-[1184px] md:flex-row md:items-center gap-8 px-[32px] md:px-[40px] lg:px-[72px] md:mt-0 mx-auto md:mx-0 lg:mx-auto realtive">
        <div className=" z-10 w-full flex flex-col gap-14 mb-[100px]">
          <div className="w-full flex flex-col md:flex-row mb-[60px]">
            <div className="w-[216px] flex-shrink-0">
              <h2 className="text-[16px] md:text-[20px] text-white mb-4 font-bold">
                Features
              </h2>
            </div>
            <div>
              <h1 className="text-white text-5xl md:text-[68px] xl:text-[80px] mb-8 md:mb-12">
                Experience the future of payments
              </h1>
              <p className="text-[#ffffff80] text-[16px] md:text-[18px] overflow-auto max-w-[512px]">
                Let Krypto guide you through the world of cryptocurrencies.
              </p>
            </div>
          </div>

          <div className=" hidden lg:block absolute bottom-[500px]  left-[calc(50%+120px)] w-[1200px] bg-[#ffbaba] h-[1px] mb-10"></div>
          <div className="w-full flex flex-col md:flex-row mt-10">
            <div className="w-full md:w-[216px] flex  md:flex-col flex-shrink-0  justify-between  md:justify-evenly">
              <div className="w-[132px] flex flex-row h-6 justify-between items-center">
                <span className="text-white">0{current + 1}</span>
                <div className="h-[1px] w-[40px] bg-white"></div>
                <span className="text-[#ffffff4D]">0{features.length}</span>
              </div>
              <div className="flex flex-row gap-4">
                <button
                  onClick={handlePrevious}
                  className="disabled:opacity-50"
                  disabled={current === 0}
                >
                  <CircleArrowLeft
                    color="grey"
                    className="h-10 w-10 cursor-pointer hover:text-white transition-colors"
                  />
                </button>
                <button
                  onClick={handleNext}
                  className="disabled:opacity-50"
                  disabled={current === count - 1}
                >
                  <CircleArrowRight
                    color="grey"
                    className="h-10 w-10 cursor-pointer hover:text-white transition-colors"
                  />
                </button>
              </div>
            </div>
            <div className="w-full overflow-hidden pt-10 ">
              <Carousel
                opts={{
                  align: "start",
                }}
                setApi={setApi}
                className="w-full "
              >
                <CarouselContent>
                  {features.map((feature, index) => (
                    <CarouselItem key={index} className="pl-4 lg:basis-1/2">
                      <div className="">
                        <Card className="p-0 bg-transparent border-none shadow-none">
                          <CardContent className="p-0 m-0 flex flex-col items-start">
                            <div className="max-w-full">
                              <div className="mb-5">
                                <img
                                  src={feature.image}
                                  alt={feature.title}
                                  className="w-[150px] h-[80px]"
                                />
                              </div>
                              <h3 className="text-white text-2xl font-semibold mb-5">
                                {feature.title}
                              </h3>
                              <p className="text-[#ffffff80] text-[15px]">
                                {feature.description}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
        <div className=" z-0 absolute right-[-200px] md:right-[42%] lg:right-[50%] top-0 w-[1142px] h-[1143px]">
          <img
            src={featureImage}
            alt="MediaAndNews"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
