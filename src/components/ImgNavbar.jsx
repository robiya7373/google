import { Add, Close, ExpandMore, Logout } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import GoogleImg from "../../public/photoImg.jpg";

const ImgNavbar = ({ setAvatar }) => {
  const [click, setClick] = useState(false);
  return (
    <div className="p-6 relative bg-slate-100 h-full rounded-[20px] ">
      <IconButton
        sx={{ position: "absolute", right: "10px", top: "15px" }}
        onClick={() => setAvatar(false)}
      >
        <Close />
      </IconButton>
      <h2 className="text-center">robiya7373@gmail.com</h2>
      <div className="flex justify-center items-center flex-col mt-5">
        <img src={GoogleImg} alt="" className=" rounded-[500px]  w-[40px]" />
        <h3 className=" font-medium mt-[10px] text-[20px] ">Hi,Robiya</h3>
        <button className="border rounded-full px-7 py-3 text-[15px] border-[#333] mt-4 hover:bg-[#0000ff18] text-blue-600">
          Manage your Google Account
        </button>
      </div>
      <div>
        <div
          onClick={() => setClick(!click)}
          className={`w-[full] bg-[#fff] hover:bg-[#e0e0e0f5] cursor-pointer rounded-t-[20px] ${
            !click && "rounded-b-[20px]"
          }   mt-5 p-[20px]`}
        >
          <div className="flex justify-between">
            <h2 className="text-[15px]">Hide more accounts</h2>
            <ExpandMore
              sx={{ bgcolor: "#eee", borderRadius: "50px" }}
              className={`${click ? "rotate-[180deg]" : "rotate-[0]"}`}
            />
          </div>
        </div>
        {click && (
          <>
            <div className=" bg-[#fff] hover:bg-[#e0e0e0f5] border-t-[2px]   p-[16px]">
              <div className="flex items-center gap-2">
                <img src={GoogleImg} className=" rounded-[500px]  w-[40px]" />
                <div className="">
                  <h2>Robiya Erkinboyeva</h2>
                  <p className="text-[12px]">robiya7373@gmail.com</p>
                </div>
              </div>
            </div>{" "}
            <div className=" bg-[#fff] hover:bg-[#e0e0e0f5]  border-t-[2px]  p-[20px]">
              <div className="flex items-center gap-2">
                <Add />
                <h2>Sign out all accounts</h2>
              </div>
            </div>
            <div className=" bg-[#fff] hover:bg-[#e0e0e0f5]  border-t-[2px]  p-[20px]">
              <div className="flex items-center gap-2">
                <Logout />
                <h2>Sign out all accounts</h2>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="flex justify-center items-center mt-2">
        <p className="text-[12px]">Privacy Policy </p>-
        <p className=" text-[12px]"> Terms of Service</p>
      </div>
    </div>
  );
};

export default ImgNavbar;
