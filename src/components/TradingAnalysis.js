import HeaderSection from "./Section/HeaderSection";

function TradingAnalysis() {
  return (
    <div className="px-[100px] pb-[100px]">
      <HeaderSection
        title="Trading Analysis"
        buttonText="See all"
        titleClass="text-[#1a1a1a]"
        buttonClass="text-[#666666]"
        containerClass="pt-[80px]"
      />

      <div className="pt-[50px]">
        <div className="bg-[#b3b3b3] rounded-[8px] w-full h-[500px]"></div>
      </div>
    </div>
  );
}

export default TradingAnalysis;
