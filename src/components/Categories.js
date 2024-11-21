import HeaderSection from "./Section/HeaderSection.js";

function Categories({ categoriesData }) {
  return (
    <div className="font-poppins">
      <div className="px-[100px]">
        <HeaderSection
          title="Categories"
          buttonText="See all"
          titleClass="text-[#1a1a1a]"
          buttonClass="text-[#666666]"
          containerClass="pt-[80px]"
          reverseOrder={false}
        />

        <div className="pt-[50px] pb-[100px] flex justify-between gap-[20px]">
          {categoriesData.slice(0, 4).map((category, index) => (
            <div key={index} className="flex flex-col bg-[#e8e8e8] w-full">
              <div className="h-[386px] bg-[#e8e8e8]"></div>
              <div className="bg-[#666666] flex-grow">
                <p className="pt-[30px] text-center text-[#fefefe] text-[30px]">
                  {category.title}
                </p>
                <p className="pt-[12px] pb-[30px] text-[#e8e8e8] px-[30px] leading-[30px] text-[22px] text-center">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
