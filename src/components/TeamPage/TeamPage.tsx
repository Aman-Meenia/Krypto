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

// import TeamMember from "./TeamMember";
//
// const TeamPage = () => {
//   return (
//     <>
//       <div className="w-full h-fit py-[80px] md:pt-[150px] md:pb-[100px] bg-white overflow-x-hidden">
//         <div className="flex flex-col max-w-[1184px] md:flex-row md:items-center gap-8 px-[32px] md:px-[40px] lg:px-[72px] md:mt-0 mx-auto md:mx-0 lg:mx-auto">
//           <div className="w-full flex flex-col gap-14">
//             <div className="w-full flex flex-col md:flex-row relative">
//               {/* Decorative elements */}
//               <div className="hidden lg:block absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full -translate-y-1/2 translate-x-1/2" />
//               <div className="hidden md:block absolute top-[60px] left-[40%] w-16 h-16 bg-orange-200 rounded-full" />
//
//               <div className="w-full">
//                 <div className="w-full flex flex-col items-start">
//                   <div className="w-full max-w-5xl">
//                     <span className="text-[#C75C6F] text-[16px] md:text-[20px] font-medium mb-4 block">
//                       Team
//                     </span>
//
//                     <h1 className="text-[40px] md:text-[65px] lg:text-[80px] font-bold leading-tight mb-8">
//                        Get to know the creators of Krypto
//                       <span className="text-orange-500">.</span>
//                     </h1>
//
//                     <p className="text-[#00000080] text-lg md:text-xl max-w-2xl">
//                       Many ideas grow better when transplanted into another mind
//                       than the one where they sprang up.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//
//               {/* Image section */}
//               <div className="hidden lg:flex absolute top-[-110px] left-[70%] w-[400px] h-[800px]">
//                 <img
//                   src="https://www.letskrypto.com/img/lamp.png"
//                   alt="Pink desk lamp"
//                   className="object-contain h-[500px]"
//                 />
//                 <div className="hidden lg:block absolute ml-[250px] mt-[220px] w-10 h-10 bg-[#c5edea] rounded-full" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <div className="w-full h-fit py-[80px] md:pt-[150px] md:pb-[100px] bg-white overflow-x-hidden"> */}
//       {/*   <div className="flex flex-col max-w-[1184px] md:flex-row md:items-center gap-8 px-[32px] md:px-[40px] lg:px-[72px] md:mt-0 mx-auto md:mx-0 lg:mx-auto"> */}
//       {/*     <div className="hidden lg:block absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20" /> */}
//       {/*     <div className="absolute top-[60px] left-[40%] w-16 h-16 bg-orange-200 rounded-full" /> */}
//       {/**/}
//       {/*     <div className="w-full mx-auto py-20 sm:px-6 lg:px-8 pb-20"> */}
//       {/*       <div className="relative flex justify-center items-start"> */}
//       {/*         <div className="w-full max-w-5xl pt-10 mr-32"> */}
//       {/*           <span className="text-[#C75C6F] text-[20px] mb-2 block"> */}
//       {/*             Team */}
//       {/*           </span> */}
//       {/*           <h1 className="text-5xl md:text-[65px] lg:text-[90px] mb-4 mr-16"> */}
//       {/*             Get to know the creators of Krypto */}
//       {/*             <span className="text-orange-500">.</span> */}
//       {/*           </h1> */}
//       {/*           <p className="text-gray-500 text-xl mr-32"> */}
//       {/*             Many ideas grow better when transplanted into another mind */}
//       {/*             than the one where they sprang up. */}
//       {/*           </p> */}
//       {/*         </div> */}
//       {/**/}
//       {/*         <div className="absolute flex flex-row mt-[-110px] left-[70%] w-[400px] h-[800px]"> */}
//       {/*           <img */}
//       {/*             src="https://www.letskrypto.com/img/lamp.png" */}
//       {/*             alt="Pink desk lamp" */}
//       {/*             className="object-contain h-[500px]" */}
//       {/*           /> */}
//       {/*           <div className="hidden lg:block ml-[250px] mt-[220px] absolute w-10 h-10  bg-[#c5edea] rounded-full" /> */}
//       {/*         </div> */}
//       {/*       </div> */}
//       {/*     </div> */}
//       {/*   </div> */}
//       {/* </div> */}
//       <TeamMember />
//     </>
//   );
// };
// export default TeamPage;
