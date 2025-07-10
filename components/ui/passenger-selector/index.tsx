import React, { useEffect, useRef, useState } from "react";
import PlusIcon from "@/public/img/plus-icon.svg";
import MinusIcon from "@/public/img/minus-icon.svg";
import "./passenger-selector.scss";

interface PassengerSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectionChange: (selection: PassengerSelection) => void;
  initialAdults?: number;
  initialChildren?: number;
  initialRooms?: number;
  showCabinClass?: boolean;
  initialCabinClass?: string;
  onCabinClassChange?: (cabinClass: string) => void;
}

export interface PassengerSelection {
  adults: number;
  children: number;
  rooms: number;
  cabinClass?: string;
}

export default function PassengerSelector({
  isOpen,
  onClose,
  onSelectionChange,
  initialAdults = 1,
  initialChildren = 0,
  initialRooms = 1,
  showCabinClass = false,
  initialCabinClass = "Economy",
  onCabinClassChange,
}: PassengerSelectorProps) {
  const [adults, setAdults] = useState(initialAdults);
  const [children, setChildren] = useState(initialChildren);
  const [rooms, setRooms] = useState(initialRooms);
  const [cabinClass, setCabinClass] = useState(initialCabinClass);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const selectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);

      requestAnimationFrame(() => {
        setIsAnimating(true);

        setTimeout(() => {
          setIsAnimating(false);
        }, 50);
      });
    } else if (isVisible) {
      setIsAnimating(true);
      const timeout = setTimeout(() => {
        setIsVisible(false);
        setIsAnimating(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isVisible) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectorRef.current &&
        !selectorRef.current.contains(event.target as Node) &&
        onClose
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, onClose]);

  const incrementAdults = () => {
    const newValue = adults + 1;
    setAdults(newValue);
    onSelectionChange({ adults: newValue, children, rooms, cabinClass });
  };

  const decrementAdults = () => {
    if (adults > 1) {
      const newValue = adults - 1;
      setAdults(newValue);
      onSelectionChange({ adults: newValue, children, rooms, cabinClass });
    }
  };

  const incrementChildren = () => {
    const newValue = children + 1;
    setChildren(newValue);
    onSelectionChange({ adults, children: newValue, rooms, cabinClass });
  };

  const decrementChildren = () => {
    if (children > 0) {
      const newValue = children - 1;
      setChildren(newValue);
      onSelectionChange({ adults, children: newValue, rooms, cabinClass });
    }
  };

  const incrementRooms = () => {
    const newValue = rooms + 1;
    setRooms(newValue);
    onSelectionChange({ adults, children, rooms: newValue, cabinClass });
  };

  const decrementRooms = () => {
    if (rooms > 1) {
      const newValue = rooms - 1;
      setRooms(newValue);
      onSelectionChange({ adults, children, rooms: newValue, cabinClass });
    }
  };

  const handleCabinClassChange = (newClass: string) => {
    setCabinClass(newClass);
    onSelectionChange({ adults, children, rooms, cabinClass: newClass });
    if (onCabinClassChange) {
      onCabinClassChange(newClass);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="passenger-selector">
      <div
        className={`passenger-selector__content ${
          !isAnimating
            ? "passenger-selector__content--open"
            : !isOpen
            ? "passenger-selector__content--closing"
            : ""
        }`}
        ref={selectorRef}
      >
        <div className="passenger-selector__columns">
          <div className="passenger-selector__column">
            <h2 className="passenger-selector__title xl xl--bold">Passenger</h2>

            <div className="passenger-selector__row">
              <div className="passenger-selector__label">
                <div>Adult</div>
                <div className="passenger-selector__sublabel">Age 12+</div>
              </div>
              <div className="passenger-selector__controls">
                <button
                  className={`passenger-selector__button passenger-selector__button--decrement`}
                  onClick={decrementAdults}
                  disabled={adults <= 1}
                >
                  <MinusIcon className="passenger-selector__icon" />
                </button>
                <div className="passenger-selector__count">{adults}</div>
                <button
                  className={`passenger-selector__button passenger-selector__button--increment`}
                  onClick={incrementAdults}
                >
                  <PlusIcon className="passenger-selector__icon" />
                </button>
              </div>
            </div>

            <div className="passenger-selector__row">
              <div className="passenger-selector__label">
                <div>Children</div>
                <div className="passenger-selector__sublabel">Age 2 - 17</div>
              </div>
              <div className="passenger-selector__controls">
                <button
                  className={`passenger-selector__button passenger-selector__button--decrement`}
                  onClick={decrementChildren}
                  disabled={children <= 0}
                >
                  <MinusIcon className="passenger-selector__icon" />
                </button>
                <p className="passenger-selector__count">{children}</p>
                <button
                  className={`passenger-selector__button passenger-selector__button--increment`}
                  onClick={incrementChildren}
                >
                  <PlusIcon className="passenger-selector__icon" />
                </button>
              </div>
            </div>

            <div className="passenger-selector__row">
              <div className="passenger-selector__label">
                <div>Baby</div>
                <div className="passenger-selector__sublabel">Under 2 y.o</div>
              </div>
              <div className="passenger-selector__controls">
                <button
                  className={`passenger-selector__button passenger-selector__button--decrement`}
                  onClick={decrementRooms}
                  disabled={rooms <= 1}
                >
                  <MinusIcon className="passenger-selector__icon" />
                </button>
                <div className="passenger-selector__count">{rooms}</div>
                <button
                  className={`passenger-selector__button passenger-selector__button--increment`}
                  onClick={incrementRooms}
                >
                  <PlusIcon className="passenger-selector__icon" />
                </button>
              </div>
            </div>
          </div>

          {showCabinClass && (
            <div className="passenger-selector__column">
              <h2 className="passenger-selector__title xl xl--bold">
                Cabin Class
              </h2>

              <div className="passenger-selector__cabin-options">
                <div
                  className={`passenger-selector__cabin-option ${
                    cabinClass === "Economy"
                      ? "passenger-selector__cabin-option--active"
                      : ""
                  }`}
                  onClick={() => handleCabinClassChange("Economy")}
                >
                  Economy
                  {cabinClass === "Economy" && (
                    <svg
                      className="passenger-selector__check-icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="#10B981"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>

                <div
                  className={`passenger-selector__cabin-option ${
                    cabinClass === "Premium Economy"
                      ? "passenger-selector__cabin-option--active"
                      : ""
                  }`}
                  onClick={() => handleCabinClassChange("Premium Economy")}
                >
                  Premium Economy
                  {cabinClass === "Premium Economy" && (
                    <svg
                      className="passenger-selector__check-icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="#10B981"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>

                <div
                  className={`passenger-selector__cabin-option ${
                    cabinClass === "Business"
                      ? "passenger-selector__cabin-option--active"
                      : ""
                  }`}
                  onClick={() => handleCabinClassChange("Business")}
                >
                  Business
                  {cabinClass === "Business" && (
                    <svg
                      className="passenger-selector__check-icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="#10B981"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>

                <div
                  className={`passenger-selector__cabin-option ${
                    cabinClass === "First"
                      ? "passenger-selector__cabin-option--active"
                      : ""
                  }`}
                  onClick={() => handleCabinClassChange("First")}
                >
                  First
                  {cabinClass === "First" && (
                    <svg
                      className="passenger-selector__check-icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="#10B981"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
