import React from "react";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import mic from "../../public/mic.png";

import camera from "../../public/camera.png";

const Seorch = () => {
  return (
    <div className=" items-center justify-center m-[220px] ms-[380px] ">
      <div className="ms-[260px]">
        {" "}
        <h1 className=" animate-bounce text-blue-700 font-extrabold text-8xl mb-7">
          Google
        </h1>
      </div>
      <div className=" w-[565px] bg-[#fff] rounded-full p-2  flex items-center ms-[144px] border-solid border-blue-600 border-4">
        <IconButton>
          <SearchIcon className="animate-spin" />
        </IconButton>
        <input
          type="text"
          className="w-full outline-none border-0"
          placeholder="Search Google or type a URL"
        />
        <IconButton>
          <img src={mic} alt="" className="w-[15px] animate-pulse" />
        </IconButton>{" "}
        <IconButton>
          <img src={camera} alt="" className="w-[20px] animate-pulse" />
        </IconButton>
      </div>
    </div>
  );
};

export default Seorch;
