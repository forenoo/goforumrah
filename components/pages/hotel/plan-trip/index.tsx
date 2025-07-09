import React from "react";
import "./plan-trip.scss";
import { PLAN_TRIP_CITIES } from "@/constants/plan-trip";
import PlanTripCard from "@/components/ui/plan-trip-card";

export default function PlanTripSection() {
  return (
    <section className="plan-trip-section section-padding">
      <div className="section-header">
        <h3 className="heading-3">Plan your perfect trip</h3>
        <p className="lg lg--regular">
          Search Flights, Hotels & Car Hire to our most popular destinations.
        </p>
      </div>
      <div className="plan-trip__cities">
        {PLAN_TRIP_CITIES.map((city, index) => (
          <PlanTripCard
            key={index}
            image={city.image}
            name={city.name}
            description={city.description}
          />
        ))}
      </div>
    </section>
  );
}
