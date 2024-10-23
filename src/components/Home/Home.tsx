import { Button } from "../ui/button";
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

const Home = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const showOrangeCircle = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      <div className="h-fit bg-white overflow-hidden relative">
        {isDesktop ? <DesktopHeader /> : <Header />}

        {showOrangeCircle && (
          <div className="overflow-hidden absolute top-[-98px] right-[calc(50%-1330px)] w-[1220px] h-[1220px] bg-[#fc7e2f] rounded-full" />
        )}

        <main className="relative container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-8  md:ml-[10%] mt-16 md:mt-0 ml-10  ">
            <div className="hidden md:block absolute left-6 w-[50px] h-[50px] bg-[#F9D1B2] rounded-full" />
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
                Buy, sell, trade and pay with cryptocurrency to anyone,
                anywhere, anytime 🚀
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
              {!showOrangeCircle && (
                <div className="overflow-hidden top-[-30px] absolute right-[-145px] w-[180px] h-[180px] bg-[#fc7e2f] rounded-full" />
              )}
            </div>
            <div className="relative flex  w-full md:w-1/2 h-[400px] md:h-[768px] mt-8 md:mt-0">
              <div className="ml-[-50px] absolute left-0 h-full w-full md:min-w-[768px]">
                <img
                  className="h-full w-full"
                  src="https://www.letskrypto.com/img/cus-main-pic-3.png"
                  alt="Krypto app"
                />
              </div>
              {(showOrangeCircle || (!showOrangeCircle && !isDesktop)) && (
                <div className="absolute md:top-[10px] md:right-[-300px] md:pl-[-100px] pl-[60%]">
                  <img
                    className="w-full md:h-[300px] h-[140px] object-cover object-left"
                    alt="Cloud"
                    src="https://www.letskrypto.com/img/cus-main-pic-1.png"
                  />
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
      <Features />
      <Companion />
      <CustomerReview />
      <Verified />
      <MediaAndNews />
      <TeamPage />
      <Footer />
    </>
  );
};
export default Home;
