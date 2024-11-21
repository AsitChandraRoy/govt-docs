import { cn } from "../../lib/utils";
import React from "react";
import { GradientText } from "./text-gradient";

export const SectionTitle = ({ children, gradient, className }) => (
  <h1
    className={cn(
      "text-2xl md:text-[35px] lg:text-[46px] md:leading-[45px] lg:leading-[58.7px] font-bold font-space-grotesk",
      className
    )}
  >
    {children} <GradientText>{gradient}</GradientText>
  </h1>
);