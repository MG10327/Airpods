import React, { useEffect } from "react";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      const header_sub = document.querySelector("#header_sub");
      const shouldAddStyles = window.scrollY > 650;

      header?.classList.toggle("bg-[#1B1B1C]", shouldAddStyles);
      header?.classList.toggle("border-b", shouldAddStyles);
      header?.classList.toggle("border-b-[#3D3D3D]", shouldAddStyles);
      header_sub?.classList.toggle("border-none", shouldAddStyles);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full lg:h-16 h-24 z-[100] flex justify-center fixed top-0">
      <div id="header_sub" className="lg:w-[70%] w-full px-4 h-full pt-2 flex items-center border-b border-b-[#3D3D3D]" >
        <div className="w-1/2 h-full flex items-center justify-start">
          <h4 className="text-xl">
            AirPods Pro <br className="lg:hidden" /> (2nd generation)
          </h4>
        </div>
        <div className="w-1/2 h-full flex items-center justify-end">
          <ul className="text-[#D0D1D1] lg:flex hidden">
            <li className="text-xs px-3 py-1 text-[#777676]">Overview</li>
            <li className="text-xs px-3 py-1 hover:text-[#0170E3] cursor-pointer">
              Tech Specs
            </li>
            <li className="text-xs px-3 py-1 hover:text-[#0170E3] cursor-pointer">
              Compare
            </li>
          </ul>
          <button className="text-xs bg-[#0170E3] ml-4 hover:bg-[#127CE5] px-3 rounded-full py-1">
            Buy
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
