import React from "react";
import "./header.scss";
import { TabType } from "@/types/tabs-list";
import Tabs from "../ui/tabs";
import SearchBox from "../ui/search";
import Image from "next/image";

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

  return (
    <header className={`header ${headerClasses[activeTab] || "header--hotel"}`}>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="content padding-container">
        <h1 className="heading-1">{headerContent.heading[activeTab]}</h1>
        <p className="xl xl--medium">{headerContent.description[activeTab]}</p>
      </div>
      <SearchBox activeTab={activeTab} />
      {activeTab === "book-transfer" && (
        <div className="aged-driver-check padding-container">
          <label className="custom-checkbox">
            <input type="checkbox" className="custom-checkbox__input" />
            <span className="custom-checkbox__checkmark"></span>
            <p className="base base--medium">Driver aged between 30 - 65</p>
            <Image
              className="aged-driver-check-icon"
              src="/img/warning.svg"
              alt="warning"
              width={24}
              height={24}
            />
          </label>
        </div>
      )}
    </header>
  );
}
