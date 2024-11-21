function VideoCourses({ coursesData }) {
  return (
    <div className="flex justify-between items-center bg-[#fff] p-[100px] space-x-[20px] ">
      <div className="w-1/4">
        <h2 className="text-[#1a1a1a] text-[32px] font-bold pb-[6px]">
          Video Courses
        </h2>
        <p className="leading-[24px] text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore. Sed do eiusmod tempor incididunt
          ut labore.
        </p>
      </div>
      {coursesData.slice(0, 3).map((course, index) => (
        <div key={index} className="w-1/4">
          <div className="h-[280px] w-full flex items-center justify-center bg-[#e8e8e8] rounded-[8px]">
            <p>+</p>
          </div>
          <p className="pt-[12px] text-[#666666] text-[12px]">{course.date}</p>
          <h2 className="pt-[4px] text-[#1a1a1a] text-[20px] font-bold">
            {course.title}
          </h2>
          <p className="pt-[10px] text-[#666666] text-[16px]">
            {course.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default VideoCourses;
