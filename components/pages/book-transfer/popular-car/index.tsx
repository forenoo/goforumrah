import React from "react";
import CarBrand1 from "@/public/img/Car-hire-brand-01.png";
import CarBrand2 from "@/public/img/Car-hire-brand-02.png";
import CarBrand3 from "@/public/img/Car-hire-brand-03.png";
import CarBrand4 from "@/public/img/Car-hire-brand-04.png";
import "./popular-car.scss";
import Image from "next/image";

export default function PopularCarSection() {
  const POPULAR_CAR_BRANDS = [CarBrand1, CarBrand2, CarBrand3, CarBrand4];

  return (
    <section className="popular-car-section section-padding">
      <div className="section-header">
        <h3 className="heading-3">Popular car hire brands</h3>
        <p className="lg lg--regular">
          With various partner airlines, we are ready to fly you anywhere.
        </p>
      </div>
      <div className="popular-car__content">
        {POPULAR_CAR_BRANDS.map((Brand, index) => (
          <PopularCarItem key={index}>
            <Image src={Brand} alt="Car Brand" height={50} />
          </PopularCarItem>
        ))}
      </div>
    </section>
  );
}

interface PopularCarItemProps {
  children: React.ReactNode;
}

function PopularCarItem({ children }: PopularCarItemProps) {
  return <div className="popular-car__item">{children}</div>;
}
