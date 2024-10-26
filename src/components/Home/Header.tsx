import { AlignLeft } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet";
import MenuBar from "./MenuBar";
import kryptoLogo from "/img/KryptoLogo.png";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center mt-10 px-4">
        <div className="flex-shrink-0">
          <Sheet>
            <SheetTrigger>
              <AlignLeft className="w-7 h-7" />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-full max-w-full sm:max-w-full md:max-w-full p-0 "
              hideClose
            >
              <MenuBar />
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex-grow flex justify-center">
          <a href="#">
            <img className="w-[100px]" src={kryptoLogo} alt="Krypto Logo" />
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
