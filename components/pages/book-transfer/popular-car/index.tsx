import Image from "next/image";
import React from "react";
import CarBrand1 from "@/public/img/Car-hire-brand-01.svg";
import CarBrand2 from "@/public/img/Car-hire-brand-02.svg";
import CarBrand3 from "@/public/img/Car-hire-brand-03.svg";
import CarBrand4 from "@/public/img/Car-hire-brand-04.svg";
import "./popular-car.scss";

export default function PopularCarSection() {
  const POPULAR_CAR_BRANDS = [CarBrand1, CarBrand2, CarBrand3, CarBrand4];

  return (
    <section className="popular-car-section section-padding">
      <div className="section-header">
        <h3 className="heading-3">Popular car hire brands</h3>
        <p className="base base--regular partner__header-description">
          With various partner airlines, we are ready to fly you anywhere.
        </p>
      </div>
      <div className="popular-car__content">
        {POPULAR_CAR_BRANDS.map((brand, index) => (
          <PopularCarItem key={index} image={brand} />
        ))}
      </div>
    </section>
  );
}

interface PopularCarItemProps {
  image: string;
}

function PopularCarItem({ image }: PopularCarItemProps) {
  return (
    <div className="popular-car__item">
      <Image src={image} alt="car" width={56} height={56} />
    </div>
  );
}
