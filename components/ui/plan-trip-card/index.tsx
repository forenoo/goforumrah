import Image from "next/image";
import React from "react";
import "./plan-trip-card.scss";

interface PlanTripCardProps {
  image: string;
  name: string;
  description: string;
}

export default function PlanTripCard({
  image,
  name,
  description,
}: PlanTripCardProps) {
  return (
    <div className="plan-trip__card">
      <div className="plan-trip__card-image-box">
        <Image
          width={140}
          height={140}
          src={image}
          alt={name}
          className="plan-trip__card-image"
        />
      </div>
      <div className="plan-trip__card-content">
        <p className="plan-trip__card-name">{name}</p>
        <p className="plan-trip__card-description">{description}</p>
      </div>
    </div>
  );
}
