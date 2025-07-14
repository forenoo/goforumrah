import React from "react";
import Logo from "@/public/img/logo.svg";
import GlobeIcon from "@/public/img/globe.svg";
import HeartIcon from "@/public/img/heart.svg";
import NotificationIcon from "@/public/img/notification.svg";
import Image from "next/image";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo className="navbar__logo-img" />
      <div className="navbar__menu">
        <div className="navbar__menu-item">
          <p className="navbar__menu-item-text">IDR</p>
        </div>
        <div className="navbar__menu-item">
          <GlobeIcon />
          <p className="navbar__menu-item-text">En</p>
        </div>
        <div className="navbar__menu-item">
          <HeartIcon />
          <NotificationIcon />
          <Image
            src="/img/avatar.png"
            alt="Avatar"
            className="navbar__menu-item-avatar"
            width={32}
            height={32}
          />
        </div>
      </div>
    </nav>
  );
}
