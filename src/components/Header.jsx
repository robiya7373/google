import { Apps } from "@mui/icons-material";
import {  IconButton } from "@mui/material";
import React, { useState } from "react";
import { appData } from "../data";
import GoogleImg from "../../public/photoImg.jpg";
import ImgNavbar from "./ImgNavbar";
import HeaderApp from "./HeaderApp";

const Header = () => {
  const [app, setApp] = useState(false);
  const [avatar, setAvatar] = useState(false);
  const handleApp = () => {
    setApp(!app);
    setAvatar(false);
  };
  const handleAvatar = () => {
    setApp(false);
    setAvatar(!avatar);
  };
  return (
    <div className=" flex relative justify-end gap-3 items-center p-[20px]">
      <a
        href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
        className="text-blue-700"
      >
        Gmail
      </a>
      <a
        href="https://www.google.com/imghp?hl=en&tab=ri&authuser=0&ogbl"
        className="text-blue-700"
      >
        Images
      </a>
      <div>
        <IconButton onClick={handleApp}>
          <Apps className="text-blue-600" />
        </IconButton>
        {app && (
          <div className="w-[370px] absolute right-4 top-[90px] h-[470px] overflow-y-scroll p-4 rounded-3xl bg-slate-100">
            <div className="bg-[#fff]  p-3 rounded-lg flex flex-wrap justify-between">
              {appData.map((item, index) => (
                <HeaderApp img={item.img} title={item.name} />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="">
        <IconButton onClick={handleAvatar}>
          <img
            src={GoogleImg}
            alt=""
            className=" rounded-[500px] border-solid border-blue-600 border-4 w-[40px]"
          />
        </IconButton>
        {avatar && (
          <div className="w-[370px] absolute right-8 top-[90px]  rounded-3xl bg-white">
            <ImgNavbar setAvatar={setAvatar} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
