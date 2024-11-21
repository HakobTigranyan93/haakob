function CryptoNews({ newsData }) {
  return (
    <div className="pt-[80px] px-[100px] font-poppins">
      <div className="flex justify-between items-center pt-[80px]">
        <h1 className="text-[32px]  font-bold text-[#1a1a1a]">Crypto News</h1>
        <button className="text-[32px] text-[#666666]">See all</button>
      </div>

      <div className="pt-[50px] pb-[100px] flex flex-wrap justify-between space-x-[20px]">
        {newsData.slice(0, 3).map((news, index) => (
          <div
            key={index}
            className="bg-[#e8e8e8] rounded-[8px] w-full sm:w-[48%] lg:w-[30%] mb-4 flex flex-col"
          >
            <div className="bg-[#b3b3b3] rounded-[8px] w-full h-[385px]"></div>

            <div className="py-[32px] px-[30px] flex flex-col justify-between flex-grow">
              <div>
                <p className="pb-[6px]">{news.timeAgo}</p>
                <p className="pb-[14px] text-[30px] text-[#1a1a1a]">
                  {news.title}
                </p>
                <p className="text-[22px] text-[#666666] pb-[66px]">
                  {news.description}
                </p>
              </div>
              <div className="flex justify-between mt-auto">
                <div className="flex justify-between space-x-[102px]">
                  <p>View: {news.views}</p>
                  <p>Share: {news.shares}</p>
                </div>
                <p>Share</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CryptoNews;