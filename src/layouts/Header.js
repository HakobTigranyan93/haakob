import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full pt-[50px] px-[100px] bg-white">
      <div className="bg-[#666666] px-[22px] flex justify-between items-center relative rounded-2xl h-[80px]">
        <div className="flex items-center space-x-6">
          <BurgerMenu onClick={toggleMenu} />
          <div className="text-white text-[24px]">Logo</div>
        </div>

        {isMenuOpen && (
          <div className="space-x-4 text-white hidden md:flex items-center">
            <a href="">Home</a>
            <a href="">Sport</a>
            <a href="">Crypto</a>
            <a href="">Trading</a>
            <a href="">Mems</a>
            <a href="">Trainings</a>
            <a href="">About Us</a>
            <a href="">Contact Us</a>
            <button className="rounded-[8px] text-black bg-white py-[8px] px-[22px] ml-[30px]">
              Sign in
            </button>
            <button className="rounded-[8px] text-black bg-white py-[8px] px-[22px] ml-[12px] mr-[22px]">
              Sign up
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
