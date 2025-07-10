"use client";

import { useState, useEffect, useRef } from "react";
import "./single-date-picker.scss";
import ArrowRightIcon from "@/public/img/ArrowRight.svg";
import ArrowLeftIcon from "@/public/img/ArrowLeft.svg";

interface SingleDatePickerProps {
  onDateChange?: (selectedDate: Date | null) => void;
  initialDate?: Date | null;
  isOpen?: boolean;
  onClose?: () => void;
  minDate?: Date | null;
}

export default function SingleDatePicker({
  onDateChange,
  initialDate = null,
  isOpen = false,
  onClose,
  minDate = null,
}: SingleDatePickerProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(initialDate);
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
      setSelectedDate(initialDate);
    }
    internalUpdate.current = false;
  }, [initialDate]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (onDateChange && internalUpdate.current) {
      onDateChange(selectedDate);
    }
  }, [selectedDate, onDateChange]);

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
    setSelectedDate(date);

    if (onClose) {
      setTimeout(onClose, 500);
    }
  };

  const renderCalendar = (date: Date) => {
    const daysInMonth = getDaysInMonth(date);
    const firstDay = getFirstDayOfMonth(date);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="single-date-picker__day single-date-picker__day--empty"
        ></div>
      );
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dayDate = new Date(date.getFullYear(), date.getMonth(), i);
      const isSelected = isSameDay(dayDate, selectedDate);
      const isDisabled = isDateDisabled(dayDate);

      days.push(
        <div
          key={`day-${i}`}
          className={`single-date-picker__day${
            isDisabled ? " single-date-picker__day--disabled" : ""
          }${isSelected ? " single-date-picker__day--selected" : ""}`}
          onClick={() => !isDisabled && handleDateClick(dayDate)}
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
    <div className="single-date-picker">
      <div
        className={`single-date-picker__content ${
          !isAnimating
            ? "single-date-picker__content--open"
            : !isOpen
            ? "single-date-picker__content--closing"
            : ""
        }`}
        ref={pickerRef}
      >
        <div className="single-date-picker__calendars">
          <div className="single-date-picker__calendar">
            <div className="single-date-picker__navigation">
              <button
                className="single-date-picker__nav-btn single-date-picker__nav-btn--prev"
                onClick={goToPreviousMonth}
              >
                <ArrowLeftIcon className="single-date-picker__nav-icon" />
              </button>
            </div>
            <div className="single-date-picker__month-header">
              {formatDate(currentDate)}
            </div>
            <div className="single-date-picker__weekdays">
              {weekDays.map((day) => (
                <div key={day} className="single-date-picker__weekday">
                  {day}
                </div>
              ))}
            </div>
            <div className="single-date-picker__grid">
              {renderCalendar(currentDate)}
            </div>
          </div>

          <div className="single-date-picker__calendar">
            <div className="single-date-picker__navigation">
              <button
                className="single-date-picker__nav-btn single-date-picker__nav-btn--next"
                onClick={goToNextMonth}
              >
                <ArrowRightIcon className="single-date-picker__nav-icon" />
              </button>
            </div>
            <div className="single-date-picker__month-header">
              {formatDate(nextMonth)}
            </div>
            <div className="single-date-picker__weekdays">
              {weekDays.map((day) => (
                <div key={day} className="single-date-picker__weekday">
                  {day}
                </div>
              ))}
            </div>
            <div className="single-date-picker__grid">
              {renderCalendar(nextMonth)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
