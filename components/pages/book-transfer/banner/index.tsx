import Link from "next/link";
import React from "react";
import CarIcon from "@/public/img/car.svg";
import "./banner.scss";

export default function BookTransferBannerSection() {
  return (
    <section className="book-transfer-banner-section">
      <div className="banner__content">
        <div className="banner__content-icon-box">
          <CarIcon />
        </div>
        <div className="banner__content-text">
          <p className="xl xl--bold">
            Clean cars. Flexible bookings. Socially distant rental counters.
          </p>
          <p className="lg lg--regular banner__content-text-description">
            We’re working with our partners to keep you safe and in the driving
            seat.
          </p>
        </div>
        <Link href="#" className="banner__content-link lg lg-bold">
          Learn more
        </Link>
      </div>
    </section>
  );
}
