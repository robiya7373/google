import React from "react";
import Telegram from "../../public/telegram.jpg";
import Instagram from "../../public/instagram.jpg";
import Linkedin from "../../public/linkedin.jpg";
import Pinterest from "../../public/pinterest.jpg";
import Tiktok from "../../public/tiktok.jpg";
import Facebook from "../../public/facebook.jpg";
import Maps from "../../public/twitter.jpg";
import Youtube from "../../public/youtube.jpg";

const SeorchNav = () => {
  return (
    <div className=" animate-pulse w-[350px] grid grid-cols-4 gap-6 ms-[620px]">
      <a href="https://web.telegram.org/k/">
        <img src={Telegram} className=" rounded-[50px]" />
      </a>
      <a href="https://www.instagram.com/">
        <img src={Instagram} className=" rounded-[50px]" />
      </a>
      <a href="https://www.linkedin.com/feed/">
        <img src={Linkedin} className=" rounded-[50px]" />
      </a>
      <a href="https://www.pinterest.com/">
        <img src={Pinterest} className=" rounded-[50px]" />
      </a>
      <a href="https://www.facebook.com/">
        <img src={Facebook} className=" rounded-[50px]" />
      </a>
      <a href="https://www.tiktok.com/">
        <img src={Tiktok} className=" rounded-[50px]" />
      </a>
      <a href="https://www.youtube.com/">
        <img src={Youtube} className=" rounded-[50px]" />
      </a>
      <a href="https://www.google.com/maps">
        <img src={Maps} className=" rounded-[50px]" />
      </a>
    </div>
  );
};

export default SeorchNav;
