import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./banner-section.scss";

export default function BannerSection() {
  return (
    <section className="banner-section">
      <div className="banner__content">
        <div className="banner__content-icon-box">
          <Image
            src="/img/facemask.svg"
            alt="facemask"
            width={24}
            height={24}
          />
        </div>
        <div className="banner__content-text">
          <p className="xl xl--bold">Keep calm with health protocol</p>
          <p className="lg lg--regular banner__content-text-description">
            Get the advice you need. Check the latest COVID-19 restrictions
            before you travel.
          </p>
        </div>
        <Link href="#" className="banner__content-link lg lg-bold">
          Learn more
        </Link>
      </div>
    </section>
  );
}
