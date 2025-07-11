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
        name: "Mawasim Al khair international Hotel",
        image: "/img/alkhair.jpg",
        location: "Makkah 25222, Arab Saudi",
        price: "$ 20.00",
      },
      {
        id: "hotel-2",
        name: "Almassa Grand Hotel",
        image: "/img/almassagrand.jpg",
        location: "4404 Ajyad St, Al Hajlah، 6354, Makkah 24231, Arab Saudi",
        price: "$ 120.00",
      },
      {
        id: "hotel-3",
        name: "Askant Al Hafayer",
        image: "/img/askantalhafayer.jpg",
        location:
          "Umm Al-Qura Street- Al Hafair, 3228, Makkah, Makkah Province, SA",
        price: "$ 30.00",
      },
      {
        id: "hotel-4",
        name: "Sheraton Makkah Jabal Al Kaaba Hotel",
        image: "/img/sheraton.jpg",
        location: "Jabal Al Kaaba, 24231 Mekkah, Arab Saudi",
        price: "$ 160.00",
      },
    ],
    "al-huda": [
      {
        id: "hotel-3",
        name: "Askant Al Hafayer",
        image: "/img/askantalhafayer.jpg",
        location:
          "Umm Al-Qura Street- Al Hafair, 3228, Makkah, Makkah Province, SA",
        price: "$ 30.00",
      },
      {
        id: "hotel-4",
        name: "Sheraton Makkah Jabal Al Kaaba Hotel",
        image: "/img/sheraton.jpg",
        location: "Jabal Al Kaaba, 24231 Mekkah, Arab Saudi",
        price: "$ 160.00",
      },
      {
        id: "hotel-1",
        name: "Mawasim Al khair international Hotel",
        image: "/img/alkhair.jpg",
        location: "Makkah 25222, Arab Saudi",
        price: "$ 20.00",
      },
      {
        id: "hotel-2",
        name: "Almassa Grand Hotel",
        image: "/img/almassagrand.jpg",
        location: "4404 Ajyad St, Al Hajlah، 6354, Makkah 24231, Arab Saudi",
        price: "$ 120.00",
      },
    ],
    juranah: [
      {
        id: "hotel-2",
        name: "Almassa Grand Hotel",
        image: "/img/almassagrand.jpg",
        location: "4404 Ajyad St, Al Hajlah، 6354, Makkah 24231, Arab Saudi",
        price: "$ 120.00",
      },
      {
        id: "hotel-3",
        name: "Askant Al Hafayer",
        image: "/img/askantalhafayer.jpg",
        location:
          "Umm Al-Qura Street- Al Hafair, 3228, Makkah, Makkah Province, SA",
        price: "$ 30.00",
      },
      {
        id: "hotel-4",
        name: "Sheraton Makkah Jabal Al Kaaba Hotel",
        image: "/img/sheraton.jpg",
        location: "Jabal Al Kaaba, 24231 Mekkah, Arab Saudi",
        price: "$ 160.00",
      },

      {
        id: "hotel-1",
        name: "Mawasim Al khair international Hotel",
        image: "/img/alkhair.jpg",
        location: "Makkah 25222, Arab Saudi",
        price: "$ 20.00",
      },
    ],
    makkah: [
      {
        id: "hotel-1",
        name: "Mawasim Al khair international Hotel",
        image: "/img/alkhair.jpg",
        location: "Makkah 25222, Arab Saudi",
        price: "$ 20.00",
      },
      {
        id: "hotel-4",
        name: "Sheraton Makkah Jabal Al Kaaba Hotel",
        image: "/img/sheraton.jpg",
        location: "Jabal Al Kaaba, 24231 Mekkah, Arab Saudi",
        price: "$ 160.00",
      },
      {
        id: "hotel-3",
        name: "Askant Al Hafayer",
        image: "/img/askantalhafayer.jpg",
        location:
          "Umm Al-Qura Street- Al Hafair, 3228, Makkah, Makkah Province, SA",
        price: "$ 30.00",
      },
      {
        id: "hotel-2",
        name: "Almassa Grand Hotel",
        image: "/img/almassagrand.jpg",
        location: "4404 Ajyad St, Al Hajlah، 6354, Makkah 24231, Arab Saudi",
        price: "$ 120.00",
      },
    ],
    masturah: [
      {
        id: "hotel-3",
        name: "Askant Al Hafayer",
        image: "/img/askantalhafayer.jpg",
        location:
          "Umm Al-Qura Street- Al Hafair, 3228, Makkah, Makkah Province, SA",
        price: "$ 30.00",
      },
      {
        id: "hotel-2",
        name: "Almassa Grand Hotel",
        image: "/img/almassagrand.jpg",
        location: "4404 Ajyad St, Al Hajlah، 6354, Makkah 24231, Arab Saudi",
        price: "$ 120.00",
      },
      {
        id: "hotel-1",
        name: "Mawasim Al khair international Hotel",
        image: "/img/alkhair.jpg",
        location: "Makkah 25222, Arab Saudi",
        price: "$ 20.00",
      },
      {
        id: "hotel-4",
        name: "Sheraton Makkah Jabal Al Kaaba Hotel",
        image: "/img/sheraton.jpg",
        location: "Jabal Al Kaaba, 24231 Mekkah, Arab Saudi",
        price: "$ 160.00",
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
