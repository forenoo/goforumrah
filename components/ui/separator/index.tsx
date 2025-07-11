import React from "react";
import "./separator.scss";

interface SeparatorProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export default function Separator({
  className,
  orientation = "horizontal",
}: SeparatorProps) {
  return (
    <div className={`separator ${className} separator--${orientation}`}></div>
  );
}
