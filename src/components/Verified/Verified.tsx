import { CircleCheck, MinusIcon, PlusIcon } from "lucide-react";
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
import { useState } from "react";

const steps = [
  {
    title: "Download the Krypto App",
    details: [
      "Open Playstore/AppStore",
      "Search for Krypto",
      "Click on the Download button",
    ],
    image: "/img/Flyer.png",
  },
  {
    title: "Sign up with your email address",
    details: [
      "Enter your email and password",
      "Choose your username",
      "Add Extra security for your account with 2FA",
    ],
    image: "/img/Signup.png",
  },
  {
    title: "Complete your KYC in just 5 mins",
    details: [
      "Provide a Address Proof",
      "Verify your phone number",
      "Provide you selfie",
      "Get free cryptocurrency on KYC completion",
    ],
    image: "/img/Kyc.png",
  },
  {
    title: "Buy or Sell any Crypto in a Click !",
    details: [
      `Go to "Buy/Sell" on homepage`,
      "Click on whatever Coin you want to Buy or Sell",
      "Click on Confirm !",
    ],
    image: "/img/KryptoTrade.png",
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
    image: "/img/ProTraders.png",
  },
];

const Verified = () => {
  const [openStates, setOpenStates] = useState(
    new Array(steps.length).fill(false).map((_, index) => index === 0),
  );

  const toggleStep = (index: number) => {
    setOpenStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div className="w-full h-fit py-[80px] md:pt-[150px] md:pb-[100px] overflow-x-hidden">
      <div className="w-full flex flex-col max-w-[1184px] lg:flex-row md:items-start gap-8 px-[32px] md:px-[40px] lg:px-[72px] md:mt-0 mx-auto md:mx-0 lg:mx-auto relative">
        <div className="max-w-[392px] flex flex-col gap-14 md:top-8 h-fit mt-[20px] mb:[50px]">
          <div>
            <h1 className="text-[48px] color-[#292930] leading-[50px] mb-[40px]">
              How to buy Bitcoin or any Crypto ?
            </h1>
            <div className="text-[#999fae]">
              Buying Bitcoin or any other Cryptocurrency is as simple as booking
              a cab on Vber, buy or sell at anytime with Zero Commission.
            </div>
          </div>
          <ul className="text-[#292930] text-[16px] space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-2">
                <CircleCheck className="flex-shrink-0" color="#fc7e2f" />
                <li>{step.title}</li>
              </div>
            ))}
          </ul>
        </div>

        <div className="w-full">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <Card key={index}>
                <Collapsible
                  open={openStates[index]}
                  onOpenChange={() => toggleStep(index)}
                >
                  <CollapsibleTrigger asChild>
                    <CardHeader
                      className={`${openStates[index] ? "bg-[#fc7e2f] m-4 rounded-2xl text-white" : "hover:text-[#fc7e2f] text-[#27272e]"} flex flex-row items-center justify-between space-y-0 cursor-pointer`}
                    >
                      <CardTitle className="text-sm font-medium">
                        <div className="flex items-center gap-4">
                          <img
                            src="/img/Layout3.svg"
                            alt="Cube"
                            className="w-[40px] h-[40px]"
                          />
                          <div className="text-[18px]">{step.title}</div>
                        </div>
                      </CardTitle>
                      {openStates[index] ? (
                        <MinusIcon
                          className="h-6 w-6 transition-transform duration-200"
                          color="white"
                        />
                      ) : (
                        <PlusIcon
                          className="h-6 w-6 transition-transform duration-200"
                          color="black"
                        />
                      )}
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="transition-all duration-200">
                    <CardContent>
                      {step.details.length > 0 && (
                        <ul className="list-none mt-2 text-[#999fae] pt-[20px] pb-[26px] px-[24px]">
                          <div className="flex">
                            <div className="hidden xl:block w-1/3">
                              <img
                                src={step.image}
                                alt={step.title}
                                className="w-[160px] h-[200px] object-contain"
                              />
                            </div>
                            <div className="flex xl:w-1/2 flex-col gap-2">
                              {step.details.map((detail, detailIndex) => (
                                <div
                                  className="flex items-center gap-2"
                                  key={detailIndex}
                                >
                                  <img
                                    src="/img/ListIcon2.svg"
                                    alt=""
                                    className="w-[24px] h-[24px]"
                                  />
                                  <li className="text-[16px] mb-2 pt-2">
                                    {detail}
                                  </li>
                                </div>
                              ))}
                            </div>
                          </div>
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

// import listIcon from "../../../public/img/ListIcon2.svg";
// import kyc from "/img/Kyc.png";
// import flyer from "/img/Flyer.png";
// import proTraders from "/img/ProTraders.png";
// import kryptoTrade from "/img/KryptoTrade.png";
// import signup from "/img/Signup.png";
// import { CircleCheck, MinusIcon, PlusIcon } from "lucide-react";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "../../components/ui/card";
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "../../components/ui/collapsible";
// import { useState } from "react";
//
// const steps = [
//   {
//     title: "Download the Krypto App",
//     details: [
//       "Open Playstore/AppStore",
//       "Search for Krypto",
//       "Click on the Download button",
//     ],
//     image: flyer,
//   },
//   {
//     title: "Sign up with your email address",
//     details: [
//       "Enter your email and password",
//       "Choose your username",
//       "Add Extra security for your account with 2FA",
//     ],
//     image: signup,
//   },
//   {
//     title: "Complete your KYC in just 5 mins",
//     details: [
//       "Provide a Address Proof",
//       "Verify your phone number",
//       "Provide you selfie",
//       "Get free cryptocurrency on KYC completion",
//     ],
//     image: kyc,
//   },
//   {
//     title: "Buy or Sell any Crypto in a Click !",
//     details: [
//       `Go to "Buy/Sell" on homepage`,
//       "Click on whatever Coin you want to Buy or Sell",
//       "Click on Confirm !",
//     ],
//     image: kryptoTrade,
//   },
//
//   {
//     title: "Professional Trading Mode for the Pro Traders",
//     details: [
//       "0% Trading Fee",
//       "Real-time Open Orderbook",
//       "Real-time Advanced charts",
//       "Dark Mode",
//       "200+ indicators and Ai assistors",
//     ],
//     image: proTraders,
//   },
// ];
//
// const cubeImage = "https://www.letskrypto.com/img/layout-3.svg";
//
// const Verified = () => {
//   const [openStates, setOpenStates] = useState(
//     new Array(steps.length).fill(false).map((_, index) => index === 0),
//   );
//
//   const toggleStep = (index: number) => {
//     setOpenStates((prevStates) => {
//       const newStates = [...prevStates];
//       newStates[index] = !newStates[index];
//       return newStates;
//     });
//   };
//
//   return (
//     <div className="w-full h-fit py-[80px] md:pt-[150px] md:pb-[100px] overflow-x-hidden">
//       <div className="w-full flex flex-col max-w-[1184px] lg:flex-row md:items-start gap-8 px-[32px] md:px-[40px] lg:px-[72px] md:mt-0 mx-auto md:mx-0 lg:mx-auto relative">
//         <div className="max-w-[392px] flex flex-col gap-14 md:top-8 h-fit mt-[20px] mb:[50px]">
//           <div>
//             <h1 className="text-[48px] color-[#292930] leading-[50px] mb-[40px]">
//               How to buy Bitcoin or any Crypto ?
//             </h1>
//             <div className="text-[#999fae]">
//               Buying Bitcoin or any other Cryptocurrency is as simple as booking
//               a cab on Vber, buy or sell at anytime with Zero Commission.
//             </div>
//           </div>
//           <ul className="text-[#292930] text-[16px] space-y-4">
//             {steps.map((step, index) => (
//               <div key={index} className="flex items-center gap-2">
//                 <CircleCheck className="flex-shrink-0" color="#fc7e2f" />
//                 <li>{step.title}</li>
//               </div>
//             ))}
//           </ul>
//         </div>
//
//         <div className="w-full">
//           <div className="space-y-4">
//             {steps.map((step, index) => (
//               <Card key={index}>
//                 <Collapsible
//                   open={openStates[index]}
//                   onOpenChange={() => toggleStep(index)}
//                 >
//                   <CollapsibleTrigger asChild>
//                     <CardHeader
//                       className={`${openStates[index] ? "bg-[#fc7e2f] m-4 rounded-2xl text-white " : " hover:text-[#fc7e2f] text-[#27272e]"}flex flex-row items-center justify-between space-y-0 cursor-pointer`}
//                     >
//                       <CardTitle className="text-sm font-medium">
//                         <div className="flex items-center gap-4">
//                           <img
//                             src={cubeImage}
//                             alt="Cube"
//                             className="w-[40px] h-[40px]"
//                           />
//                           <div className="text-[18px]">{step.title}</div>
//                         </div>
//                       </CardTitle>
//                       {openStates[index] ? (
//                         <MinusIcon
//                           className="h-6 w-6 transition-transform duration-200"
//                           color="white"
//                         />
//                       ) : (
//                         <PlusIcon
//                           className="h-6 w-6 transition-transform duration-200"
//                           color="black"
//                         />
//                       )}
//                     </CardHeader>
//                   </CollapsibleTrigger>
//                   <CollapsibleContent className="transition-all duration-200">
//                     <CardContent>
//                       {step.details.length > 0 && (
//                         <ul className="list-none  mt-2 text-[#999fae] pt-[20px] pb-[26px] px-[24px] ">
//                           <div className=" flex ">
//                             <div className="hidden xl:block  w-1/3">
//                               <img
//                                 src={flyer}
//                                 alt="Kyc"
//                                 className="w-[160px] h-[200px] "
//                               />
//                             </div>
//                             <div className="flex xl:w-1/2 flex-col gap-2">
//                               {step.details.map((detail, index) => (
//                                 <div
//                                   className=" flex items-center gap-2"
//                                   key={index}
//                                 >
//                                   <img
//                                     src={listIcon}
//                                     alt=""
//                                     className="w-[24px] h-[24px]"
//                                   />
//
//                                   <li className="text-[16px] mb-2 pt-2 ">
//                                     {detail}
//                                   </li>
//                                 </div>
//                               ))}
//                             </div>
//                           </div>
//                         </ul>
//                       )}
//                     </CardContent>
//                   </CollapsibleContent>
//                 </Collapsible>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default Verified;
