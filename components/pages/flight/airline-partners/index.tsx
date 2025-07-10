import React from "react";
import PartnerEmirates from "@/public/img/Airline_Partner - Emirates.svg";
import PartnerIsland from "@/public/img/Airline_Partner - Island Airlines.svg";
import PartnerEtihad from "@/public/img/Airline_Partner - Etihad.svg";
import PartnerQatar from "@/public/img/Airline_Partner - Qatar Airways.svg";
import PartnerFlyDubai from "@/public/img/Airline_Partner - Fly DUbai.svg";
import PartnerGaruda from "@/public/img/Airline_Partner - Garuda Indonesia.svg";
import PartnerMalaysia from "@/public/img/Airline_Partner - Malaysia Airlines.svg";
import PartnerSingapore from "@/public/img/Airline_Partner - Singapore Airlines.svg";
import "./airline-partner.scss";

export default function AirlinePartnerSection() {
  const partners = [
    PartnerEmirates,
    PartnerIsland,
    PartnerEtihad,
    PartnerQatar,
    PartnerFlyDubai,
    PartnerGaruda,
    PartnerMalaysia,
    PartnerSingapore,
  ];

  return (
    <section className="airline-partner-section section-padding">
      <div className="section-header">
        <h3 className="heading-3">Our airline partners</h3>
        <p className="base base--regular">
          With various partner airlines, we are ready to fly you anywhere.
        </p>
      </div>
      <div className="airline-partner__content">
        {partners.map((Partner, index) => (
          <AirlinePartnerItem key={index}>
            <Partner />
          </AirlinePartnerItem>
        ))}
      </div>
    </section>
  );
}

interface AirlinePartnerItemProps {
  children: React.ReactNode;
}

function AirlinePartnerItem({ children }: AirlinePartnerItemProps) {
  return <div className="airline-partner__item">{children}</div>;
}
