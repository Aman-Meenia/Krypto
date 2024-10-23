import { X } from "lucide-react";
import { SheetClose } from "../ui/sheet";
const MenuBar = () => {
  return (
    <>
      <div className="min-h-screen bg-white flex flex-col">
        <header className="flex justify-between items-center mt-10 px-4">
          <div className="flex-shrink-0">
            <SheetClose>
              <X className="w-7 h-7" />
            </SheetClose>
          </div>
          <div className="flex-grow flex justify-center">
            <a href="#">
              <img
                className="w-[100px]"
                src="https://www.letskrypto.com/img/krypto-logo-nas.png"
                alt="Krypto Logo"
              />
            </a>
          </div>
        </header>
        <div className="flex flex-col items-center mt-10 text-[18px]">
          <a href="#features" className="text-[#999FAE] mb-[24px]">
            Features
          </a>
          <a href="#fees" className="text-[#999FAE]  mb-[24px]">
            Fees
          </a>
          <a href="#kryptopedia" className="text-[#999FAE] mb-[24px]">
            Kryptopedia
          </a>
          <a href="#terms" className="text-[#999FAE]  mb-[24px]">
            Terms
          </a>
        </div>

        <div className="flex justify-center">
          <img
            className="max-w-[350px]"
            src="https://www.letskrypto.com/img/cus-main-pic-3.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default MenuBar;
// <img src="https://www.letskrypto.com/img/cus-main-pic-3.png" alt="" />
