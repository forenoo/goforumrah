import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./inspiration-trip.scss";

export default function InspirationTripSection() {
  return (
    <section className="inspiration-trip-section section-padding">
      <div className="section-header">
        <h3 className="heading-3">Get inspiration for your next trip</h3>
        <p className="lg lg--regular">
          Know your destination like your own city.
        </p>
      </div>
      <div className="inspiration-trip__content">
        <div className="inspiration-trip__item">
          <div className="inspiration-trip__item-image-box">
            <Image
              width={370}
              height={240}
              src="/img/trip-1.png"
              alt="Inspiration Trip 1"
              className="inspiration-trip__item-image"
            />
          </div>
          <div className="inspiration-trip__item-content">
            <h5 className="heading-5">
              7 unique stays for your next Arabican holiday
            </h5>
            <p className="lg lg--regular inspiration-trip__item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <Link
            href="#"
            className="base base--bold inspiration-trip__item-link"
          >
            Read more
          </Link>
        </div>
        <div className="inspiration-trip__item">
          <div className="inspiration-trip__item-image-box">
            <Image
              width={370}
              height={240}
              src="/img/trip-2.png"
              alt="Inspiration Trip 2"
              className="inspiration-trip__item-image"
            />
          </div>
          <div className="inspiration-trip__item-content">
            <h5 className="heading-5">
              The 9 most beautiful cities for autumn travel
            </h5>
          </div>
          <Link
            href="#"
            className="base base--bold inspiration-trip__item-link"
          >
            Read more
          </Link>
        </div>
        <div className="inspiration-trip__item">
          <div className="inspiration-trip__item-image-box">
            <Image
              width={370}
              height={240}
              src="/img/trip-3.png"
              alt="Inspiration Trip 3"
              className="inspiration-trip__item-image"
            />
          </div>
          <div className="inspiration-trip__item-content">
            <h5 className="heading-5">
              The top 10 places to celebrate Islamic New year
            </h5>
          </div>
          <Link
            href="#"
            className="base base--bold inspiration-trip__item-link"
          >
            Read more
          </Link>
        </div>
      </div>
      <Link href="#" className="base base--bold inspiration-trip__link">
        <p>Read all blogs</p>
        <Image
          width={24}
          height={24}
          src="/img/arrowcircleright.svg"
          alt="Arrow Circle Right"
          className="inspiration-trip__link-icon"
        />
      </Link>
    </section>
  );
}
