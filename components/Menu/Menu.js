import React from "react";

const Menu = () => {
  return <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50">
     <button
        className="absolute top-14 right-5 text-subTitle uppercase tracking-[1.4px] cursor-pointer"
        onClick={closeMenu}
        type="button"
      >
        Close
      </button>
  </div>
};

export default Menu;
