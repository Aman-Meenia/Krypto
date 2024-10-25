import cursor from "/img/Cursor.png";
import wave from "/img/Wave.svg";
import leftHand from "/img/LeftHand.png";
import rightHand from "/img/RightHand.png";
import diamond from "/img/Diamond.png";
const GetStarted = () => {
  return (
    <div className="w-full h-[800px] md:h-[923px] py-[80px] md:pt-[150px] md:pb-[100px] bg-[#f9d1b2] overflow-hidden relative">
      <div className=" absolute left-0 right-0 bottom-0 md:bottom-[-57px] lg:bottom-[-100px] xl:bottom-[-137px]">
        <img src={wave} alt="" className="w-full h-full " />
      </div>
      <div className="z-10 absolute left-[-40px] md:left-[-100px] lg:left-[0px] xl:left-[-100px] lg:w-[500px] lg:h-[840px]  xl:w-[662px] xl:h-[1112px] xl:bottom-[-400px] lg:bottom-[-200px] md:bottom-[-250px] bottom-[-100px]">
        <img
          src={leftHand}
          alt="Hand"
          className="w-[400px] h-[670px]  lg:w-[500px] lg:h-[840px]  xl:w-[662px] xl:h-[1112px] bottom-[-240px] "
        />
      </div>
      <div className="hidden md:block z-10  absolute md:right-[-250px] lg:right-[0px] xl:right-[-100px] w-[534px]  h-[1221px] lg:w-[500px] lg:h-[840px]  xl:w-[662px] xl:h-[1112px] xl:bottom-[-530px] lg:bottom-[-300px] md:bottom-[-750px]">
        <img
          src={rightHand}
          alt="Hand"
          className="w-[400px] h-[670px]  lg:w-[500px] lg:h-[840px]  xl:w-[662px] xl:h-[1112px] bottom-[-240px] "
        />
      </div>

      <div className="absolute top-[20px] md:top-[37px] right-[calc(50%-390px)] md:right-[calc(50%-604px)]   w-[800px] md:w-[897px]  ">
        <img src={diamond} alt="DiamondIcon" />
      </div>

      <div className="w-full flex max-w-[1184px] h-[800px] md:h-[923px] px-[32px] md:px-[40px] lg:px-[72px] md:mt-0 mx-auto md:mx-0 lg:mx-auto relative">
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col relative z-10">
            <div className="">
              <h2 className="text-[16px] md:text-[20px] font-bold mb-4 text-[#C75C6F]">
                Get Started with Krypto
              </h2>
            </div>
            <div>
              <h1 className="text-[#7d3c14] text-[78px] md:text-[130px] xl:text-[144px] mb-8 md:mb-12 leading-[70px] md:leading-[130px] xl:leading-[140px]">
                Get Your
                <br />
                Hands'n
                <span className="text-white"> Krypto</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="hidden absolute md:block w-full justify-center top-[35%] left-[calc(50%-200px)]">
          h
          <div className="absolute z-0 flex bg-[#fc7e2f] h-[204px] w-[204px] rounded-full transform -translate-y-1/2"></div>
        </div>

        <div className="absolute w-full flex top-400%] right-[100px]">
          <div className="absolute z-0 flex bg-[white] h-[95px] w-[95px] rounded-full transform -translate-y-1/2"></div>
        </div>

        <div className=" hidden lg:block absolute top-[40%] left-[calc(50%-100px)]">
          <img src={cursor} alt="Cursor" />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
