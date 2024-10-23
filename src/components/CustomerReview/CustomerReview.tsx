import { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import { type CarouselApi } from "../../components/ui/carousel";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

type reviewType = {
  userName: string;
  review: string;
  userType: string;
};

const reviews: reviewType[] = [
  {
    userName: "Ram Prasad",
    review:
      " Krypto is great. Makes trading legit simple. Love the free crypto transfer feature, makes crypto payments fast and cheap",
    userType: "Blogger",
  },
  {
    userName: "Sanjay Thomas",
    review:
      "Kryptopay is what I came here for, payments happen in less than 4 secs and the user experience is just flawless",
    userType: "user",
  },
  {
    userName: "James Harris",
    review:
      " The exchanges I make through Krypto Exchange get through really fast. The liquidity on Krypto is simply amazing ",
    userType: "user",
  },
  {
    userName: "Ram Prasad",
    review:
      " I'm a newbie to crypto trading and Krypto guided me through my transition from a stock trader to a crypto trader! ",
    userType: "user",
  },
];

const CustomerReview = () => {
  const [api, setApi] = useState<CarouselApi>();

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
    <div className="w-full h-fit py-[80px] md:pt-[150px] md:pb-[100px] bg-white overflow-x-hidden">
      <div className="w-full flex flex-col max-w-[1184px] md:flex-row md:items-center gap-8 px-[32px] md:px-[40px] lg:px-[72px] md:mt-0 mx-auto md:mx-0 lg:mx-auto">
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col">
            <div className="">
              <h2 className="text-[16px] md:text-[20px] font-bold mb-4 text-[#C75C6F]">
                Cryptocurrency Redefined
              </h2>
            </div>
            <div>
              <h1 className="text-[#292930] text-5xl md:text-[68px] xl:text-[80px] mb-8 md:mb-12">
                A satisfied customer is the best business strategy
                <span className="text-orange-500">.</span>
              </h1>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row md:mt-10">
            <div className="w-full md:w-[375px] flex flex-col flex-shrink-0 gap-8">
              <div className="hidden md:block w-[250px]">
                <span className="text-[#292930] text-[40px] leading-[40px]">
                  What others are saying
                </span>
              </div>
              <div className="flex flex-row gap-4">
                <button
                  onClick={handlePrevious}
                  className="disabled:opacity-50"
                >
                  <CircleArrowLeft
                    color="orange"
                    className="h-10 w-10 cursor-pointer hover:text-white transition-colors"
                  />
                </button>
                <button onClick={handleNext} className="disabled:opacity-50">
                  <CircleArrowRight
                    color="orange"
                    className="h-10 w-10 cursor-pointer hover:text-white transition-colors"
                  />
                </button>
              </div>
            </div>
            <div className="w-full overflow-hidden pt-10">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                setApi={setApi}
                className="w-full"
              >
                <CarouselContent>
                  {reviews.map((review, index) => (
                    <CarouselItem key={index} className="pl-4 xl:basis-1/2">
                      <Card className="border-none bg-transparent shadow-none">
                        <CardContent className="p-0">
                          <div className="max-w-full flex flex-col justify-between h-full">
                            <div
                              className={`${
                                index % 2 ? "bg-[#f9d1b2]" : "bg-[#fc7e2f]"
                              } h-[2px] mb-[32px] md:mb-[40px] w-[148px] md:w-full`}
                            ></div>
                            <div className=" mb-6">
                              <h3
                                className={`${
                                  index % 2
                                    ? "text-[#fc7e2f]"
                                    : "text-[#C75C6F]"
                                } text-[20px] font-bold mb-5`}
                              >
                                {review.userName}
                              </h3>
                              <p className="text-[#292930] text-[18px] md:text-[24px] font-light mb-8">
                                “ {review.review} ”
                              </p>
                            </div>
                            <div>
                              <h4 className="font-bold text-[16px]">
                                {review.userName}
                              </h4>
                              <span className="text-[#999FAE] text-[14px]">
                                {review.userType}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
