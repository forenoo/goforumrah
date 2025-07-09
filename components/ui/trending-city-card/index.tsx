import Image from "next/image";
import React from "react";
import "./trending-city-card.scss";

interface TrendingCityCardProps {
  title: string;
  description: string;
  variant: string;
}

export default function TrendingCityCard({
  title,
  description,
  variant,
}: TrendingCityCardProps) {
  return (
    <div className={`trending-city__card trending-city__card--${variant}`}>
      <div className="trending-city__card-content">
        <h5 className="heading-5 trending-city__card-title">{title}</h5>
        <div className="trending-city__card-location">
          <Image
            src="/img/flight.svg"
            alt="flight"
            width={24}
            height={24}
            className="trending-city__card-location-icon"
          />
          <p className="lg lg--regular trending-city__card-description">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
