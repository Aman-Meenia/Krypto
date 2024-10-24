import TeamMember from "./TeamMember";

const TeamPage = () => {
  return (
    <>
      <div className="w-full h-fit py-[80px] md:pt-[150px] md:pb-[100px] bg-white overflow-x-hidden">
        <div className="flex flex-col max-w-[1184px] md:flex-row md:items-center gap-8 px-[32px] md:px-[40px] lg:px-[72px] md:mt-0 mx-auto md:mx-0 lg:mx-auto overflow-hidden">
          <div className="w-full flex flex-col gap-14 mb-[100px]">
            <div className="w-full flex flex-col ">
              <div className="">
                <h2 className="text-[16px] md:text-[20px] text-[#C75C6F] mb-4 font-bold">
                  Team
                </h2>
              </div>
              <div className=" overflow-hidden">
                <h1 className="text-black text-5xl md:text-[68px] xl:text-[80px] mb-8 md:mb-12 overflow-hidden">
                  Get to know the creators of krypto
                </h1>
                <p className="max-w-[480px] text-[#999fae] text-[16px] md:text-[18px] overflow-auto">
                  Many ideas grow better when transplanted into another mind
                  than the one where they sprang up.
                </p>
              </div>
            </div>
          </div>
        </div>

        <TeamMember />
      </div>
    </>
  );
};

export default TeamPage;
