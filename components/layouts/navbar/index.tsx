import React from "react";
import Image from "next/image";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Image
        src="/img/logo.svg"
        alt="GoForUmrah Logo"
        className="navbar__logo"
        width={120}
        height={26}
      />
      <div className="navbar__menu">
        <div className="navbar__menu-item">
          <p className="navbar__menu-item-text">IDR</p>
        </div>
        <div className="navbar__menu-item">
          <Image
            src="/img/globe.svg"
            alt="Globe Icon"
            className="navbar__menu-item-icon"
            width={20}
            height={20}
          />
          <p className="navbar__menu-item-text">En</p>
        </div>
        <div className="navbar__menu-item">
          <Image
            src="/img/heart.svg"
            alt="Heart Icon"
            className="navbar__menu-item-icon"
            width={20}
            height={20}
          />
          <Image
            src="/img/notification.svg"
            alt="Notification Icon"
            className="navbar__menu-item-icon"
            width={20}
            height={20}
          />
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
