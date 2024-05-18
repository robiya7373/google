import React from "react";

const HeaderApp = ({ img, title }) => {
  return (
    <div className=" w-[95px] h-[95px] hover:bg-[#eee] flex items-center justify-center flex-col gap-2 rounded-lg">
      <img
        src={img}
        alt="icon"
        className="w-[40px] h-[40px] rounded-full object-contain"
      />
      <h2 className="text-center text-[14px]">{title.slice(0, 15)}</h2>
    </div>
  );
};

export default HeaderApp;
