import React, { useState } from "react";
import { TabType } from "@/types/tabs-list";
import Tabs from "../../ui/tabs";
import SearchBox from "../../ui/search";
import WarningIcon from "@/public/img/warning.svg";
import "./header.scss";

export default function Header({
  activeTab,
  setActiveTab,
}: {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}) {
  const headerClasses = {
    hotel: "header--hotel",
    flight: "header--flight",
    "book-transfer": "header--book-transfer",
  };

  const headerContent = {
    heading: {
      hotel: "Find your next stay",
      flight: "Find your next flight",
      "book-transfer": "Find your best ride",
    },
    description: {
      hotel: "Search low prices on hotels, homes and much more...",
      flight: "Search low prices on flights, homes and much more...",
      "book-transfer": "Search low prices on transfers, homes and much more...",
    },
  };

  // LIFTED STATE: carType
  const [carType, setCarType] = useState<string>("return-to-same-location");

  return (
    <header
      className={`header ${headerClasses[activeTab] || "header--hotel"} ${
        activeTab === "book-transfer" &&
        carType === "return-to-different-location"
          ? "different-location"
          : ""
      }`}
    >
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="content padding-container">
        <h1 className="heading-1">{headerContent.heading[activeTab]}</h1>
        <p className="xl xl--medium">{headerContent.description[activeTab]}</p>
      </div>
      <SearchBox
        activeTab={activeTab}
        carType={carType}
        setCarType={setCarType}
      />
      {activeTab === "book-transfer" && (
        <div className="aged-driver-check padding-container">
          <label className="custom-checkbox">
            <input type="checkbox" className="custom-checkbox__input" />
            <span className="custom-checkbox__checkmark"></span>
            <p className="base base--medium">Driver aged between 30 - 65</p>
            <WarningIcon className="custom-checkbox-icon" />
          </label>
        </div>
      )}
    </header>
  );
}
