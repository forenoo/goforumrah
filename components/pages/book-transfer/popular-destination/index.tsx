import Image from "next/image";
import React from "react";
import "./popular-destination.scss";

export default function PopularDestinationSection() {
  return (
    <section className="popular-destination-section section-padding">
      <div className="section-header">
        <h3 className="heading-3">Popular destinations for book transfers</h3>
        <p className="base base--regular">
          Know your destination like your own city.
        </p>
      </div>
      <div className="popular-destination__content">
        <div className="popular-destination__item">
          <div className="popular-destination__image-box">
            <Image
              src="/img/popular-makkah.png"
              alt="Makkah"
              className="popular-destination__image"
              width={285}
              height={285}
            />
          </div>
          <div className="popular-destination__info">
            <h5 className="heading-5 popular-destination__info-title">
              Makkah
            </h5>
            <p className="popular-destination__info-description base base--regular">
              Start from
              <span className="base base--bold popular-destination__info-description-price">
                $ 50.00
              </span>
              <span className="popular-destination__info-description-day">
                / day
              </span>
            </p>
          </div>
        </div>
        <div className="popular-destination__item">
          <div className="popular-destination__image-box">
            <Image
              src="/img/popular-madinah.png"
              alt="Madinah"
              className="popular-destination__image"
              width={285}
              height={285}
            />
          </div>
          <div className="popular-destination__info">
            <h5 className="heading-5 popular-destination__info-title">
              Madinah
            </h5>
            <p className="popular-destination__info-description base base--regular">
              Start from
              <span className="base base--bold popular-destination__info-description-price">
                $ 56.00
              </span>
              <span className="popular-destination__info-description-day">
                / day
              </span>
            </p>
          </div>
        </div>
        <div className="popular-destination__item">
          <div className="popular-destination__image-box">
            <Image
              src="/img/popular-jeddah.png"
              alt="Jeddah"
              className="popular-destination__image"
              width={285}
              height={285}
            />
          </div>
          <div className="popular-destination__info">
            <h5 className="heading-5 popular-destination__info-title">
              Jeddah
            </h5>
            <p className="popular-destination__info-description base base--regular">
              Start from
              <span className="base base--bold popular-destination__info-description-price">
                $ 72.00
              </span>
              <span className="popular-destination__info-description-day">
                / day
              </span>
            </p>
          </div>
        </div>
        <div className="popular-destination__item">
          <div className="popular-destination__image-box">
            <Image
              src="/img/popular-riyadh.png"
              alt="Riyadh"
              className="popular-destination__image"
              width={285}
              height={285}
            />
          </div>
          <div className="popular-destination__info">
            <h5 className="heading-5 popular-destination__info-title">
              Riyadh
            </h5>
            <p className="popular-destination__info-description base base--regular">
              Start from
              <span className="base base--bold popular-destination__info-description-price">
                $ 72.00
              </span>
              <span className="popular-destination__info-description-day">
                / day
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
