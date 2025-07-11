import Image from "next/image";
import Button from "../button";
import { TabType } from "@/types/tabs-list";
import "./search-box.scss";
import { useState } from "react";
import DateRangePicker from "../date-range-picker";
import PassengerSelector, { PassengerSelection } from "../passenger-selector";

interface SearchBoxProps {
  activeTab: TabType;
}

interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

export default function SearchBox({ activeTab }: SearchBoxProps) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showPassengerSelector, setShowPassengerSelector] = useState(false);
  const [datePickerType, setDatePickerType] = useState<string>("");
  const [hotelDates, setHotelDates] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });
  const [flightDepartureDate, setFlightDepartureDate] = useState<Date | null>(
    null
  );
  const [flightReturnDate, setFlightReturnDate] = useState<Date | null>(null);
  const [pickupDate, setPickupDate] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });
  const [dropoffDate, setDropoffDate] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });

  // Consolidated date picker state to avoid controlled/uncontrolled switching
  const [currentDateRange, setCurrentDateRange] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });

  // Passenger selection state
  const [passengerSelection, setPassengerSelection] =
    useState<PassengerSelection>({
      adults: 1,
      children: 0,
      rooms: 1,
    });

  // Cabin class state
  const [cabinClass, setCabinClass] = useState<string>("Economy");

  const [flightType, setFlightType] = useState<string>("round-trip");
  const [carType, setCarType] = useState<string>("return-to-same-location");

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

  const formatDateRange = (dates: {
    startDate: Date | null;
    endDate: Date | null;
  }) => {
    if (!dates.startDate) return "";

    const startFormatted = dates.startDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    if (!dates.endDate) return startFormatted;

    const endFormatted = dates.endDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    return `${startFormatted} - ${endFormatted}`;
  };

  const formatSingleDate = (date: Date | null) => {
    if (!date) return "";

    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const openDatePicker = (type: string) => {
    setDatePickerType(type);
    setShowDatePicker(true);

    // Set appropriate date range based on the current tab
    switch (type) {
      case "hotel":
        setCurrentDateRange(hotelDates);
        break;
      case "flight":
        setCurrentDateRange({
          startDate: flightDepartureDate,
          endDate: flightType === "round-trip" ? flightReturnDate : null,
        });
        break;
      case "transfer":
        setCurrentDateRange({
          startDate: pickupDate.startDate,
          endDate: dropoffDate.startDate,
        });
        break;
      default:
        break;
    }
  };

  const closeDatePicker = () => {
    setShowDatePicker(false);
  };

  const openPassengerSelector = () => {
    setShowPassengerSelector(true);
  };

  const closePassengerSelector = () => {
    setShowPassengerSelector(false);
  };

  const handlePassengerSelectionChange = (selection: PassengerSelection) => {
    setPassengerSelection(selection);
    if (selection.cabinClass) {
      setCabinClass(selection.cabinClass);
    }
  };

  const handleCabinClassChange = (newClass: string) => {
    setCabinClass(newClass);
  };

  const handleDateChange = (dates: {
    startDate: Date | null;
    endDate: Date | null;
  }) => {
    // Always update the currentDateRange to keep DateRangePicker controlled
    setCurrentDateRange(dates);

    switch (datePickerType) {
      case "hotel":
        setHotelDates(dates);
        break;
      case "flight":
        setFlightDepartureDate(dates.startDate);
        if (flightType === "round-trip") {
          setFlightReturnDate(dates.endDate);
        } else {
          setFlightReturnDate(null);
        }
        break;
      case "transfer":
        setPickupDate({
          startDate: dates.startDate,
          endDate: null,
        });
        setDropoffDate({
          startDate: dates.endDate,
          endDate: null,
        });
        break;
      default:
        break;
    }
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
      <div
        className="search-item"
        onClick={() => openDatePicker("hotel")}
        style={{ cursor: "pointer", position: "relative" }}
      >
        <Image
          src="/img/calendar.svg"
          alt="Calendar"
          width={24}
          height={24}
          className="search-item-icon"
        />
        <p>
          {hotelDates.startDate && hotelDates.endDate
            ? formatDateRange(hotelDates)
            : "Check in - Check out"}
        </p>

        {datePickerType === "hotel" && (
          <DateRangePicker
            isOpen={showDatePicker}
            onClose={closeDatePicker}
            onDateChange={handleDateChange}
            initialStartDate={currentDateRange.startDate}
            initialEndDate={currentDateRange.endDate}
          />
        )}
      </div>
      <div
        className="search-item-wrapper"
        onClick={openPassengerSelector}
        style={{ cursor: "pointer", position: "relative" }}
      >
        <div className="search-item--small">
          <Image
            src="/img/users.svg"
            alt="Users"
            width={24}
            height={24}
            className="search-item-icon"
          />
          <p>
            {passengerSelection.adults} Adult
            {passengerSelection.adults !== 1 ? "s" : ""}
          </p>
        </div>
        <div className="dot-separator"></div>
        <div className="search-item--small">
          <p>{passengerSelection.children} Children</p>
        </div>
        <div className="dot-separator"></div>
        <div className="search-item--small">
          <p>
            {passengerSelection.rooms} Room
            {passengerSelection.rooms !== 1 ? "s" : ""}
          </p>
        </div>

        {showPassengerSelector && (
          <PassengerSelector
            isOpen={showPassengerSelector}
            onClose={closePassengerSelector}
            onSelectionChange={handlePassengerSelectionChange}
            initialAdults={passengerSelection.adults}
            initialChildren={passengerSelection.children}
            initialRooms={passengerSelection.rooms}
          />
        )}
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
            checked={flightType === "round-trip"}
            value="round-trip"
            className="flight-type-toggle-item-input"
            onChange={(e) => setFlightType(e.target.value)}
          />
          <div className="radio-button"></div>
          <p className="base base--medium">Round-trip</p>
        </label>
        <label className="flight-type-toggle-item">
          <input
            type="radio"
            name="flight-type"
            checked={flightType === "one-way"}
            value="one-way"
            className="flight-type-toggle-item-input"
            onChange={(e) => setFlightType(e.target.value)}
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
          <input
            type="text"
            className="search-item-input"
            placeholder="Where from?"
          />
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
          <input
            type="text"
            className="search-item-input"
            placeholder="Where to?"
          />
        </div>
        <div
          className="search-item"
          onClick={() => openDatePicker("flight")}
          style={{ cursor: "pointer", position: "relative" }}
        >
          <Image
            src="/img/calendar.svg"
            alt="Calendar"
            width={24}
            height={24}
            className="search-item-icon"
          />
          <p>
            {flightDepartureDate
              ? formatSingleDate(flightDepartureDate)
              : "Departure"}
          </p>

          {datePickerType === "flight" && (
            <DateRangePicker
              isOpen={showDatePicker}
              onClose={closeDatePicker}
              onDateChange={handleDateChange}
              initialStartDate={currentDateRange.startDate}
              initialEndDate={currentDateRange.endDate}
            />
          )}
        </div>
        {flightType === "round-trip" && (
          <div
            className="search-item"
            onClick={() => openDatePicker("flight")}
            style={{ cursor: "pointer", position: "relative" }}
          >
            <Image
              src="/img/calendar.svg"
              alt="Calendar"
              width={24}
              height={24}
              className="search-item-icon"
            />
            <p>
              {flightReturnDate ? formatSingleDate(flightReturnDate) : "Return"}
            </p>
          </div>
        )}
        <div
          className="search-item-wrapper"
          onClick={openPassengerSelector}
          style={{ cursor: "pointer", position: "relative" }}
        >
          <div className="search-item--small">
            <Image
              src="/img/users.svg"
              alt="Users"
              width={24}
              height={24}
              className="search-item-icon"
            />
            <p>
              {passengerSelection.adults} Adult
              {passengerSelection.adults !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="dot-separator"></div>
          <div className="search-item--small">
            <p>{cabinClass}</p>
          </div>

          {showPassengerSelector && (
            <PassengerSelector
              isOpen={showPassengerSelector}
              onClose={closePassengerSelector}
              onSelectionChange={handlePassengerSelectionChange}
              initialAdults={passengerSelection.adults}
              initialChildren={passengerSelection.children}
              initialRooms={passengerSelection.rooms}
              showCabinClass={true}
              initialCabinClass={cabinClass}
              onCabinClassChange={handleCabinClassChange}
            />
          )}
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
            checked={carType === "return-to-same-location"}
            value="return-to-same-location"
            className="car-type-toggle-item-input"
            onChange={(e) => setCarType(e.target.value)}
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
            onChange={(e) => setCarType(e.target.value)}
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
          <input
            type="text"
            placeholder="Where your pick-up location?"
            className="search-item-input"
          />
        </div>
        {carType !== "return-to-same-location" && (
          <div className="search-item search-item--full">
            <Image
              src="/img/map-pin-outline.svg"
              alt="Location"
              width={24}
              height={24}
              className="search-item-icon"
            />
            <input
              type="text"
              placeholder="Your drop-off location?"
              className="search-item-input"
            />
          </div>
        )}
        <div
          className="search-item"
          onClick={() => openDatePicker("transfer")}
          style={{ cursor: "pointer", position: "relative" }}
        >
          <Image
            src="/img/calendar.svg"
            alt="Calendar"
            width={24}
            height={24}
            className="search-item-icon"
          />
          <p>
            {pickupDate.startDate
              ? formatSingleDate(pickupDate.startDate)
              : "Pick-up Date & Time"}
          </p>

          {datePickerType === "transfer" && (
            <DateRangePicker
              isOpen={showDatePicker}
              onClose={closeDatePicker}
              onDateChange={handleDateChange}
              initialStartDate={currentDateRange.startDate}
              initialEndDate={currentDateRange.endDate}
            />
          )}
        </div>
        <div
          className="search-item"
          onClick={() => openDatePicker("transfer")}
          style={{ cursor: "pointer", position: "relative" }}
        >
          <Image
            src="/img/calendar.svg"
            alt="Calendar"
            width={24}
            height={24}
            className="search-item-icon"
          />
          <p>
            {dropoffDate.startDate
              ? formatSingleDate(dropoffDate.startDate)
              : "Drop-off Date & Time"}
          </p>
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
