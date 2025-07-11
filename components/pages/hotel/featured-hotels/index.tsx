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
        id: "hotel-5",
        name: "Elaf Qinwan Hotel",
        image: "/img/elafqiwan.jpg",
        location:
          "Mansour Street, In Front of Anjum Mall, Beside Masar Destination, 24232 Mekkah, Arab Saudi",
        price: "$ 30.00",
      },
      {
        id: "hotel-6",
        name: "Hilton Hotel & Convention Jabal Omar Makkah",
        image: "/img/hiltonhotel.jpg",
        location: "Jabal Omar, 21955 Mekkah, Arab Saudi",
        price: "$ 184.00",
      },
      {
        id: "hotel-7",
        name: "Abraj Al Tayseer Tuwa Hotel",
        image: "/img/abraj-al-tayseer.jpg",
        location: "Bir Tuwa Street Al Tayseer, 24231 Mekkah, Arab Saudi",
        price: "$ 50.00",
      },
      {
        id: "hotel-8",
        name: "Al Shohada by Palm Rich Makkah",
        image: "/img/palmrich.jpg",
        location: "Ajyad St, Holy City Makkah, 21955 Mekkah, Arab Saudi",
        price: "$ 60.00",
      },
    ],
    juranah: [
      {
        id: "hotel-9",
        name: "Al Kiswah Towers Hotel",
        image: "/img/alkiswah.jpg",
        location: "At Tayseer Distrit, 24231 Mekkah, Arab Saudi",
        price: "$ 45.00",
      },
      {
        id: "hotel-10",
        name: "Jabal Omar Marriott Hotel Makkah ",
        image: "/img/jabalomarmarriott.jpg",
        location: "Umm Al Qura Road, 21955 Mekkah, Arab Saudi",
        price: "$ 146.00",
      },
      {
        id: "hotel-11",
        name: "Le Meridien Makkah",
        image: "/img/lemeridien.jpg",
        location: "King Abdulaziz Road, 21955 Mekkah, Arab Saudi",
        price: "$ 135.00",
      },
      {
        id: "hotel-12",
        name: "Saraya Al Deafah Hotel",
        image: "/img/sarayaaldaefah.jpg",
        location:
          "Nawazi, Jabal Al Kaabah, At Taysir, Mecca, 21955 Mekkah, Arab Saudi",
        price: "$ 55.00",
      },
    ],
    makkah: [
      {
        id: "hotel-13",
        name: "Park Inn by Radisson Makkah Thakher Algharbi",
        image: "/img/parkinn.jpg",
        location: "Thakher West Al Jummayzah 4448, 24237 Mekkah, Arab Saudi",
        price: "$ 50.00",
      },
      {
        id: "hotel-14",
        name: "Mercure Makkah Aziziah",
        image: "/img/mercuremakkah.jpg",
        location:
          "6541 Kulliyyat Al Banat Al Jamiah Mecca 24243 Makkah Al Taif Road, 24243 Mekkah, Arab Saudi",
        price: "$ 37.00",
      },
      {
        id: "hotel-15",
        name: "Novotel Makkah Thakher City",
        image: "/img/novotel.jpg",
        location:
          "Al Andalus Dist P O Box 4575 Makkah Al Mukarama 24237, 24237 Mekkah, Arab Saudi",
        price: "$ 52.00",
      },
      {
        id: "hotel-16",
        name: "M Hotel Makkah by Millennium",
        image: "/img/m-hotel.jpg",
        location: "Ibrahim Al Khalil Road , Al Taqwa, 21955 Mekkah, Arab Saudi",
        price: "$ 47.00",
      },
    ],
    masturah: [
      {
        id: "hotel-17",
        name: "Razana Al Rawdha Hotel",
        image: "/img/razana.jpg",
        location: "Al Azizia District, 24236 Mekkah, Arab Saudi",
        price: "$ 32.00",
      },
      {
        id: "hotel-18",
        name: "Emaar Grand Hotel",
        image: "/img/emaar.jpg",
        location:
          "Ibrahim Al Khalil Street , Masfelah District, Makkah, 21955 Mekkah, Arab Saudi",
        price: "$ 80.00",
      },
      {
        id: "hotel-19",
        name: "Holiday Suites Al Azizia",
        image: "/img/holidaysuites.jpg",
        location:
          "8324, Masjid Ash Shaikh Bin Baz, Al Aziziyah, 24243 Mekkah, Arab Saudi",
        price: "$ 60.00",
      },
      {
        id: "hotel-20",
        name: "Jumeirah Jabal Omar Makkah",
        image: "/img/jumeirah.jpg",
        location: "Ibrahim Al Khalil Road, 21955 Mekkah, Arab Saudi",
        price: "$ 280.00",
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
