import Image from "next/image";
import Button from "../button";
import { TabType } from "@/types/tabs-list";
import "./search-box.scss";

interface SearchBoxProps {
  activeTab: TabType;
}

export default function SearchBox({ activeTab }: SearchBoxProps) {
  const buttonContent = {
    hotel: "Search Hotel",
    flight: "Search Flight",
    "book-transfer": "Search Car",
  };

  const searchClassMap = {
    hotel: "",
    flight: "search--flight",
    "book-transfer": "search--book-transfer",
  };

  const boxClassMap = {
    hotel: "",
    flight: "border-radius-top-none",
    "book-transfer": "border-radius-top-none",
  };

  const renderHotelSearch = () => (
    <div className="search-container">
      <div className="search-item search-item--full">
        <Image
          src="/img/building.svg"
          alt="Hotel"
          width={24}
          height={24}
          className="search-item-icon"
        />
        <input
          type="text"
          className="search-item-input"
          placeholder="Where are you going?"
        />
      </div>
      <div className="search-item">
        <Image
          src="/img/calendar.svg"
          alt="Calendar"
          width={24}
          height={24}
          className="search-item-icon"
        />
        <p>Check in - Check out</p>
      </div>
      <div className="search-item-wrapper">
        <div className="search-item--small">
          <Image
            src="/img/users.svg"
            alt="Users"
            width={24}
            height={24}
            className="search-item-icon"
          />
          <p>1 Adult</p>
        </div>
        <div className="dot-separator"></div>
        <div className="search-item--small">
          <p>0 Children</p>
        </div>
        <div className="dot-separator"></div>
        <div className="search-item--small">
          <p>1 Room</p>
        </div>
      </div>
    </div>
  );

  const renderFlightSearch = () => (
    <>
      <div className="flight-type-toggle">
        <label className="flight-type-toggle-item">
          <input
            type="radio"
            name="flight-type"
            defaultChecked
            value="round-trip"
            className="flight-type-toggle-item-input"
          />
          <div className="radio-button"></div>
          <p className="base base--medium">Round-trip</p>
        </label>
        <label className="flight-type-toggle-item">
          <input
            type="radio"
            name="flight-type"
            value="one-way"
            className="flight-type-toggle-item-input"
          />
          <div className="radio-button"></div>
          <p className="base base--medium">One-way</p>
        </label>
      </div>
      <div className="search-container search-container--flight">
        <div className="search-item">
          <Image
            src="/img/AirplaneTakeoff.svg"
            alt="Takeoff"
            width={24}
            height={24}
            className="search-item-icon"
          />
          <p>Where from?</p>
        </div>
        <Image
          src="/img/ArrowsLeftRight.svg"
          alt="Switch"
          width={28}
          height={28}
          className="arrow-left-right-icon"
        />
        <div className="search-item">
          <Image
            src="/img/AirplaneLanding.svg"
            alt="Landing"
            width={24}
            height={24}
            className="search-item-icon"
          />
          <p>Where to?</p>
        </div>
        <div className="search-item">
          <Image
            src="/img/calendar.svg"
            alt="Calendar"
            width={24}
            height={24}
            className="search-item-icon"
          />
          <p>Departure</p>
        </div>
        <div className="search-item">
          <Image
            src="/img/calendar.svg"
            alt="Calendar"
            width={24}
            height={24}
            className="search-item-icon"
          />
          <p>Return</p>
        </div>
        <div className="search-item-wrapper">
          <div className="search-item--small">
            <Image
              src="/img/users.svg"
              alt="Users"
              width={24}
              height={24}
              className="search-item-icon"
            />
            <p>1 Adult</p>
          </div>
          <div className="dot-separator"></div>
          <div className="search-item--small">
            <p>Economy</p>
          </div>
        </div>
      </div>
    </>
  );

  const renderTransferSearch = () => (
    <>
      <div className="car-type-toggle">
        <label className="car-type-toggle-item">
          <input
            type="radio"
            name="car-type"
            defaultChecked
            value="return-to-same-location"
            className="car-type-toggle-item-input"
          />
          <div className="radio-button"></div>
          <p className="base base--medium">Return to same location</p>
        </label>
        <label className="car-type-toggle-item">
          <input
            type="radio"
            name="car-type"
            value="return-to-different-location"
            className="car-type-toggle-item-input"
          />
          <div className="radio-button"></div>
          <p className="base base--medium">Return to different location</p>
        </label>
      </div>
      <div className="search-container">
        <div className="search-item search-item--full">
          <Image
            src="/img/map-pin-outline.svg"
            alt="Location"
            width={24}
            height={24}
            className="search-item-icon"
          />
          <p>Where your pick-up location?</p>
        </div>
        <div className="search-item">
          <Image
            src="/img/calendar.svg"
            alt="Calendar"
            width={24}
            height={24}
            className="search-item-icon"
          />
          <p>Pick-up Date & Time</p>
        </div>
        <div className="search-item">
          <Image
            src="/img/calendar.svg"
            alt="Calendar"
            width={24}
            height={24}
            className="search-item-icon"
          />
          <p>Drop-off Date & Time</p>
        </div>
      </div>
    </>
  );

  const searchContentMap = {
    hotel: renderHotelSearch,
    flight: renderFlightSearch,
    "book-transfer": renderTransferSearch,
  };

  const renderSearchContent = searchContentMap[activeTab] || renderHotelSearch;

  return (
    <div
      className={`search max-container padding-container ${
        searchClassMap[activeTab] || ""
      }`}
    >
      <div className={`search-box ${boxClassMap[activeTab] || ""}`}>
        {renderSearchContent()}
        <Button className="btn--primary btn--rounded-full base base--bold">
          {buttonContent[activeTab] || "Search"}
        </Button>
      </div>
    </div>
  );
}
