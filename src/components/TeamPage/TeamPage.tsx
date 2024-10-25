import TeamMember from "./TeamMember";
import lamp from "/img/Lamp.png";
import teamPage from "/img/TeamPage.svg";

const TeamPage = () => {
  return (
    <>
      <div className="w-full h-fit py-[80px] md:pt-[150px] md:pb-[100px] bg-white overflow-x-hidden relative">
        <div className="z-10 flex flex-col max-w-[1184px] md:flex-row md:items-center gap-8 px-[32px] md:px-[40px] lg:px-[72px] md:mt-0 mx-auto md:mx-0 lg:mx-auto overflow-hidden relative">
          <div className="w-full flex flex-col gap-14 mb-[100px] relative">
            <div className="w-full flex flex-col ">
              <div className="pt-28 ">
                <h2 className="text-[16px] md:text-[20px] text-[#C75C6F] mb-4 font-bold">
                  Team
                </h2>
              </div>
              <div className=" overflow-hidden  sm:mr-[60px] lg:mr-20">
                <h1 className="text-black text-5xl md:text-[68px] xl:text-[80px] mb-8 md:mb-12 overflow-hidden">
                  Get to know the creators of krypto
                </h1>
                <p className="max-w-[480px] text-[#999fae] text-[16px] md:text-[18px] overflow-auto">
                  Many ideas grow better when transplanted into another mind
                  than the one where they sprang up.
                </p>
              </div>

              <div className=" hidden sm:block absolute sm:left-[65%] md:left-[75%] left-[80%] w-[500px] mr-[30px]">
                <img src={lamp} alt="" className="w-[400px] h-auto" />
              </div>
            </div>
          </div>
        </div>
        <div className=" z-0 absolute  top-0 left-[calc(50%-517px)] w-[1024px] h-[704px] ">
          <img src={teamPage} alt="MediaAndNews" className="w-auto h-[100%]" />
        </div>
        <div className="md:block hidden z-0 absolute left-0 w-full xl:pt-[32px] pt-[56px] ">
          <div className=" left-0 h-[1px]  bg-[#E3E6E9]"></div>
        </div>

        <TeamMember />
        <div className="md:block hidden z-0 absolute left-0 w-full  ">
          <div className=" left-0 h-[1px]  bg-[#E3E6E9]"></div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
