import React from "react";
import { IconButton } from "@mui/material";
// import SearchIcon from '@mui/icons-material/Search';
import mic from "../../public/mic.png"

import camera from "../../public/camera.png"

const Seorch = () => {
  return (
    <div className=" w-[565px] bg-[#fff] rounded-full px-2 py-2 gap-3 flex items-center">
      <IconButton>
        {/* <SearchIcon /> */}
      </IconButton>
      <input
        type="text"
        className="w-full outline-none border-0"
        placeholder="Search Google or type a URL"
      />
      <IconButton>
        <img src={mic} alt="" className="w-[15px]" />
      </IconButton>{" "}
      <IconButton>
        <img src={camera} alt="" className="w-[20px]" />
      </IconButton>
    </div>
  );
};

export default Seorch;
