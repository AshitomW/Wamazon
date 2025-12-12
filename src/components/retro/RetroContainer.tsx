import React from "react";

interface RetroContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as?: React.ElementType;
}

export function RetroContainer({
  children,
  className = "",
  as: Component = "div",
  ...props
}: RetroContainerProps) {
  return (
    <Component
      className={`border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
