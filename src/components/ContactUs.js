function ContactUs() {
  return (
    <div className="bg-[#666666] font-poppins">
      <div className="p-[100px] flex justify-center space-x-[105px]">
        <div className="h-[536px] bg-[#fefefe] rounded-[8px]">
          <p className="py-[250px] px-[406px]">+</p>
        </div>
        <div className="pt-[50px]">
          <h1 className=" text-[36px] text-[#fefefe] font-bold ]">
            Contact Us
          </h1>
          <p className="pt-[22px] pb-[48px] text-[18px] text-[#fefefe] leading-[26px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
          </p>
          <form action="/submit" method="POST">
            <div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600 mb-2" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 border bg-[#666666] rounded-[8px]"
                  placeholder="Name"
                />
              </div>
            </div>

            <div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 mb-2" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 border bg-[#666666] rounded-[8px]"
                  placeholder="Email Adress"
                />
              </div>
            </div>

            <div>
              <div className="mb-4">
                <label htmlFor="Message" className="block text-gray-600 mb-2" />
                <input
                  id="Message"
                  name="Message"
                  required
                  className="w-full p-3 border bg-[#666666] rounded-[8px]"
                  placeholder="Message"
                />
              </div>
            </div>
            <div className="pt-[32px]">
              <button
                type="submit"
                className="w-full p-3 bg-[#fefefe] text-[#1a1a1a] rounded-[8px] "
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
