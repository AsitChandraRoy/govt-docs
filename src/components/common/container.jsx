import { cn } from "../../lib/utils";
import React from "react";

export const Container = ({ children, className }) => {
  return (
    <div className={cn("w-full max-w-screen-xl px-2.5 mx-auto", className)}>
      {children}
    </div>
  );
};