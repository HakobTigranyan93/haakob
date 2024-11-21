import HeaderSection from "./Section/HeaderSection";

function Sport({ sportsData }) {
  return (
    <div className="bg-[#666666] font-poppins">
      <div className="px-[100px]">
        <HeaderSection
          title="Sport"
          buttonText="See all"
          titleClass="text-[#fefefe]"
          buttonClass="text-[#e8e8e8]"
          containerClass="pt-[80px]"
          reverseOrder={true}
        />

        <div className="pt-[50px] pb-[100px] flex flex-wrap justify-between space-x-[10px]">
          {sportsData.slice(0, 4).map((sport, index) => (
            <div
              key={index}
              className="flex justify-start bg-[#e8e8e8] rounded-[8px] w-full sm:w-[48%] lg:w-[23%] mb-4"
            >
              <div className="p-[46px] m-[10px] bg-[#b3b3b3] rounded-[8px]">
                +
              </div>
              <div className="py-[32px]">
                <p className="text-[28px] text-[#1a1a1a]">{sport.name}</p>
                <p className="text-[24px] text-[#666666]">
                  Today games: {sport.games}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sport;
