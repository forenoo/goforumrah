import React, { useState } from "react";
import "./featured-hotels.scss";
import FeaturedHotelCard from "@/components/ui/featured-hotel-card";

export default function FeaturedHotelsSection() {
  const TAB_LIST = [
    {
      name: "Al-Ḥawiyah",
      value: "al-hawiyah",
    },
    {
      name: "Al-Hudā",
      value: "al-huda",
    },
    {
      name: "Ju'rānah",
      value: "juranah",
    },
    {
      name: "Makkah",
      value: "makkah",
    },
    {
      name: "Mastūrah",
      value: "masturah",
    },
  ];

  interface HotelData {
    id: string;
    name: string;
    image: string;
    location: string;
    price: string;
  }

  const HOTELS_DATA: Record<string, HotelData[]> = {
    "al-hawiyah": [
      {
        id: "hotel-1",
        name: "Golden Dune Hotel & Suite",
        image: "/img/hotel-1.png",
        location:
          "Saud Al Uthman Saud al uthman Road, 14253 Riyadh, Saudi Arabia",
        price: "$ 350.00",
      },
      {
        id: "hotel-2",
        name: "Karim Hotel Riyadh",
        image: "/img/hotel-2.png",
        location:
          "Prince Mugrin Ibn Abdulaziz, An Nuzhah District, 24446 Riyadh, Saudi Arabia",
        price: "$ 350.00",
      },
      {
        id: "hotel-3",
        name: "Aloft Dhahran Hotel Opens in new window",
        image: "/img/hotel-3.png",
        location:
          "King Saud Branch Road Crossing 21st Street، Dhahran Saudi Arabia, Al Olayya, 11621 Al Khobar",
        price: "$ 350.00",
      },
      {
        id: "hotel-4",
        name: "Aloft Dhahran Hotel Opens in new window",
        image: "/img/hotel-4.png",
        location:
          "King Saud Branch Road Crossing 21st Street، Dhahran Saudi Arabia, Al Olayya, Al Khobar",
        price: "$ 350.00",
      },
    ],
    "al-huda": [
      {
        id: "hotel-5",
        name: "Golden Dune Hotel & Suite",
        image: "/img/hotel-1.png",
        location:
          "Saud Al Uthman Saud al uthman Road, 14253 Riyadh, Saudi Arabia",
        price: "$ 350.00",
      },
      {
        id: "hotel-6",
        name: "Karim Hotel Riyadh",
        image: "/img/hotel-2.png",
        location:
          "Prince Mugrin Ibn Abdulaziz, An Nuzhah District, 24446 Riyadh, Saudi Arabia",
        price: "$ 350.00",
      },
    ],
    juranah: [
      {
        id: "hotel-7",
        name: "Aloft Dhahran Hotel Opens in new window",
        image: "/img/hotel-3.png",
        location:
          "King Saud Branch Road Crossing 21st Street، Dhahran Saudi Arabia, Al Olayya, 11621 Al Khobar",
        price: "$ 350.00",
      },
      {
        id: "hotel-8",
        name: "Aloft Dhahran Hotel Opens in new window",
        image: "/img/hotel-4.png",
        location:
          "King Saud Branch Road Crossing 21st Street، Dhahran Saudi Arabia, Al Olayya, Al Khobar",
        price: "$ 350.00",
      },
    ],
    makkah: [
      {
        id: "hotel-9",
        name: "Golden Dune Hotel & Suite",
        image: "/img/hotel-1.png",
        location:
          "Saud Al Uthman Saud al uthman Road, 14253 Riyadh, Saudi Arabia",
        price: "$ 350.00",
      },
      {
        id: "hotel-10",
        name: "Karim Hotel Riyadh",
        image: "/img/hotel-2.png",
        location:
          "Prince Mugrin Ibn Abdulaziz, An Nuzhah District, 24446 Riyadh, Saudi Arabia",
        price: "$ 350.00",
      },
    ],
    masturah: [
      {
        id: "hotel-11",
        name: "Aloft Dhahran Hotel Opens in new window",
        image: "/img/hotel-3.png",
        location:
          "King Saud Branch Road Crossing 21st Street، Dhahran Saudi Arabia, Al Olayya, 11621 Al Khobar",
        price: "$ 350.00",
      },
      {
        id: "hotel-12",
        name: "Aloft Dhahran Hotel Opens in new window",
        image: "/img/hotel-4.png",
        location:
          "King Saud Branch Road Crossing 21st Street، Dhahran Saudi Arabia, Al Olayya, Al Khobar",
        price: "$ 350.00",
      },
    ],
  };

  const [activeTab, setActiveTab] = useState<
    "al-hawiyah" | "al-huda" | "juranah" | "makkah" | "masturah"
  >("al-hawiyah");

  return (
    <section className="featured-hotels-section section-padding">
      <div className="section-header">
        <h3 className="heading-3">Featured hotels recommended for you</h3>
        <div className="featured-hotels__tab">
          {TAB_LIST.map((tab) => (
            <button
              onClick={() =>
                setActiveTab(
                  tab.value as
                    | "al-hawiyah"
                    | "al-huda"
                    | "juranah"
                    | "makkah"
                    | "masturah"
                )
              }
              key={tab.value}
              className={`base base--regular featured-hotels__tab-item ${
                activeTab === tab.value
                  ? "featured-hotels__tab-item--active"
                  : ""
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>
      <div className="featured-hotels__content">
        {HOTELS_DATA[activeTab].map((hotel) => (
          <FeaturedHotelCard
            key={hotel.id}
            image={hotel.image}
            name={hotel.name}
            location={hotel.location}
            price={hotel.price}
          />
        ))}
      </div>
    </section>
  );
}
