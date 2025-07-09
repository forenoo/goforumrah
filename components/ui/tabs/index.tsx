import Image from "next/image";
import "./tabs.scss";
import { TabType } from "@/types/tabs-list";
import { TABS_ITEM } from "@/constants/tabs-link";

interface TabsProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  return (
    <div className="tabs-wrapper">
      <div className="tabs">
        {TABS_ITEM.map((item) => (
          <button
            key={item.id}
            className={`tabs-item ${
              activeTab === item.value ? "tabs-item--active" : ""
            }`}
            onClick={() => {
              if (item.value !== "tour-package") {
                setActiveTab(item.value as TabType);
              }
            }}
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={24}
              height={24}
              className="tabs-item-icon"
            />
            <p className="base base--bold tabs-item-link">{item.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
