"use client";

import { useState, useEffect, useRef } from "react";
import "./date-range-picker.scss";
import ArrowRightIcon from "@/public/img/ArrowRight.svg";
import ArrowLeftIcon from "@/public/img/ArrowLeft.svg";

interface DateRangePickerProps {
  onDateChange?: (dates: {
    startDate: Date | null;
    endDate: Date | null;
  }) => void;
  initialStartDate?: Date | null;
  initialEndDate?: Date | null;
  isOpen?: boolean;
  onClose?: () => void;
  minDate?: Date | null;
}

export default function DateRangePicker({
  onDateChange,
  initialStartDate = null,
  initialEndDate = null,
  isOpen = false,
  onClose,
  minDate = null,
}: DateRangePickerProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState<Date | null>(initialStartDate);
  const [endDate, setEndDate] = useState<Date | null>(initialEndDate);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  const isInitialMount = useRef(true);
  const internalUpdate = useRef(false);

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
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node) &&
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

  useEffect(() => {
    if (!internalUpdate.current) {
      setStartDate(initialStartDate);
      setEndDate(initialEndDate);
    }
    internalUpdate.current = false;
  }, [initialStartDate, initialEndDate]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (onDateChange && internalUpdate.current) {
      onDateChange({ startDate, endDate });
    }
  }, [startDate, endDate, onDateChange]);

  useEffect(() => {
    if (!isOpen) {
      setHoverDate(null);
    }
  }, [isOpen]);

  const nextMonth = new Date(currentDate);
  nextMonth.setMonth(currentDate.getMonth() + 1);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  const isSameDay = (date1: Date | null, date2: Date | null) => {
    if (!date1 || !date2) return false;
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const isDateInRange = (date: Date) => {
    if (!startDate || !endDate) return false;
    const time = date.getTime();
    return time > startDate.getTime() && time < endDate.getTime();
  };

  const isDateBeforeToday = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isDateDisabled = (date: Date) => {
    // Check if date is before today or before minDate if provided
    const isPast = isDateBeforeToday(date);
    const isBeforeMinDate = minDate ? date < minDate : false;
    return isPast || isBeforeMinDate;
  };

  const goToPreviousMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const goToNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const handleDateClick = (date: Date) => {
    if (isDateDisabled(date)) return;

    internalUpdate.current = true;

    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else {
      if (date < startDate) {
        setStartDate(date);
        setEndDate(null);
      } else {
        setEndDate(date);
        if (onClose) {
          setTimeout(onClose, 500);
        }
      }
    }
  };

  const handleDateHover = (date: Date) => {
    if (startDate && !endDate) {
      setHoverDate(date);
    }
  };

  const isInHoverRange = (date: Date) => {
    if (!startDate || !hoverDate || endDate) return false;
    const time = date.getTime();
    return (
      time > startDate.getTime() &&
      time < hoverDate.getTime() &&
      hoverDate.getTime() > startDate.getTime()
    );
  };

  const renderCalendar = (date: Date) => {
    const daysInMonth = getDaysInMonth(date);
    const firstDay = getFirstDayOfMonth(date);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="date-range-picker__day date-range-picker__day--empty"
        ></div>
      );
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dayDate = new Date(date.getFullYear(), date.getMonth(), i);
      const isSelected =
        isSameDay(dayDate, startDate) || isSameDay(dayDate, endDate);
      const isRange = isDateInRange(dayDate);
      const isHoverRange = isInHoverRange(dayDate);
      const isDisabled = isDateDisabled(dayDate);

      days.push(
        <div
          key={`day-${i}`}
          className={`date-range-picker__day${
            isDisabled ? " date-range-picker__day--disabled" : ""
          }${isSelected ? " date-range-picker__day--selected" : ""}${
            isRange || isHoverRange ? " date-range-picker__day--in-range" : ""
          }${
            isSameDay(dayDate, startDate)
              ? " date-range-picker__day--start"
              : ""
          }${
            isSameDay(dayDate, endDate) ? " date-range-picker__day--end" : ""
          }`}
          onClick={() => !isDisabled && handleDateClick(dayDate)}
          onMouseEnter={() => handleDateHover(dayDate)}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  if (!isVisible) return null;

  return (
    <div className="date-range-picker">
      <div
        className={`date-range-picker__content ${
          !isAnimating
            ? "date-range-picker__content--open"
            : !isOpen
            ? "date-range-picker__content--closing"
            : ""
        }`}
        ref={pickerRef}
      >
        <div className="date-range-picker__calendars">
          <div className="date-range-picker__calendar">
            <div className="date-range-picker__navigation">
              <button
                className="date-range-picker__nav-btn date-range-picker__nav-btn--prev"
                onClick={goToPreviousMonth}
              >
                <ArrowLeftIcon className="date-range-picker__nav-icon" />
              </button>
            </div>
            <div className="date-range-picker__month-header">
              {formatDate(currentDate)}
            </div>
            <div className="date-range-picker__weekdays">
              {weekDays.map((day) => (
                <div key={day} className="date-range-picker__weekday">
                  {day}
                </div>
              ))}
            </div>
            <div className="date-range-picker__grid">
              {renderCalendar(currentDate)}
            </div>
          </div>

          <div className="date-range-picker__calendar">
            <div className="date-range-picker__navigation">
              <button
                className="date-range-picker__nav-btn date-range-picker__nav-btn--next"
                onClick={goToNextMonth}
              >
                <ArrowRightIcon className="date-range-picker__nav-icon" />
              </button>
            </div>
            <div className="date-range-picker__month-header">
              {formatDate(nextMonth)}
            </div>
            <div className="date-range-picker__weekdays">
              {weekDays.map((day) => (
                <div key={day} className="date-range-picker__weekday">
                  {day}
                </div>
              ))}
            </div>
            <div className="date-range-picker__grid">
              {renderCalendar(nextMonth)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
