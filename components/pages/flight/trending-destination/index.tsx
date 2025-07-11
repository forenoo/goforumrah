import Image from "next/image";
import "./trending-destination.scss";
import AirplaneIcon from "@/public/img/Airplane.svg";

export default function TrendingDestinationSection() {
  const trendingDestinations = [
    {
      name: "Riyadh",
      price: "$ 2,200",
      airline: "Etihad Airways",
      image: "/img/riyadh.jpg",
    },
    {
      name: "Jeddah",
      price: "$ 1,400",
      airline: "Qatar Airways",
      image: "/img/jeddah.jpg",
    },
    {
      name: "Madinah",
      price: "$ 1,900",
      airline: "Emirates",
      image: "/img/maddinah.jpg",
    },
    {
      name: "Taif",
      price: "$ 1,000",
      airline: "Saudia",
      image: "/img/taif.jpg",
    },
    {
      name: "Buraidah",
      price: "$ 800",
      airline: "Oman Air",
      image: "/img/buraidah.jpg",
    },
  ];
  return (
    <section className="featured-hotels-section section-padding">
      <div className="section-header">
        <h3 className="heading-3">Trending destinations</h3>
        <p className="lg lg--regular">
          Most popular choices for travelers from Indonesia
        </p>
      </div>
      <div className="trending-destination__content">
        {trendingDestinations.map((destination, index) => (
          <div
            className={`trending-destination__item trending-destination__item--${
              index + 1
            }`}
            key={index}
          >
            <div className="trending-destination__item-overlay">
              <div className="trending-destination__item-overlay-content">
                <h4 className="trending-destination__item-overlay-content-title">
                  {destination.name}
                  <Image
                    src="/img/Flag_of_Saudi_Arabia.svg"
                    alt="Saudi Arabia"
                    width={18}
                    height={18}
                    className="trending-destination__item-flag"
                  />
                </h4>
                <div className="trending-destination__item-overlay-details">
                  <div className="trending-destination__item-overlay-details-price">
                    <span className="price-label">Start from</span>
                    <span className="price-value">{destination.price}</span>
                  </div>
                  <div className="trending-destination__item-overlay-details-airline">
                    <AirplaneIcon className="airline-icon" />
                    <span>{destination.airline}</span>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src={destination.image}
              alt={destination.name}
              width={512}
              height={512}
              className="trending-destination__item-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
