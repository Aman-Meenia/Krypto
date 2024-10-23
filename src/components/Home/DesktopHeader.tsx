import { useMediaQuery } from "usehooks-ts";

const DesktopHeader = () => {
  const showSingup = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      <div className="z-0 absolute top-0 left-0 w-1/3 h-1/3 bg-[#c5edea] rounded-full -translate-x-1/2 -translate-y-1/2 " />

      <header className="relative z-10 container mx-auto px-6 pt-12 pb-4 flex justify-between items-center">
        <div className="flex items-center space-x-14">
          <a href="#">
            <img
              className="w-[160px]"
              src="https://www.letskrypto.com/img/krypto-logo-nas.png"
              alt="Krypto Logo"
            />
          </a>
          <div>
            <nav className="flex space-x-14 text-[18px]">
              <a href="#" className="text-[#999FAE] hover:text-[#292930]">
                Features
              </a>
              <a href="#" className="text-[#999FAE] hover:text-[#292930]">
                Fees
              </a>
              <a href="#" className="text-[#999FAE] hover:text-[#292930]">
                KryptoPortfolio
              </a>
              <a href="#" className="text-[#999FAE] hover:text-[#292930]">
                Terms
              </a>
            </nav>
          </div>
        </div>
        {showSingup && (
          <div className="flex justify-end">
            <a
              className="min-w-[180px] bg-[#f9d1b2] text-[#7d3c14] h-[72px] text-[16px] rounded-[20px] justify-center flex items-center"
              id="krypto_link1"
              href="https://web.letskrypto.com/"
            >
              Sign In
            </a>
          </div>
        )}
      </header>
    </>
  );
};

export default DesktopHeader;
