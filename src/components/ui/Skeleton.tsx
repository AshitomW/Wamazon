import React from "react";

export function Skeleton({ className = "", ...props }) {
  return (
    <div
      className={`animate-pulse bg-gray-200 border-2 border-transparent ${className}`}
      {...props}
    />
  );
}
