import React from "react";
import PartnerEmirates from "@/public/img/Airline_Partner - Emirates.png";
import PartnerIsland from "@/public/img/Airline_Partner - Island Airlines.png";
import PartnerEtihad from "@/public/img/Airline_Partner - Etihad.png";
import PartnerQatar from "@/public/img/Airline_Partner - Qatar Airways.png";
import PartnerFlyDubai from "@/public/img/Airline_Partner - Fly DUbai.png";
import PartnerGaruda from "@/public/img/Airline_Partner - Garuda Indonesia.png";
import PartnerMalaysia from "@/public/img/Airline_Partner - Malaysia Airlines.png";
import PartnerSingapore from "@/public/img/Airline_Partner - Singapore Airlines.png";
import "./airline-partner.scss";
import Image from "next/image";

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
            <Image src={Partner} alt="Airline Partner" height={50} />
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
