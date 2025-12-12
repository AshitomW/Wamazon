import React from "react";

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`border-2 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:translate-x-1 focus:translate-y-1 focus:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all ${className}`}
      {...props}
    />
  );
}
