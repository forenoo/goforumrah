import Image from "next/image";
import "./featured-hotel-card.scss";

interface FeaturedHotelCardProps {
  image: string;
  name: string;
  location: string;
  price: string;
}

export default function FeaturedHotelCard({
  image,
  name,
  location,
  price,
}: FeaturedHotelCardProps) {
  return (
    <div className="featured-hotel-card">
      <div className="featured-hotel-card__image-box">
        <Image
          width={300}
          height={300}
          src={image}
          alt="Hotel 1"
          className="featured-hotel-card__image"
        />
      </div>
      <div className="featured-hotel-card__content">
        <h5 className="heading-5 featured-hotel-card__name">{name}</h5>
        <div className="featured-hotel-card__location">
          <Image
            src="/img/map-pin.svg"
            alt="Map Pin"
            width={24}
            height={24}
            className="featured-hotel-card__location-icon"
          />
          <p className="featured-hotel-card__location-text">{location}</p>
        </div>
        <div className="featured-hotel-card__price">
          <p className="featured-hotel-card__price-value">{price}</p>
          <p className="featured-hotel-card__price-duration">/ night</p>
        </div>
      </div>
    </div>
  );
}
