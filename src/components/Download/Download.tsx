const Download = () => {
  return (
    <div className="w-full h-fit py-[80px] md:pt-[150px] md:pb-[100px] bg-white overflow-x-hidden">
      <div className="flex flex-col max-w-[1384px] gap-8  md:px-[40px] lg:px-[72px] md:mt-0 mx-auto md:mx-0 lg:mx-auto ">
        <div className="w-full flex bg-[#fc7e2f] flex-col h-[700px] md:rounded-[50px] pt-[40px] px-[16px] md:p-[40px] lg:p-[72px] m-auto">
          <div className="w-full flex flex-col pt-[30px] md:px-[40px] lg:px-[72px] items-center text-center">
            <div>
              <h1 className="text-white text-5xl md:text-[48px] lg:text-[68px] xl:text-[80px] mb-8 md:mb-12">
                Ready to experience the Krypto app?
                <span className="text-orange-500">.</span>
              </h1>
            </div>
            <div>
              <h2 className="text-[16px] md:text-[18px] mb-4 text-white">
                Explore the world of cryptocurrencies by clicking the button
                below
              </h2>
            </div>
            <div className="pt-8">
              <button className=" text-[#6d3c14] bg-white h-[70px] w-56 rounded-2xl">
                Download Now
              </button>
            </div>
          </div>
        </div>
        {/* <div className="absolute  transform -translate-x-1/2 -translate-y-1/2"> */}
        {/*     <img */}
        {/*       className="h-[1000px] w-[1000px]" */}
        {/*       src="https://www.letskrypto.com/img/cus-main-pic-3.png" */}
        {/*       alt="Krypto app" */}
        {/*     /> */}
        {/*   </div> */}
      </div>
    </div>
  );
};

export default Download;
