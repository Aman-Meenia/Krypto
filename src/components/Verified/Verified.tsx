import { CircleCheck, PlusIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../components/ui/collapsible";

const steps = [
  {
    title: "Download the Krypto App",
    details: [
      "Open Playstore/AppStore",
      "Search for Krypto",
      "Click on the Download button",
    ],
  },
  {
    title: "Sign up with your email address",
    details: [
      "Enter your email and password",
      "Choose your username",
      "Add Extra security for your account with 2FA",
    ],
  },
  {
    title: "Complete your KYC in just 5 mins",
    details: [
      "Provide a Address Proof",
      "Verify your phone number",
      "Provide you selfie",
      "Get free cryptocurrency on KYC completion",
    ],
  },
  {
    title: "Buy or Sell any Crypto in a Click !",
    details: [
      `Go to "Buy/Sell" on homepage`,
      "Click on whatever Coin you want to Buy or Sell",
      "Click on Confirm !",
    ],
  },
  {
    title: "Professional Trading Mode for the Pro Traders",
    details: [
      "0% Trading Fee",
      "Real-time Open Orderbook",
      "Real-time Advanced charts",
      "Dark Mode",
      "200+ indicators and Ai assistors",
    ],
  },
];

const cubeImage = "https://www.letskrypto.com/img/layout-3.svg";

const Verified = () => {
  return (
    <div className="w-full h-fit py-[80px] md:pt-[150px] md:pb-[100px] overflow-x-hidden">
      <div className="w-full flex flex-col max-w-[1184px] lg:flex-row md:items-start gap-8 px-[32px] md:px-[40px] lg:px-[72px] md:mt-0 mx-auto md:mx-0 lg:mx-auto relative">
        <div className="max-w-[392px] flex flex-col gap-14 md:top-8 h-fit  mt-[20px] mb:[50px]">
          <div>
            <h1 className="text-[48px] color-[#292930] leading-[50px] mb-[40px]">
              How to buy Bitcoin or any Crypto ?
            </h1>
            <div className=" text-[#999fae]">
              Buying Bitcoin or any other Cryptocurrency is as simple as booking
              a cab on Vber, buy or sell at anytime with Zero Commission.
            </div>
          </div>
          <ul className="text-[#292930] text-[16px] space-y-4">
            <div className="flex items-center gap-2">
              <CircleCheck className="flex-shrink-0" color="#fc7e2f" />
              <li>Download the Krypto App</li>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheck className="flex-shrink-0" color="#fc7e2f" />
              <li>Sign up with your email address</li>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheck className="flex-shrink-0" color="#fc7e2f" />
              <li>Complete your KYC in just 5 mins</li>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheck className="flex-shrink-0" color="#fc7e2f" />
              <li>Get Free Crypto Scratch Card</li>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheck className="flex-shrink-0" color="#fc7e2f" />
              <li>Buy or Sell any Crypto in a Click !</li>
            </div>
          </ul>
        </div>

        <div className="w-full">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <Card key={index}>
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 cursor-pointer">
                      <CardTitle className="text-sm font-medium">
                        <div className="flex items-center gap-4 ">
                          <img
                            src={cubeImage}
                            alt="Cube Image"
                            className="w-[40px] h-[40px]"
                          />
                          {step.title}
                        </div>
                      </CardTitle>
                      <PlusIcon className="h-6 w-6 transition-transform duration-200 data-[state=open]:rotate-180" />
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="transition-all duration-200">
                    <CardContent>
                      {/* <CardDescription>{step.description}</CardDescription> */}
                      {step.details.length > 0 && (
                        <ul className="list-disc pl-5 mt-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="text-sm">
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verified;
