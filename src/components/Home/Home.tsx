import { Button } from "../ui/button";
import kryptoOffer from "/img/Kryptooffer.png";
import scroll from "/img/Scroll.svg";
import cloud from "/img/cloud1.png";
import { useMediaQuery } from "usehooks-ts";
import DesktopHeader from "./DesktopHeader";
import Header from "./Header";
import { SquarePlay } from "lucide-react";
import Footer from "../Footer/Footer";
import TeamPage from "../TeamPage/TeamPage";
import Companion from "../Companion/Companion";
import Features from "../Features/Features";
import CustomerReview from "../CustomerReview/CustomerReview";
import MediaAndNews from "../MediaAndNews/MediaAndNews";
import Verified from "../Verified/Verified";
import Download from "../Download/Download";
import GetStarted from "../GetStarted/GetStarted";

const Home = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const showOrangeCircle = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      <div className="h-[100%] bg-white overflow-hidden relative">
        {isDesktop ? <DesktopHeader /> : <Header />}

        {showOrangeCircle && (
          <div className="overflow-hidden absolute top-[-98px] right-[calc(50%-1330px)] w-[1220px] h-[1220px] bg-[#fc7e2f] rounded-full" />
        )}

        {/* <div className="flex flex-col md:flex-row md:items-center gap-8  md:ml-[10%] mt-16 md:mt-0 ml-10  "> */}
        <div className="flex flex-col max-w-[1184px] md:flex-row md:items-center gap-8 px-[32px] md:px-[40px] lg:px-[72px] md:mt-0 mx-auto md:mx-0 lg:mx-auto mt-[100px]">
          <div className="hidden md:block absolute shrink-0 left-[calc(30%-360px)] w-[50px] h-[50px] bg-[#F9D1B2] rounded-full" />
          <div className="flex flex-col ">
            <h1 className="tracking-tight">
              <span className="block text-[60px] md:text-[96px] leading-[1] font-medium">
                India's
              </span>
              <div className="flex items-baseline text-[60px] md:text-[96px] leading-[1] font-medium">
                <span>Finest</span>
                <span className="w-[50px] h-[5px]  md:h-[8px] md:w-[80px] bg-[#fc7e2f] ml-1 md:ml-2"></span>
              </div>
              <span className="block text-[60px] md:text-[96px] leading-[1] font-medium">
                Crypto
              </span>
              <span className="block text-[60px] md:text-[96px] leading-[1] font-medium">
                Platform<span className="text-[#fc7e2f]">.</span>
              </span>
            </h1>

            <p className="text-[#999FAE]  md:text-lg mt-6 mb-8 max-w-[320px]">
              Buy, sell, trade and pay with cryptocurrency to anyone, anywhere,
              anytime 🚀
            </p>

            <div className="flex gap-4 flex-wrap md:flex-nowrap">
              <Button className="min-w-[160px] md:min-w-[180px] bg-[#fc7e2f] hover:bg-[#fc7e2f]/90 text-white h-[56px] md:h-[72px] text-base rounded-[16px] md:rounded-[20px]">
                Download App
              </Button>
              <button className="flex items-center gap-2 px-4 py-2 border-2 md:border rounded-lg text-[#999FAE] hover:bg-gray-50 transition-colors">
                <SquarePlay className="h-6 w-6" />
                <span className="hidden md:block">See It In Action!</span>
              </button>
            </div>
            <div className=" flex pt-[100px] md:py-[100px] gap-2">
              <img src={scroll} alt="scroll" className="w-6 h-6" />
              <h4 className="text-[#999fae]">Scroll to explore</h4>
            </div>

            {!showOrangeCircle && (
              <div className="overflow-hidden top-[100px] absolute right-[-100px] w-[180px] h-[180px] bg-[#fc7e2f] rounded-full" />
            )}
          </div>
          <div className="relative flex  w-full md:w-1/2 h-[300px] md:h-[768px] mt-8 md:mt-0">
            <div className="ml-[-50px] left-[10%]  absolute md:top-[40px] md:left-[100px]  w-full md:min-w-[768px]">
              <img
                className=" sm:w-[400px] md:w-[100%]"
                src={kryptoOffer}
                alt="Krypto app"
              />
            </div>
            {/* <div className="absolute  md:top-[380px] md:right-[260px] "> */}
            {/*   <img */}
            {/*     className="w-full  md:h-[180px] h-[100px] sm:h-[140px] objectcover" */}
            {/*     alt="Cloud" */}
            {/*     src={cloud} */}
            {/*   /> */}
            {/* </div> */}
            {(showOrangeCircle || (!showOrangeCircle && !isDesktop)) && (
              <div className="absolute  md:top-[-50px] md:right-[-400px] md:pl-[-100px] pl-[60%]">
                <img
                  className="w-full  md:h-[300px] h-[100px] sm:h-[140px] object-cover object-left"
                  alt="Cloud"
                  src={cloud}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <Features />
      <Companion />
      <GetStarted />
      <CustomerReview />
      <Verified />
      <MediaAndNews />
      <TeamPage />
      <Download />
      <Footer />
    </>
  );
};
export default Home;
